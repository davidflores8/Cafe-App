import React, { useState, useEffect } from 'react'
import {Link} from "react-router-dom" 
import coffee2 from "../imagenes/coffee1.jpg"



function LogIn() {

    const [values, setValues] = useState({})
    const [formValues, setFormValues] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    useEffect(() => {
        if(Object.keys(formValues).length===0 & isSubmit){
            
        }
    }, [formValues])
    

    const handleValues = (e) =>{
        const{name,value} = e.target
        setValues({...values, [name]: value})

    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setFormValues(validate(values));
        setIsSubmit(true);
    }

    const validate = (values) =>{
        const errors = {}
        if(!values.email){
            errors.email= "El correo ingresado no es correcto. "
        }
        if(!values.password){
            errors.password= "Por favor, ingresa una contraseña. "
        }
        return errors;

    }

    return (
        <div className="container w-100 d-flex justify-content-center">
            <div className="container w-100 position-absolute">
                <img className="img-fluid w-100" alt=" " src={coffee2} />
            </div>
            <form className = " p-5 position-relative bg-white mt-5 border border-2 rounded border-primary w-50"> 
               <div className='mb-3'>
                    <label className = "form-label d-block w-100 mx-auto">Ingrese su correo electrónico: </label>
                    <input name = "email" className="form-control" type="email" onChange={handleValues}/>
                    <p className="text-danger">{formValues.email}</p>
               </div>
                <div className='mb-3'>
                    <label className = "form-label d-block w-100 mx-auto"> Ingrese su contraseña: </label>
                    <input name="password" className="form-control" type="password" onChange={handleValues}/>
                    <p className="text-danger">{formValues.password}</p>
                </div>
                <div className = "container mb-1 mt-1">
                    <p>¿No tienes cuenta? <Link to="/register" > Ingresa aquí </Link> </p>
                    <p>¿No recuerdas tu contraseña? <Link to="/RecuperacionContrasena" > Ingresa aquí </Link> </p>
                   <button type="button" className="btn btn-primary d-block mx-auto" onClick={handleSubmit} >
                       Registrarse
                    </button>
                </div>
            </form>    
        </div>
    )
}

export default LogIn
