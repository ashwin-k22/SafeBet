import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Projects Near You</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src='images/safestreets.jpeg'
              text='Safe Streets'
              label='Map Tech'
              path='/investmentopps'
            />
            </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/eye.png'
              text='MR-EYE'
              label='Med Tech'
              path='/investmentopps'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/thumb.png'
              text='Green Thumb'
              label='Agri Tech'
              path='/investmentopps'
            />
            </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/idea.png'
              text='VoltBand'
              label='Creator'
              path='/investmentopps'
            />
            <CardItem
              src='images/paw.png'
              text='AutoCorrect'
              label='Vet Tech'
              path='/investmentopps'
              />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;