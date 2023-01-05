import './app.scss'
import { typescriptProjects } from './data';

function App() {
  return (
    <div className="App">
      <header className='appHeader'>
        <span>this is a project to contain small projects from Xisto Eugenio</span>
        <h1>Mini-Projects</h1>
      </header>
      <main className='appMain'>
        <div className="mainContainer">
          <h3>typescript</h3>
          <div className="projectsContainer">
            {typescriptProjects.map(project =>
              <div className='eachProject'>
                <h4>{project.name}</h4>
                <div className="imageContainer"><img src={project.image} alt="" /></div>
                <p>{project.description}</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <footer className='appFooter'>this is footer</footer>
    </div>
  );
}

export default App;
