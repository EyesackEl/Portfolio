import React from 'react';

export default function AboutMe({ handlePageChange }) {
    return (
      <div className='column'>
        <div className='card'>
          <div className='card-content content'>
            <h3>The story of the one and only...</h3>
            <br></br>
            <p>
              Hello! My name is Isaac LaFlamme and I am a student of the UW
              full-stack-flex bootcamp! Over the last 6 months I have become
              well acquainted with the ins and outs of developing full stack
              applications and am beyond excited to continue furthering my
              skills.
            </p>
            <p>
              For examples of my work, please feel free to navigate to the
              Portfolio section of the website for deployed links as well as
              github to review code. If you would like to reach out please do
              not hesitate to email me at
              <a href='mailto:isaac.laflamme@gmail.com'>
                {' '}
                isaac.laflamme@gmail.com
              </a>
              , or navigate to the
              <a href='#Contact' onClick={() => handlePageChange('Contact')}>
                {' '}
                Contact
              </a>{' '}
              form.
            </p>
          </div>
        </div>
      </div>
    );
}