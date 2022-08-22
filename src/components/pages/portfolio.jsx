import React from 'react';
import Project from './cards/project'

export default function Portfolio() {
    return (
        <div className='column'>
            <div className='columns '>
                <Project img='/fork-the-food.jpg' name='Fork The Food!'/>
                <Project img='/weather-forecast.jpg' name='Weather Forecast' />
            </div>
        </div>
    )
}