import './Ingresar.css';
import React, { useState } from "react";

export const Ingresar = () => {
    const [logEmail, setLogEmail] = useState("")
    const [logPassword, setLogPassword] = useState("")
    return (
        <>
            <form className='login-form'>
                <h1>Iniciar sesión</h1>
                <div className='input-block'>
                    <label>Correo electrónico</label>
                    <input type='email' value={logEmail} id='loginEmail' onChange={(e) => setLogEmail(e.target.value)} />
                    <label>Contraseña</label>
                    <input type='password' value={logPassword} id='loginPassword' onChange={(e) => setLogPassword(e.target.value)} />
                </div>
                <input type='submit' className='btn-login' value='Iniciar sesión' />
            </form>
        </>
    );
}
