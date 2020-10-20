import React from 'react';
// import { WeatherContext } from '../WeatherContext';
import style from './styles/Current.module.css';

export default function Current() {
  // const { dataCurrent } = React.useContext(WeatherContext);

  return (
    <main className={style.mainCurrent}>
      <section className={style.sectionMain}>
        <div className={style.resume}>
          <h2>Clima em ...</h2>
          <span>Às ...</span>
        </div>
        <div>
          <span>Temperatura</span>
        </div>
        <div></div>
      </section>

      <section className={style.details}></section>
    </main>
  );
}
