// src/ColorPicker.js
import React, { useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import { publishMessage } from '../MQTT/mqttService';

const ColorPicker = () => {
    const [checked, setChecked] = React.useState(true);
    const [color, setColor] = useState("#aabbcc");

    const handleChange = (event) => {
        var is_checked = event.target.checked
        setChecked(is_checked);
        if (!is_checked) {
            publishMessage('led_power', "off");
        }
        else {
            publishMessage('led_color', color.slice(1));
        }
    };

    const handleClick = (color) => {
        console.log("Trying to publish " + color + " in led_color topic...")
        publishMessage('led_color', color.slice(1));
    };
    
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
            <Button variant="contained" disabled={!checked} onClick={() => handleClick(color)}>Validate</Button>
        </div>
    );
};

export default ColorPicker;
