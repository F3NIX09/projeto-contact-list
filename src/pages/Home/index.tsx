// Tenha um input pra por o nome do contato
// Tenha um input pra por o número do contato
// Tenha um button pra adicionar o contato

// Deve mostrar uma lista com os contatos na tela
// Deve dar pra remover um contato

// Deve ter um button pra remover todos os contatos de uma vez

import './styles.css';
import '../styles/global.css';

import exclude from '../../assets/exclude.svg';

export default function Home() {
  return (
    <div>
      <main>
        <h1>Adicione um contato</h1>

        <h2>Informe o nome da pessoa</h2>
        <input
          type="text"
          placeholder='Nome da pessoa'
          required
        />

        <h2>Digite o número do contato</h2>

        <input
          type="text"
          placeholder='17 98845-7405'
          required
        />

        <button>Enviar</button>

              </main>
        <aside>
          <ul>
            <li>
              <img 
                src={exclude}
                className="exclude"
                alt="Excluir" 
              />
              <h3>Emerson</h3>
              <strong>19999999999</strong>
            </li>
          </ul>

        </aside>


    </div>
  )
}
