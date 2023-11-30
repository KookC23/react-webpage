import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Playa.jpg'
              text='A unos 163 kilómetros de la ciudad de Río de Janeiro, Arraial do Cabo se perfila como una de las zonas costeras más atractivas.  '
              label='Adventurate'
              path='/services'
            />
            <CardItem
              src='images/india.jpg'
              text='El antiguo bosque de Puzzlewood está ubicado cerca de Coleford (Inglaterra) y está considerado como un lugar de interés turístico ya que hasta aquí llegan fans de El Señor de los Anillos de todas partes del mundo.'
              label='Aventurate'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/hh.jpg'
              text='Las Cataratas del Niágara se encuentran en la Frontera entre Canadá y Estados Unidos frente a las Cataratas del Niágara, Nueva York.Un destino vibrante para todas las estaciones'
              label='Adventurate'
              path='/services'
            />
            <CardItem
              src='images/oo.jpg'
              text='Uno de los paisajes naturales más bellos del mundo. Esta maravilla de la naturaleza está en Croacia y está compuesta por 16 lagos a cada cual más bonito.'
              label='Explora'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Uno de los lugares más inhóspitos del planeta pero al mismo tiempo una de las maravillas del mundo: el desierto del Sáhara, la mayor superficie de arena de la Tierra, alberga algunos de los paisajes y lugares más fascinantes y es una visita imprescindible '
              label='Explora'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;