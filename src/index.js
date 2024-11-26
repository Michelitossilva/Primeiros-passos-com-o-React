import React from 'react';
import ReactDOM from 'react-dom/client'; // Nova API do React 18 para renderização
import './index.css'; // Importa os estilos globais
import App from './App'; // Componente principal da aplicação
import reportWebVitals from './reportWebVitals'; // Ferramenta para medir desempenho

// Seleciona o elemento raiz no HTML
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza o componente principal dentro do <div id="root">
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Opção para medir desempenho e enviar dados para um endpoint de analytics
reportWebVitals(console.log);
