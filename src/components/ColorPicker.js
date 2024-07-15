// src/ColorPicker.js
import React, { useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import { publishMessage } from '../MQTT/mqttService';

const ColorPicker = () => {
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        var is_checked = event.target.checked
        setChecked(is_checked);
        console.log("Trying to publish " + is_checked ? "on" : "off" + " in led_color topic...")
        publishMessage('led_color', is_checked ? "on" : "off")
    };

    const handleClick = (color) => {
        console.log("Trying to publish " + color + " in led_color topic...")
        publishMessage('led_color', color);
    };
    
    const [color, setColor] = useState("#aabbcc");
    return (
        <div className='ColorPicker'>
            <p>{color}</p>
            <Switch 
                checked={checked}
                onChange={handleChange}
                defaultChecked 
                color="warning"
            />
            <HexColorPicker className="ColorPicker" color={color} onChange={setColor} />
            <Button variant="contained" onClick={() => handleClick(color)}>Validate</Button>
        </div>
    );
};

export default ColorPicker;
