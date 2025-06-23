import { useState } from 'react';
import './Quiz.css'; // Criaremos este arquivo depois

export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      question: "Qual era a cor do cavalo branco de Napoleão?",
      options: ["Marrom", "Branco", "Azul", "Preto"],
      correctAnswer: "Branco"
    },
    {
      question: "Qual a capital do Brasil?",
      options: ["Espanha", "Xique-Xique", "Westeros", "Brasília"],
      correctAnswer: "Brasília"
    },
    {
      question: "Quem proclamou a república no Brasil?",
      options: ["John Snow", "Deodoro da Fonseca", "Dom Pedro I", "Lâmpião"],
      correctAnswer: "Deodoro da Fonseca"
    }
  ];

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          <h2>Você acertou {score} de {questions.length} perguntas!</h2>
          <button onClick={restartQuiz}>Reiniciar Quiz</button>
        </div>
      ) : (
        <div className="question-section">
          <div className="question-count">
            <span>Pergunta {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className="question-text">
            {questions[currentQuestion].question}
          </div>
          <div className="answer-options">
            {questions[currentQuestion].options.map((option, index) => (
              <button 
                key={index} 
                onClick={() => handleAnswerClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};