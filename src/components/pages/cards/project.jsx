import React, { useState } from 'react';

export default function Project({ img, name, gh, deployed }) {
    const [hover, setHover] = useState(false)

    return (
      <div className='content column is-6 px-5 mx-1'>
        <div
          className='box pb-6 has-text-centered'
          style={{ position: 'relative', maxWidth: '100%' }}
        >
          <h6 className='has-text-centered'>{name}</h6>
          <a
            href={deployed}
            target='_blank'
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <img
              src={img}
              alt='Example of my work'
              style={hover ? { filter: 'blur(1px)' } : null}
            />
            <div
              className='button is-link mt-6'
              style={
                hover
                  ? {
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      width: '150px',
                    }
                  : { display: 'none' }
              }
            >
              View Deployment!
            </div>
          </a>
          <span className='icon is-pulled-right mt-2'>
            <a href={gh} target='_blank'>
              <i className='fa fa-2x fa-github' />
            </a>
          </span>
        </div>
      </div>
    );
}