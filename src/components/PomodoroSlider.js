
import { useState } from 'react';

import React from "react";
import Slider from "@material-ui/core/Slider";

import '../styles/pomodoro.css';

/* Slider default settings - if not passed in as props */
const DEFAULT_STEP = 10;
const DEFAULT_TIME = 15;
const DEFAULT_MIN = 5;
const DEFAULT_MAX = 30;


PomodoroSlider.defaultProps = {
  step: DEFAULT_STEP,
  min: DEFAULT_MIN,
  max: DEFAULT_MAX,
  defaultValue:DEFAULT_TIME
}


function PomodoroSlider(props) {

    
  function valuetext(value) {
    return `${value} min`;
  }
  function valueLabelFormat(value) {
    /* return marks.findIndex((mark) => mark.value === value) + 1; */
    return `${value} min`;
   
  }
  


  return (
  
      <> 
            <Slider
                aria-label="Work Duration:"
                valueLabelFormat={valueLabelFormat}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                className='pomosliderstyle'
                step={props.step}
                min={props.min}
                max={props.max} 
                defaultValue={props.default}
                onChange = {props.onChange}
              />
              <h3 className='pomosliderlabel'>Set duration of focus session</h3>
        </>

  );
}

export default PomodoroSlider;




