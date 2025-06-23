import { useState } from 'react';
import './Formulario.css';

function Formulario() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
    newsletter: false,
    opcao: 'opcao1'
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulação de envio - apenas exibe os dados no console
    console.log('Dados do formulário:', formData);
    alert('Formulário "enviado" com sucesso! (simulação)');
  };

  return (
    <section className="formulario-container" id="formulario">
      <h3 className="sectiontitle">Formulário de Contato</h3>
      <form onSubmit={handleSubmit} className="formulario">
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="mensagem">Mensagem:</label>
          <textarea
            id="mensagem"
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            rows="4"
          />
        </div>

        <div className="form-group radio-group">
          <label>Opções:</label>
          <div className="radio-options">
            <label>
              <input
                type="radio"
                name="opcao"
                value="opcao1"
                checked={formData.opcao === 'opcao1'}
                onChange={handleChange}
              />
              Aluno
            </label>
            <label>
              <input
                type="radio"
                name="opcao"
                value="opcao2"
                checked={formData.opcao === 'opcao2'}
                onChange={handleChange}
              />
              Professor
            </label>
          </div>
        </div>

        <div className="form-group checkbox-group">
          <label>
            <input
              type="checkbox"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
            />
            Desejo receber notícias
          </label>
        </div>

        <div className="form-buttons">
          <button type="submit" className="submit-button">
            Enviar
          </button>
          <button type="reset" className="reset-button">
            Limpar
          </button>
        </div>
      </form>
    </section>
  );
}

export default Formulario;