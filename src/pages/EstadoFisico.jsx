import './EstadoFisico.css'
import React from 'react'
import { useState } from 'react'

let imcR = calculateIMC(165, 68);
let gc = calculateFat("Mujer", 165, 60, 90, 10);
export const EstadoFisico = (valor) => {
    return (
        <>
            <div className='physical-intro'>
                <h1>Estado Físico</h1>
                <p className='txt-physical'>En este segmento brindaremos estimaciones de tu índice de masa corporal
                    y porcentaje de grasa corporal. Ten en cuenta que no son valores exactos, es por eso que un
                    nutricionista puede darte una evaluación más precisa de tu caso.
                </p>
            </div>
            <div className='separador' />
            <div className='IMC-block'>
                <h2>IMC</h2>
                <p className='txt-IMC'>El índice de masa corporal (IMC) es un método de evalucación fácil a partir de
                    tu peso y estatura para categorizar tu resultado como se muestra en tablas. <br /><br />
                    ¡Comencemos!
                </p>
                <div className='IMC-calc'>
                    <span className='calc-input'>
                        <label htmlFor='weight'>Peso (kg)*</label>
                        <input type='number' name='weight' id='weight' />
                    </span>
                    <span>
                        <label> Resultado IMC: </label>
                        <label id='imc'>--</label>
                    </span>
                    <span>
                        <label>Estado: </label>
                        <label id='IMC-state'>--</label>
                    </span>
                    <p id='info-IMC'>Aquí va el párrafo con información del resultado</p>
                </div>
            </div>
            <div className='separador' />
            <div className='fat-block'>
                <h2>Porcentaje de Grasa Corporal</h2>
                <p className='txt-fat'>El porcentaje de grasa corporal es una estimación de realizada a partir de
                    tu peso, estatura, género y las medidas con cinta métrica de tu cintura, cuello y cadera para el
                    caso de las mujeres. Así se podrá categorizar tu resultado como se muestra en tablas. <br /><br />
                    ¡Comencemos!
                </p>
                <div className='fat-calc'>
                    <span>
                        <label>Edad: </label>
                        <label id='age'>--</label>
                    </span>
                    <span>
                        <label>Género: </label>
                        <label id='gen'>--</label>
                    </span>
                    <span className='calc-input'>
                        <label htmlFor='waist'>Cintura (cm)*</label>
                        <input type='number' name='waist' id='waist' />
                    </span>
                    <span className='calc-input'>
                        <label htmlFor='neck'>Cuello (cm)*</label>
                        <input type='number' name='neck' id='neck' />
                    </span>
                    <span className='calc-input'>
                        <label htmlFor='hip'>Cadera (cm) solo para mujeres </label>
                        <input type='number' name='hip' id='hip' />
                    </span>
                    <span>
                        <label>Porcentaje de grasa corporal: </label>
                        <label id='fat'>--</label>
                    </span>
                    <span>
                        <label>Estado: </label>
                        <label id='fat-state'>--</label>
                    </span>
                    <p id='info-fat'>Aquí va el párrafo con información del resultado</p>
                    <p>{imcR}  {gc}</p>
                </div>
            </div>
        </>
    )
}

function calculateIMC(height, weight) {
    height /= 100;
    let imc = (weight / Math.pow(height, 2)).toFixed(2);
    return imc;
}

function calculateFat(gender, height, waist, hip, neck) {
    switch (gender) {
        case "Hombre": return (495 / (1.0324 - 0.19077 * (Math.log10(waist - neck)) + 0.15456 * (Math.log10(height))) - 450).toFixed(2);
        case "Mujer": return (495 / (1.29579 - 0.35004 * (Math.log10(waist + hip - neck)) + 0.22100 * (Math.log10(height))) - 450).toFixed(2)
        default: return null;
    }
}
