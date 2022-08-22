import React from 'react';

export default function Project({ img, name }) {
    // const styles = {
    //     image: {
    //         width: 
    //     }
    // }

    return(
        <div className='content column is-6 px-5 mx-2'>
            <h6 className='has-text-centered'>{name}</h6>
            
            <div>
                <img src={img} alt='Example of my work'/>
            </div>
            <figcaption>This is a caption for the image!</figcaption>
        </div>
    )
}