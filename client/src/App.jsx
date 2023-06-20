import React, { useState } from 'react';

const App = () => {
  const [result, setResult] = useState(null);

  const handleSubmit = async (fields) => {
    try {
      const response = await fetch('/random', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fields }),
      });
      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
    <div className="App">
      {result !== null ? (
        <h2>Resultado: {result}</h2>
      ) : (
        <form onSubmit={handleSubmit}>
          <h1>Formulário</h1>
          {[...Array(13)].map((_, index) => (
            <div key={index}>
              <label htmlFor={`field-${index}`}>Campo {index + 1}:</label>
              <input
                id={`field-${index}`}
                type="text"
                onChange={(e) => handleChange(index, e.target.value)}
              />
            </div>
          ))}
          <button type="submit">Enviar</button>
        </form>
      )}
    </div>
  );
};

export default App;
