import { useState } from 'react';
import './Checklist.css';

const Checklist = () => {
  const [items, setItems] = useState([
    { id: 1, text: 'Projeto adaptado ao tema parallax', checked: false },
    { id: 2, text: 'Arquivo Zip sem node_modules', checked: false },
    { id: 3, text: 'Documento explicando como rodar', checked: false },
    { id: 4, text: 'Link para repositório Git', checked: false },
    { id: 5, text: 'Mínimo 10 componentes', checked: false },
    { id: 6, text: 'Implementar uma rota', checked: false },
    { id: 7, text: 'Formulário componentizado', checked: false },
    { id: 8, text: 'Acesso ao formulário pela rota', checked: false },
    { id: 9, text: 'Pronto para apresentação em 23/06/2024', checked: false },
    { id: 10, text: 'Preparado para perguntas técnicas', checked: false }
  ]);

  const toggleCheck = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  return (
    <div className="checklist-container">
      <h3 className="checklist-title">O que devo entregar?</h3>
      <div className="checklist-items">
        {items.map(item => (
          <div key={item.id} className="checklist-item">
            <input
              type="checkbox"
              id={`item-${item.id}`}
              checked={item.checked}
              onChange={() => toggleCheck(item.id)}
              className="checklist-checkbox"
            />
            <label htmlFor={`item-${item.id}`} className="checklist-label">
              {item.text}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checklist;