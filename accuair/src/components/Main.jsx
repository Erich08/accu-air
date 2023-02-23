import React from 'react';
import Cards from './Cards';

function Main() {
  return (
    <>
      <main>
        <div className='hero--img'>
          <a href='#'>Get a quote</a>
        </div>
        <div className='main--wrapper'>
          <h1>We service all major brands including:</h1>
          <ul className='brands'>
            <li>
              <img src='/york.png' alt='york' />
            </li>
            <li>
              <img src='/trane.png' alt='trane' />
            </li>
            <li>
              <img src='/lennox.png' alt='lennox' />
            </li>
            <li>
              <img src='american.png' alt='american' />
            </li>
          </ul>
          <h1 className='mb'>
            ...and <span>many</span> more!
          </h1>
          <div className='company--pledge'>
            <h2 className='h2--italic'>Why choose Accu-Air?</h2>
            <p>
              Accu-Air is your trusted HVAC contractor in Kiefer, OK and the
              surrounding areas. We are dedicated to providing you with
              affordable and dependable heating and cooling products and
              services. With over two decades of experience in the industry, our
              team has what it takes to install, repair and service all major
              brands of HVAC equipment. Our track record of excellence gives our
              customers the confidence that they are receiving excellent service
              at the best value.
            </p>
          </div>
          <Cards />
        </div>
      </main>
    </>
  );
}

export default Main;
