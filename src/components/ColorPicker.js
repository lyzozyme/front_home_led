// src/ColorPicker.js
import React, { useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import Button from '@mui/material/Button';
import { publishMessage } from '../MQTT/mqttService';

const ColorPicker = () => {
    const handleClick = (color) => {
        console.log("Trying to publish " + color + " in a MQTT topic...")
        publishMessage('your/topic', 'Hello, MQTT!');
    };
    
    const [color, setColor] = useState("#aabbcc");
    return (
        <div className='ColorPicker'>
            <p>{color}</p>
            <HexColorPicker className="ColorPicker" color={color} onChange={setColor} />
            <Button variant="contained" onClick={handleClick(color)}>Validate</Button>
        </div>
    );
};

export default ColorPicker;
