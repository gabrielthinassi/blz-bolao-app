[14:48, 01/02/2022] Gabriel Thinassi: entra la no Discord
[14:51, 01/02/2022] Rafael Thinassi: import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Pessoa } from  './pessoa.ts';


function App() {
  const [pessoa, setPessoa] = useState<Pessoa>(new Pessoa());

  const handlePessoa = e => {
    setPessoa(p => {return {...p, [e.target.name]: e.target.value}})
    //setPessoa({...pessoa, [e.target.name]: e.target.value});
  }

  console.log(pessoa);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type={"text"} name='nome' value={pessoa.nome} onChange={e => handlePessoa(e)}/>
        <input type={"text"} name='sobreNome' value={pessoa.sobreNome} onChange={e => handlePessoa(e)}/>
        <input type={"text"} name='pessoaFisica.cpf' value={pessoa.pessoaFisica.cpf} 
          onChange={e => setPessoa({...pessoa, pessoaFisica: {...pessoa.pessoaFisica, cpf: e.target.value}})}/>

        <h1>{`${pessoa.nome} ${pessoa.sobreNome}`}</h1>
      </header>
    </div>
  );
}

export default App;