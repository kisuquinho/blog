import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header';
// import Article from './components/Article';
import Main from './pages/Main';
import Routes from './routes';

function App() {

  return (
    <>
      <Header></Header>
      <Routes />
    </>
  );
}

export default App;