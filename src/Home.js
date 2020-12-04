import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
  return (
    <div className='home'>
      <img
        className='home__image'
        src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
        alt=''
      />

      <div className='home__row'>
        <Product
          id='123456'
          title='Aint this some bullshit'
          price={11.79}
          rating={5}
          image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsv05uSGrQkMG5qqmsGeCuWQYZc8HGzscXOg&usqp=CAU'
        />
        <Product
          id='123456'
          title='Aint this some bullshit'
          price={11.79}
          rating={5}
          image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsv05uSGrQkMG5qqmsGeCuWQYZc8HGzscXOg&usqp=CAU'
        />
      </div>
      <div className='home__row'>
        <Product
          id='123456'
          title='Aint this some bullshit'
          price={11.79}
          rating={5}
          image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsv05uSGrQkMG5qqmsGeCuWQYZc8HGzscXOg&usqp=CAU'
        />
        <Product
          id='123456'
          title='Aint this some bullshit'
          price={11.79}
          rating={5}
          image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsv05uSGrQkMG5qqmsGeCuWQYZc8HGzscXOg&usqp=CAU'
        />
        <Product
          id='123456'
          title='Aint this some bullshit'
          price={11.79}
          rating={5}
          image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsv05uSGrQkMG5qqmsGeCuWQYZc8HGzscXOg&usqp=CAU'
        />
      </div>
      <div className='home__roq'>
        <Product
          id='123456'
          title='Aint this some bullshit'
          price={11.79}
          rating={5}
          image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsv05uSGrQkMG5qqmsGeCuWQYZc8HGzscXOg&usqp=CAU'
        />
      </div>
    </div>
  );
}

export default Home;
