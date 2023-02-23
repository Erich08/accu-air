import React from 'react';
import { FaStar } from 'react-icons/fa';

function Cards() {
  return (
    <div className='customer--reviews'>
      <h1 className='customer--h1'>Customer Reviews</h1>
      <div className='reviews--wrapper'>
        <div className='review-cards'>
          <ul className='stars'>
            <li>
              <FaStar size={32} style={{ color: 'yellow' }} />
            </li>
            <li>
              <FaStar size={32} style={{ color: 'yellow' }} />
            </li>
            <li>
              <FaStar size={32} style={{ color: 'yellow' }} />
            </li>
            <li>
              <FaStar size={32} style={{ color: 'yellow' }} />
            </li>
            <li>
              <FaStar size={32} style={{ color: 'yellow' }} />
            </li>
          </ul>
          <h2>Dianne</h2>
          <p>
            They were responsive, trustworthy, and overall it was a great
            experience! I highly recommended Accu-Air to anyone in need of HVAC
            service.
          </p>
        </div>
        <div className='review-cards'>
          <ul className='stars'>
            <li>
              <FaStar size={32} style={{ color: 'yellow' }} />
            </li>
            <li>
              <FaStar size={32} style={{ color: 'yellow' }} />
            </li>
            <li>
              <FaStar size={32} style={{ color: 'yellow' }} />
            </li>
            <li>
              <FaStar size={32} style={{ color: 'yellow' }} />
            </li>
            <li>
              <FaStar size={32} style={{ color: 'yellow' }} />
            </li>
          </ul>
          <h2>Paul</h2>
          <p>
            Accu-Air's service technicians were helpful and courteous. They
            worked quickly to identify our issue and fix our HVAC unit.
          </p>
        </div>
        <div className='review-cards'>
          <ul className='stars'>
            <li>
              <FaStar size={32} style={{ color: 'yellow' }} />
            </li>
            <li>
              <FaStar size={32} style={{ color: 'yellow' }} />
            </li>
            <li>
              <FaStar size={32} style={{ color: 'yellow' }} />
            </li>
            <li>
              <FaStar size={32} style={{ color: 'yellow' }} />
            </li>
            <li>
              <FaStar size={32} style={{ color: 'yellow' }} />
            </li>
          </ul>
          <h2>Ryan</h2>
          <p>
            Accu-Air's service is always professional and thorough. We highly
            recommend Accu-Air to anyone looking to upgrade their HVAC system!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
