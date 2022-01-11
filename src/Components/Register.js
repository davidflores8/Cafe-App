import React, { useState, useEffect } from 'react'

function Register() {

    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [date, setDate] = useState("")
    let [password, setPassword] = useState("")
    let [password2, setPassword2] = useState("")

    //Mensaje de comprobacion de contraseñas


    return (
        <div className = "container-sm border border-2 rounded border-primary mt-4 w-50">
            <form className = "mt-4"> 
                <div className ="mb-3">
                    <label className = "form-label d-block w-100 mx-auto">Ingrese su nombre: </label>
                    <input type = "text" onChange = {setName = e => {name = e.target.value } } className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className = "form-label">Ingrese su correo electrónico: </label>
                    <input type = "email" onChange = {setEmail = e => {email = e.target.value } } className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className = "form-label">Ingrese su fecha de nacimiento: </label>
                    <input type = "date" onChange = {setDate = e => {date = e.target.value } } className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className = "form-label">Ingrese su contraseña: </label>
                    <input type = "password" onChange = {setPassword = e => {password = e.target.value } }className="form-control"/>
                </div>
                <div className="mb-3">
                    <label className = "form-label">Ingrese su contraseña nuevamente: </label>
                    <input type = "password" onChange = {setPassword2 = e => {password2 = e.target.value; passwordsConfiguration();} } className ="form-control"/>
                    <label className = "form-text"> -- {password2}</label>
                </div>
                <div className = "container mb-4 mt-5">
                   <button type="button" className="btn btn-primary d-block mx-auto">
                       Registrarse
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Register
