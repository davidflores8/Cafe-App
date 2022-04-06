import React, { useState, useEffect } from 'react'
import {doc, setDoc} from 'firebase/firestore'
import db from "../firebase"

function Register() {

    //const initialValues = {name:" ",email:" ", date:" ", password:" ",password2:" " }
    const [values,setValues] = useState({})
    const [formValues, setFormValues] = useState({})
    const [isSubmit, setIsSubmit]= useState(false)

    //Mensaje de comprobacion de contraseñas

    useEffect(() => {
      if(Object.keys(formValues).length==0 & isSubmit){
          submitToDataBase()
      }

    }, [formValues])
    
    const submitToDataBase = async () => {
        await setDoc(doc(db, "Usuarios", values.email), values);
          console.log("Agregado a la base de datos")
    }
    
    const updateValues = (e)=> {
        const {name, value} = e.target
        setValues({...values, [name]: value});
        
    }; 

    const handleSubmit = (e)=>{
        e.preventDefault();
        setFormValues(validate(values))
        setIsSubmit(true)

    };

    const validate = (values) =>{
        let errors ={}
        if(!values.name){
            errors.name = "Nombre es requerido"
        }
        if(!values.email){
            errors.email = "Correo es requerido"
        }
        if(!values.date){
            errors.date = "Fecha de nacimiento es requerido"
        }
        if(!values.password){
            errors.password = "Contraseña  es requerido"
        }

        return errors;
    };



    return (
        <div className = "container-sm border border-2 rounded border-primary mt-4 w-50">
            <form className = "mt-4"> 
                <div className ="mb-3">
                    <label className = "form-label d-block w-100 mx-auto">Ingrese su nombre: </label>
                    <input type = "text" name="name" onChange = { updateValues}  className="form-control"/>
                    <p className="text-danger">{formValues.name}</p>
                </div>
                <div className="mb-3">
                    <label className = "form-label">Ingrese su correo electrónico: </label>
                    <input type = "email" name="email" onChange = { updateValues} className="form-control"/>
                    <p className="text-danger">{formValues.email}</p>
                </div>
                <div className="mb-3">
                    <label className = "form-label">Ingrese su fecha de nacimiento: </label>
                    <input type = "date" name="date" onChange = { updateValues}  className="form-control"/>
                    <p className="text-danger">{formValues.date}</p>
                </div>
                <div className="mb-3">
                    <label className = "form-label">Ingrese su contraseña: </label>
                    <input type = "password" name="password" onChange = { updateValues} className="form-control"/>
                    <p className="text-danger">{formValues.password}</p>
                </div>
                <div className="mb-3">
                    <label className = "form-label">Ingrese su contraseña nuevamente: </label>
                    <input type = "password" name="passwrd2" onChange = { updateValues} className ="form-control"/>
                    <p className="text-danger">{formValues.password}</p>
                    
                </div>
                <div className = "container mb-4 mt-5">
                   <button type="button" className="btn btn-primary d-block mx-auto" onClick={handleSubmit}>
                       Registrarse
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Register
