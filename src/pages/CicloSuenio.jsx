import './CicloSuenio.css';
import React from 'react';
import { useState } from 'react';

const horas = [
  { label: '0', value: '0' }, { label: '1', value: '1' }, { label: '2', value: '2' }, { label: '3', value: '3' },
  { label: '4', value: '4' }, { label: '5', value: '5' }, { label: '6', value: '6' }, { label: '7', value: '7' },
  { label: '8', value: '8' }, { label: '9', value: '9' }, { label: '10', value: '10' }, { label: '11', value: '11' },
  { label: '12', value: '12' }, { label: '13', value: '13' }, { label: '14', value: '14' }, { label: '15', value: '15' },
  { label: '16', value: '16' }, { label: '17', value: '17' }, { label: '18', value: '18' }, { label: '19', value: '19' },
  { label: '20', value: '20' }, { label: '21', value: '21' }, { label: '22', value: '22' }, { label: '23', value: '23' }
]

const minutos = [
  { label: '00', value: '00' }, { label: '05', value: '05' }, { label: '10', value: '10' }, { label: '15', value: '15' },
  { label: '20', value: '20' }, { label: '25', value: '25' }, { label: '30', value: '30' }, { label: '35', value: '35' },
  { label: '40', value: '40' }, { label: '45', value: '45' }, { label: '50', value: '50' }, { label: '55', value: '55' }
]

const cicle4 = 360;
const cicle5 = 450;
const cicle6 = 540;
export const CicloSuenio = () => {
  const [hora, setHora] = useState("");
  const [minuto, setMinuto] = useState("");

  const sumar = () => {
    let hour = ''
    let minute = ''
    if (hora != '' & minuto != '') {
      hour = parseInt(hora);
      minute = parseInt(minuto)
      const res = calcTime(cicle4, hour, minute)
      const res1 = calcTime(cicle5, hour, minute)
      const res2 = calcTime(cicle6, hour, minute)

      return (
        <p>Puedes dormir a estas horas: <br />
          {res[0]}:{res[1]} | Duermes 9 horas <br />
          {res1[0]}:{res1[1]} | Duermes 7 horas y 30 minutos<br />
          {res2[0]}:{res2[1]} | Duermes 6 horas<br />
        </p>
      )
    }
  };

  return (
    <>
      <div className='sleep-intro'>
        <h1>Ciclo del Sueño</h1>
        <p className='txt-sleep'>El ciclo del sueño hace referencia a las etapas progresivas que atraviesa una
          persona mientras se encuentra durmiendo. Cada etapa se repite varias veces durante la noche. Un ciclo de
          sueño completo, desde la etapa 1 a la etapa REM, suele durar entre 90-110 minutos, teniendo, generalmente,
          cinco ciclos a lo largo de la noche. Estas son las 5 etapas del ciclo del sueño:</p>
      </div>
      <div className='etapas-box'>
        <p className='txt-left'><b>Etapa 1:</b> es la etapa intermedia o superficial entre dormir y despertar, por lo tanto, son frecuentes
          los despertares y las sensaciones de "caída".</p>

        <p className='txt-right'><b>Etapa 2:</b> el sueño se vuelve más profundo, la temperatura baja y las ondas cerebrales se vuelven
          más lentas generando una desconexión del entorno.</p>

        <p className='txt-left'><b>Etapa 3:</b> en esta etapa es donde realmente se está teniendo un descanso y se generaría una sensasión
          de confusión en el caso en que el sueño se interrumpa. También podrían aparecer trastornos del sueño
          como el sonambulismo, terrores nocturnos y mojar la cama.</p>

        <p className='txt-right'><b>Etapa 4:</b> aquí es donde se encuentra el sueño profundo y se descansa tanto física como
          psíquicamente. Aunque no es la fase en la que soñamos, el ritmo respiratorio se hace más lento, los músculos
          se relajan y la presión arterial baja.</p>

        <p className='txt-left'><b>Etapa 5 (REM):</b> en esta etapa el ritmo cardíaco y la presión aumenta, al igual que el movimiento
          de los ojos y a la vez, los músculos se paralizan. En este momento el tono muscular no existe (por eso cuando
          queremos gritar en un sueño, no podemos), y es donde se desarrollan la mayoría de los sueños.<br /><br /></p>

        <p>Cuando se siguen los ciclos del sueño de forma correcta, es posible descansar y tener niveles más altos
          de concentración, atención y memoria. Asimismo, el sueño ayuda a fortalecer el sistema inmunológico y
          regular el equilibrio emocional de las personas. Específicamente, la fase REM es fundamental para el desarrollo de la memoria, para procesar las emociones, y para
          mantener el bienestar del cerebro. De hecho, se considera que el sueño REM tiene un papel central en la
          regulación de los estados de ánimo de las personas. <br /><br />
          La siguiente calculadora te recomendará posibles horas para dormir y lograr un correcto ciclo del sueño
        </p>
      </div>
      <div className='sleep-calc'>
        <h2>Calculadora del Ciclo del Sueño</h2>
        <p>Deseas levantarte a las...</p>
        <select value={hora} onChange={(e) => setHora(e.target.value)} selected=''>
          <option value='' hidden>Hora</option>
          {horas.map((hora) => (
            <option key={hora.value} value={hora.value}>
              {hora.label}
            </option>
          ))}
        </select>
        <select value={minuto} onChange={(e) => setMinuto(e.target.value)} selected=''>
          <option value='' hidden>Minutos</option>
          {minutos.map((minuto) => (
            <option key={minuto.value} value={minuto.value}>
              {minuto.label}
            </option>
          ))}
        </select>
        <div className='respuesta-box'>{sumar()}</div>
      </div>
    </>
  )
}

function calcTime(cicle, hour, minutes) {
  let hourSleep = 0, minuteSleep = 0;
  cicle = ((hour * 60) + minutes) - cicle;

  if (cicle < 0) {
    cicle += ((23 * 60) + 60);
    hourSleep = Math.floor(cicle / 60)
    minuteSleep = cicle - (hourSleep * 60);
  } else if (cicle > 0 & cicle < 60) {
    hourSleep = cicle / 60;
    minuteSleep = cicle;
  } else {
    hourSleep = Math.floor(cicle / 60);
    minuteSleep = cicle - (hourSleep * 60);
  }
  const result = [hourSleep.toString().padStart(2, "0"), minuteSleep.toString().padStart(2, "0")];
  return result;
}