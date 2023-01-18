import { Link } from 'react-router-dom';
import './app.scss'
import { typescriptProjects } from './data';

function App() {
  return (
    <div className="App">
      <header className='appHeader'>
        <span>This is a project that contains the  small projects of Xisto Eugênio</span>
        <h1>Mini-Projects</h1>
      </header>
      <main className='appMain'>
        <div className="mainContainer">
          <h3>typescript</h3>
          <div className="projectsContainer">
            {typescriptProjects.map(project =>
              <Link to={"/"+ project.pathPage} className='eachProject'>
                  <h4>{project.name}</h4>
                  <div className="imageContainer"><img src={project.image} alt="" /></div>
                  <p>{project.description}</p>
              </Link>
            )}
          </div>
        </div>
      </main>
      <footer className='appFooter'>
        <h3>See other projects :</h3>
        <div className="othersContainer">
          <a href="https://xisto.xyz" target="_blank" rel="noreferrer">
            <img src="/assets/portfolio-picture.png" alt="" />
          </a>
          <a href="https://socciz.online" target="_blank" rel="noreferrer">
            <img src="/assets/socciz-picture.png" alt="" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
