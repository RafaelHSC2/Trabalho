import { useState } from 'react';
import './ToggleSwitch.css';

export function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="toggle-container">
      <h3>Interruptor</h3>
      <div 
        className={`toggle-switch ${isOn ? 'on' : 'off'}`}
        onClick={() => setIsOn(!isOn)}
      >
        <div className="toggle-slider" />
      </div>
      <p className="toggle-status">Status: {isOn ? 'Ligado' : 'Desligado'}</p>
    </div>
  );
}