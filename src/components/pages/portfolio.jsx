import React from 'react';
import Project from './cards/project'

export default function Portfolio() {
    return (
        <div className='column'>
            <div className='columns is-centered'>
                <Project img='/fork-the-food.jpg' name='Fork The Food!' caption='My first full-stack application!' gh='https://github.com/EyesackEl/fork-the-food' deployed='https://eyesackel.github.io/fork-the-food/'/>
                <Project img='/weather-forecast.jpg' name='Weather Forecast' gh='' deployed='' />
            </div>
        </div>
    )
}