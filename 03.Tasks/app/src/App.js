import React, { useState } from 'react';
import { BasicBox, BasicButtons, BasicTextFields } from './components/TemperatureConverter';
import CommentsList from './components/TodoLIst';
function App() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [activeField, setActiveField] = useState('celsius'); // Track the active field

  const handleConvert = () => {
    if (activeField === 'celsius') {
      // Convert Celsius to Fahrenheit
      const fahrenheitValue = Math.round((parseFloat(celsius) * 1.8 + 32) * 100) / 100;
      setFahrenheit(isNaN(fahrenheitValue) ? '' : fahrenheitValue);
    } else if (activeField === 'fahrenheit') {
      // Convert Fahrenheit to Celsius
      const celsiusValue = Math.round(((parseFloat(fahrenheit) - 32) / 1.8) * 100) / 100;
      setCelsius(isNaN(celsiusValue) ? '' : celsiusValue);
    }
  };


  return (
    <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <BasicBox 
      name="Конвертер температур"
      value='Конвертация по активному полю.
      Чтобы рассчитать фаренгейты из цельсия,  
      ведите температуру в поле "Цельсия" и нажмите "Конвертировать".
      Для расчета цельсия из фаренгейта, введите значение в поле "Фаренгейт" и нажмите "Конвертировать"'
      />
      <BasicTextFields
        name="Цельсия"
        value={celsius}
        onChange={(e) => {
          setCelsius(e.target.value);
          setActiveField('celsius'); // Set active field to Celsius
        }}
      />
      <BasicTextFields
        name="Фаренгейт"
        value={fahrenheit}
        onChange={(e) => {
          setFahrenheit(e.target.value);
          setActiveField('fahrenheit'); // Set active field to Fahrenheit
        }}
      />
      <BasicButtons name="Конвертировать" onClick={handleConvert} />
    </div>
      <CommentsList />
      </div>
  );
}

export default App;
