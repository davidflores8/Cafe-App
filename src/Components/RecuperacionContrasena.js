import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom" 
import coffee3 from "../imagenes/coffee3.jpg"
import {getAuth, sendPasswordResetEmail} from "firebase/auth"

function RecuperacionContrasena (){

    let [email, setEmail] = useState("")
    let [value, setValue] = useState("")
    let [isSubmit, setIsSubmit] = useState(false)

    useEffect(() => {
      if(email.length>0 & isSubmit){
           const auth = getAuth();
            sendPasswordResetEmail(auth, email)
            .then(()=>{
                console.log("correo enviado")
            }, (error)=>{
                console.log(error)
            })
      }
    
      
    }, [value])
    

    const handleSubmit = (e) =>{
        e.preventDefault();
        setIsSubmit(true)
        setValue(validate(email))
    }

    const validate = email => {
        let error
        if(!email){
            error = "Debe completar este campo"
        }
        return error;
    }


    return (
        <div className="container w-100 d-flex justify-content-center">
            <div className="container w-100 position-absolute">
                <img className="img-fluid w-100" alt=" " src={coffee3} />
            </div>
            <form className = " p-5 position-relative bg-white mt-5 border border-2 rounded border-primary w-50"> 
               <div className='mb-3'>
                    <label className = "form-label d-block w-100 mx-auto">Ingrese su correo electrónico: </label>
                    <input name = "email" className="form-control" type="email" onChange={(e)=> setEmail(email= e.target.value) }/>
                    <p className="text-danger">{value}</p>
               </div>
               <div className = "container">
                    <p>¿No tienes cuenta? <Link to="/register" > Ingresa aquí </Link> </p>
                   <button type="button" className="btn btn-primary d-block mx-auto mt-3" onClick={handleSubmit} >
                       Recupera tu contraseña
                    </button>
                </div>
            </form>
        </div>



    );

}

export default RecuperacionContrasena;
