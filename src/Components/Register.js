import React, { useState, useEffect } from 'react'
import {doc, setDoc} from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import db from "../firebase"
import coffee1 from "../imagenes/coffee3.jpg"
import { Link } from 'react-router-dom'

function Register() {

    //const initialValues = {name:" ",email:" ", date:" ", password:" ",password2:" " }
    const [values,setValues] = useState({})
    const [formValues, setFormValues] = useState({})
    const [isSubmit, setIsSubmit]= useState(false)
    let [errorMsg, setErrorMsg] = useState("")

    //Mensaje de comprobacion de contraseñas

    useEffect(() => {
      if(Object.keys(formValues).length===0 & isSubmit){
          submitToDataBase()
      }

    }, [formValues, errorMsg])
    
    const submitToDataBase = async () => {
        await setDoc(doc(db, "Usuarios", values.email), values);
          console.log("Agregado a la base de datos")
        
          const auth = getAuth();
        createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
            let user = userCredential.user
            console.log(user)
            console.log("Agregado a la base de datos de autenticacion")
        }, (error) => {
            console.log("No se agrego a la base de datos de autenticacion")
            setErrorMsg(errorMsg = error.message)
            console.log("Este es el error - ",errorMsg)
        })

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
        <div className = "container w-100 d-flex justify-content-center ">
            <div className="container w-100 position-absolute ">
                <img alt=" " className="img-fluid w-100 " src={coffee1}/>
            </div>
            <form className = "p-4 position-relative bg-white mt-5 border border-2 rounded border-primary w-50"> 
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
                <div className = "container mt-1">
                    <p>¿Ya tienes cuenta? <Link to="/login" > Ingresa aquí </Link> </p>
                    <p className = "text-danger">{errorMsg}</p>
                   <button type="button" className="btn btn-primary d-block mx-auto" onClick={handleSubmit}>
                       Registrarse
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Register
