import { useState, useEffect } from 'react';
import './TimedMessage.css';

export function TimedMessage() {
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    let timer;
    if (showMessage) {
      timer = setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [showMessage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setShowMessage(true);
    }
  };

  return (
    <div className="timed-message">
      <h3>Mensagem Temporizada</h3>
      <form onSubmit={handleSubmit} className="message-form">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Digite uma mensagem"
          className="message-input"
        />
        <button type="submit" className="message-button">Exibir</button>
      </form>
      {showMessage && (
        <div className="message-display">
          <p>{message}</p>
          <small>(Esta mensagem desaparecerá em 3 segundos)</small>
        </div>
      )}
    </div>
  );
}