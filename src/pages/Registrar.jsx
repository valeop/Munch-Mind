import './Registrar.css';
import { useState } from 'react';
import UsuarioService from '../services/UsuarioService';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';




export const Registrar = () => {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [dateBirth, setDateBirth] = useState("")
    const [height, setHeight] = useState("")
    const [gender, setGender] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const createUser = async () => {
        const data = {
            name: name,
            surname: surname,
            dateBirth: dateBirth,
            height: height,
            gender: gender,
            email: email,
            password: password
        }

        const response = await axios.post("http://localhost:8080/api/v1/usuarios", data);

        if (response.status === 201) {
            alert("Usuario creado correctamente");
        } else {
            alert("Error al crear el usuario");
        }
    }
    //const { register, handleSubmit, formState: { errors } } = useForm();
    // {errors.password && <span className='error'>Contraseña requerida</span>}


    return (
        <>
            <form className='signup-form' >
                <h1>Ingresa los datos</h1>
                <div className='Data-block'>
                    <div className='data1'>
                        <label htmlFor='name'>Nombre *</label>
                        <input type='text' value={name} id='name' name='name' onChange={(e) => setName(e.target.value)} />

                        <label htmlFor='surname'>Primer Apellido *</label>
                        <input type='text' value={surname} id='surname' name='surname' onChange={(e) => setSurname(e.target.value)} />


                        <label htmlFor='secondSurname'>Segundo apellido *</label>
                        <input type='text' id='secondSurname' />


                        <label htmlFor='dateBirth'>Fecha de nacimiento *</label>
                        <input type='date' value={dateBirth} id='dateBirth' name='dateBirth' onChange={(e) => setDateBirth(e.target.value)} />

                    </div>
                    <div className='data2'>
                        <label htmlFor='height'>Estatura (cm) *</label>
                        <input type='number' value={height} id='height' name='height' onChange={(e) => setHeight(e.target.value)} />


                        <label>Género *</label>
                        <select id='gender' value={gender} selected='' name='gender' onChange={(e) => setGender(e.target.value)}>
                            <option value='' hidden>Selecciona...</option>
                            <option value='Mujer'>Mujer</option>
                            <option value='Hombre'>Hombre</option>
                        </select>

                        <label htmlFor='email' >Correo electrónico *</label>
                        <input type='email' value={email} id='email' name='email' onChange={(e) => setEmail(e.target.value)} />


                        <label htmlFor='password'>Contraseña *</label>
                        <input type='password' value={password} id='password' name='password' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                <input type='submit' className='btn-signup' value='Registrar' onClick={(e) => createUser} />
            </form>
        </>
    );
}