import React, { useState, useEffect } from 'react'
import {db} from "../firebase"
import { doc, setDoc } from "firebase/firestore";
import imagen1 from "../Images/coffee1.jpg"

function Register() {

    let initialState = {
        name : "",
        email :"",
        date :"",
        password2 :"",
        password :""
    }

    let [info, setInfo] = useState({...initialState})



    const handleName = event =>{
        setInfo(prevState => ({...prevState, name: event.target.value}))
    }

    const handleEmail = event =>{
        setInfo(prevState => ({...prevState, email: event.target.value}))
    }

    const handleDate = event =>{
        setInfo(prevState => ({...prevState, date: event.target.value}))
    }

    const handlePassword = event =>{
        setInfo(prevState => ({...prevState, password: event.target.value}))
    }
    const handlePassword2 = event =>{
        setInfo(prevState => ({...prevState, password2: event.target.value}))
    }

    const handleSubmit  = async () =>{
        await setDoc(doc(db, "Usuarios", info.email), {
            info
          }, )
    }

    //Mensaje de comprobacion de contraseñas


    return (
        <div className = "container w-100">
                <div className = "container position-absolute m-0">
                    <img src={imagen1} className = "img-fluid"></img>
                </div>
                <div className = "container position-relative border border-2 rounded border-primary bg-white w-50 ">
                    <form className = "p-3"> 
                        <div className ="mb-3">
                            <label className = "form-label d-block w-100 mx-auto">Ingrese su nombre: </label>
                            <input type = "text" onChange = {handleName}className="form-control"/>
                        </div> 
                    <div className="mb-3">
                        <label className = "form-label">Ingrese su correo electrónico: </label>
                        <input type = "email"  onChange = {handleEmail} className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label className = "form-label">Ingrese su fecha de nacimiento: </label>
                        <input type = "date" onChange = {handleDate}  className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label className = "form-label">Ingrese su contraseña: </label>
                        <input type = "password" onChange = {handlePassword} className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label className = "form-label">Ingrese su contraseña nuevamente: </label>
                        <input type = "password"  onChange = {handlePassword2} className ="form-control"/>
                    </div>
                    <div className = "container mb-4 mt-5">
                    <button type="button" onClick = {handleSubmit} className="btn btn-primary d-block mx-auto">
                        Registrarse
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )

    
}



export default Register
