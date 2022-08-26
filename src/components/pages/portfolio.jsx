import React from 'react';
import Project from './cards/project'

export default function Portfolio() {
    return (
        <div className='column'>
            <div className='columns is-centered'>
                <Project img='/fork-the-food.jpg' name='Fork The Food!' gh='https://github.com/EyesackEl/fork-the-food' deployed='https://eyesackel.github.io/fork-the-food/'/>
                <Project img='/weather-forecast.jpg' name='Weather Forecast' gh='https://github.com/EyesackEl/weather-forecast' deployed='https://eyesackel.github.io/weather-forecast/' />
            </div>
        </div>
    )
}