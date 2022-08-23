
import './style.css';
import myself from './assets/myself.png'
import css from './assets/css.png'
import git from './assets/git.png'
import html from './assets/html.png'
import javascript from './assets/javascript.svg'
import node from './assets/node.png'
import react from './assets/react.svg'
import comingsoon from './assets/comingsoon.png'
import link from './assets/link.png'
import gmail from './assets/gmail.png'

function App() {
  return (
    <div className="App">
     <body>
      <nav class='menu'>
        <div class='logo'><a href='#home'>Home</a></div>
         <ul>
          <li><a href='#cont'>Contact</a></li>
          <li><a href='#proj'>Projects</a></li>
          <li><a href='#tec'>Tecnologies</a></li>
        </ul>
      </nav>
      <div class="container" id="home">
      <div><img className='tecpic' src={myself} alt="react"/></div>
      <div class='headertext'>
        <h1>Libero Dioconde - Front end Developer</h1>
        <p>Sou  extremamente comunicativo com excelente trabalho em equipe. Tenho facilidade em expor ideias, receber ideias e trabalhar essas, de modo a chegar em uma conclusão. Gosto de praticar esportes e manter uma vida saudavel.</p>
        </div>
      </div>
      <section class='tecnologies' id='tec'>
          <span><img className='html' src={html} alt="html"/></span>
          <span><img className='css' src={css} alt="css"/></span>
          <span><img className='javascript' src={javascript} alt="javascript"/></span>
          <span><img className='react' src={react} alt="react"/></span>
          <span><img className='node' src={node} alt="node"/></span>
          <span><img className='git' src={git} alt="git"/></span>
      </section>
      <section class ='projects' id='proj'>
          <span class='boxcs'>
            <h2>First project</h2>
            <img className='comingsoon' src={comingsoon} alt="comingsoon"/>
            <p>Algum texto que explique de forma superficial o projeto</p>
          </span>
          <span class='boxcs'>
            <h2>First project</h2>
            <img className='comingsoon' src={comingsoon} alt="comingsoon"/>
            <p>Algum texto que explique de forma superficial o projeto</p>          
          </span>
          <span class='boxcs'>
            <h2>First project</h2>
            <img className='comingsoon' src={comingsoon} alt="comingsoon"/>
            <p>Algum texto que explique de forma superficial o projeto</p>
          </span>
          <span class='boxcs'>
            <h2>First project</h2>
            <img className='comingsoon' src={comingsoon} alt="comingsoon"/>
            <p>Algum texto que explique de forma superficial o projeto</p>
          </span>
      </section>
      <footer class='contact' id='cont'>
          <span>
            <a href='www.goole.com.br'><img className='linkedin' src={link} alt="linkedin"/></a>
          </span>
          <span>
            <a href='www.goole.com.br'><img className='gmail' src={gmail} alt="gmail"/></a>
          </span>
          <span>
            <a href='www.goole.com.br'><img className='github' src={git} alt="github"/></a>
          </span>

          <div>
            <small> Site Desinig/2022, Líbero Dioconde; Contact: liberojunior5@gmail.com</small>
          </div>
      </footer>
      </body>
    </div>
  );
}
export default App;
