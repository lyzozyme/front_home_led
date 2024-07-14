// src/mqttService.js
import mqtt from 'mqtt';
import config from '../config.json';

const { brokerUrl, options } = config.mqtt;

const client = mqtt.connect(brokerUrl, options);

client.on('connect', () => {
  console.log('Connected to MQTT broker');
});

client.on('error', (err) => {
  console.error('MQTT connection error:', err);
});

export const publishMessage = (topic, message) => {
  client.publish(topic, message, (err) => {
    if (err) {
      console.error('Failed to publish message:', err);
    } else {
      console.log('Message published to topic', topic);
    }
  });
};
