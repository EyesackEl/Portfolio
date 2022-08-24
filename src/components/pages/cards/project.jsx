import React from 'react';

export default function Project({ img, name, caption, gh, deployed }) {
    // const styles = {
    //     image: {
    //         width: 
    //     }
    // }

    return(
        <div className='content column is-6 px-5 mx-1'>

            <h6 className='has-text-centered'>{name}</h6>
            <div>
                <img src={img} alt='Example of my work'/>
            </div>
            <figcaption>{caption}</figcaption>
            <span className='icon is-large'>
              <a href={gh} target='_blank'>
                <i class='fa fa-2x fa-github'/>
              </a>
            </span>

        </div>
    )
}