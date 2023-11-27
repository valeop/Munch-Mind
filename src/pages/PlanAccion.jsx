import './PlanAccion.css'
import React from 'react'

const opciones = [
  { label: '1', value: '1' }, { label: '2', value: '2' }, { label: '3', value: '3' }, { label: '4', value: '4' },
  { label: '5', value: '5' }]
export const PlanAccion = () => {
  return (
    <>
      <div className='action-intro'>
        <h1>Plan de Acción</h1>
        <p className='txt-action'> En este segmento te daremos un plan de acción para tu salud mental de acuerdo
          a tu selección de respuestas en la siguiente encuesta. Recuerda que la selección de respuestas es de 1 a 5,
          siendo 1 <b>muy positivo</b> y 5 <b>muy negativo</b>.
        </p>
      </div>

      <div className='questions-box'>
        <h3>Por favor, responde honestamente:</h3>
        <p><b>Pregunta 1</b><br /> ¿Qué tan insatisfecho/a estás con la vida que tienes?</p>
        <select selected="default">
          <option value="default" hidden>Responde</option>
          {selectOptions(opciones)}
        </select>

        <p><b>Pregunta 2</b><br /> ¿Qué tan insatisfecho/a estás con la vida que tienes?</p>
        <select selected="default">
          <option value="default" hidden>Responde</option>
          {selectOptions(opciones)}
        </select>

        <p><b>Pregunta 3</b><br /> ¿Qué tan insatisfecho/a estás con tu salud física?</p>
        <select selected="default">
          <option value="default" hidden>Responde</option>
          {selectOptions(opciones)}
        </select>

        <p><b>Pregunta 4</b><br /> ¿Qué tan insegoro/a eres de ti mismo/a?</p>
        <select selected="default">
          <option value="default" hidden>Responde</option>
          {selectOptions(opciones)}
        </select>

        <p><b>Pregunta 5</b><br /> ¿Qué tan díficil se te hace interactuar con los demás?</p>
        <select selected="default">
          <option value="default" hidden>Responde</option>
          {selectOptions(opciones)}
        </select>

        <p><b>Pregunta 6</b><br /> ¿Qué tan fácil pierdes la paz que tienes contigo mismo/a?</p>
        <select selected="default">
          <option value="default" hidden>Responde</option>
          {selectOptions(opciones)}
        </select>

        <p><b>Pregunta 7</b><br />¿Qué tanto te afecta pensar en el futuro?</p>
        <select selected="default">
          <option value="default" hidden>Responde</option>
          {selectOptions(opciones)}
        </select>

        <p><b>Pregunta 8</b><br /> ¿Qué tanto sobrepiensas cuando tomas decisiones importantes?</p>
        <select selected="default">
          <option value="default" hidden>Responde</option>
          {selectOptions(opciones)}
        </select>

        <p><b>Pregunta 9</b><br /> ¿Qué tan fácil te frustras por algo que está difícil y necesita más esfuerzo de tu parte? </p>
        <select selected="default">
          <option value="default" hidden>Responde</option>
          {selectOptions(opciones)}
        </select>

        <p><b>Pregunta 10</b><br /> ¿Qué tanto te afecta tu pasado?</p>
        <select selected="default">
          <option value="default" hidden>Responde</option>
          {selectOptions(opciones)}
        </select>
        <input type='submit' className='btn-submit' value='Ver resultados' />
      </div>
    </>
  )
}

function selectOptions(array) {
  {
    return (
      array.map((opcion) => (
        <option key={opcion.value} value={opcion.value}>
          {opcion.label}
        </option>
      ))
    )

  }
}