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
        <div className="projectsContainer">
          <h3>typescript</h3>
          {typescriptProjects.map(project =>
            <div>{project.name}</div>
          )}
        </div>
      </main>
      <footer className='appFooter'>this is footer</footer>
    </div>
  );
}

export default App;
