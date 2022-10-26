import React, { useState, useEffect } from 'react'
import { doc, setDoc } from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import db from "../firebase"
import { useFormik } from 'formik'
import coffee1 from "../imagenes/coffee3.jpg"
import { Link } from 'react-router-dom'

function Register() {

    //const initialValues = {name:" ",email:" ", date:" ", password:" ",password2:" " }


    //Mensaje de comprobacion de contraseñas

    const formik = useFormik({
        initialValues: {
            nombre: "",
            correo: "",
            fecha_nacimiento: "",
            contraseña: "",
        }, onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        }
    })

console.log("Esta es la branch de david")
console.log("Esta es la branch de david")
console.log("Esta es la branch de david")
console.log("Esta es la branch de david")
console.log("Esta es la branch de david")
console.log("Esta es la branch de david")
console.log("Esta es la branch de david")


    return (
        <div className="container w-100 d-flex justify-content-center">
            <div className="container w-100 position-absolute ">
                <img alt=" " className="img-fluid w-100 " src={coffee1} />
            </div>
            <div className = "container container-md">
                <form onSubmit={formik.handleSubmit} className="p-4 d-flex flex-column position-relative bg-white mt-5 border border-2 rounded border-primary w-100">
                    <div className="mb-3">
                        <label className="form-label d-block w-100 mx-auto">Ingrese su nombre: </label>
                        <input type="text" name="nombre" onChange={formik.handleChange} value={formik.values.nombre} className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Ingrese su correo electrónico: </label>
                        <input type="email" name="correo" onChange={formik.handleChange} value={formik.values.correo} className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Ingrese su fecha de nacimiento: </label>
                        <input type="date" name="fecha_nacimiento" onChange={formik.handleChange} value={formik.values.fecha_nacimiento} className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Ingrese su contraseña: </label>
                        <input type="password" name="contraseña" onChange={formik.handleChange} value={formik.values.contraseña} className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Ingrese su contraseña nuevamente: </label>
                        <input type="password" name="contraseña" onChange={formik.handleChange} value={formik.values.contraseña} className="form-control" />

                    </div>
                    <div className="container mt-1">
                        <p>¿Ya tienes cuenta? <Link to="/login" > Ingresa aquí </Link> </p>
                        <button type="submit" className="btn btn-primary d-block mx-auto">
                            Registrarse
                        </button>
                    </div>
                </form>
            </div>
        </div>)
}

export default Register
