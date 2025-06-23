import { useState, useEffect } from 'react';
import './Clock.css';

const Clock = ({ showSeconds = true, showDate = true, textColor = '#ff00aa', bgColor = 'rgba(0, 0, 0, 0.7)' }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  const hours = formatTime(time.getHours());
  const minutes = formatTime(time.getMinutes());
  const seconds = formatTime(time.getSeconds());

  const day = formatTime(time.getDate());
  const month = formatTime(time.getMonth() + 1);
  const year = time.getFullYear();

  const clockStyle = {
    color: textColor,
    backgroundColor: bgColor,
    textShadow: `0 0 5px ${textColor}`,
  };

  return (
    <div className="clock-container" style={clockStyle}>
      <div className="time">
        {hours}:{minutes}
        {showSeconds && `:${seconds}`}
      </div>
      {showDate && (
        <div className="date">
          {day}/{month}/{year}
        </div>
      )}
    </div>
  );
};

export default Clock;