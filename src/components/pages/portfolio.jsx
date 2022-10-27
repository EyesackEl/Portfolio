import React from 'react';
import Project from './cards/project'

export default function Portfolio() {
    return (
      <div className='column'>
        <div className='columns is-centered'>
          <Project
            img='https://user-images.githubusercontent.com/101996599/198404094-be3abad0-4657-40cc-a081-04728bc60735.png'
            name='Fork The Food!'
            gh='https://github.com/EyesackEl/fork-the-food'
            deployed='https://eyesackel.github.io/fork-the-food/'
          />
          <Project
            img='https://user-images.githubusercontent.com/101996599/190882799-7a2fe394-a9f8-4b7d-9689-a87c3860a49e.JPG'
            name='The RanDUMBizer'
            gh='https://github.com/EyesackEl/the=randumbizer'
            deployed='https://the-randumbizer.herokuapp.com/'
          />
        </div>
      </div>
    );
}