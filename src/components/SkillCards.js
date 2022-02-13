import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Investors Near You</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/joe-burrow.jpeg'
              text='Joseph Burrow'
              label='Python, Swift, Java'
              path='/investmentopps'
            />
            </ul>
          <ul className='cards__items'>
            <CardItem
            src='images/joe-burrow-cigar.gif'
            text='Joe Brrr'
            label='Google APIs, Ubuntu, Swift'
            path='/investmentopps'
          />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/lolol.jpeg'
              text='Joe Sheisty'
              label='Hardware, Electrical Engineering'
              path='/investmentopps'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/joe-burrow-cigar.gif'
              text='Joe Brrr'
              label='Google APIs, Ubuntu, Swift'
              path='/investmentopps'
            />
            </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/grid.jpg'
              text='Jamaar Chase'
              label='Business Analytics, Statistics'
              path='/addprojects'
            />
            </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/mat.jpeg'
              text='Matt Stafford'
              label='Farming Tech, Woodworking'
              path='/investmentopps'
            />
            <CardItem
              src='images/kup.jpeg'
              text='Cooper Kupp'
              label='Physics'
              path='/investmentopps'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;