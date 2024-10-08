import './App.scss'
import Title from './Title/Title'
import NavBarre from './NavBarre/NavBarre'
import Work from './Work/Work'
import Contact from './Contact/Contact'
import Skills from './Skills/Skills'


function App() {
  return(
    <div className='App'>
      <NavBarre />
      <div id="home" className="section"></div>
      <div id="skills" className="section"></div>
      <div id="projet" className="section"></div>
      <div id="contact" className="section"></div>
      <Title experienceId={'experience'} />      
      <Skills />
      <Work />
      <Contact />
    </div>
  )
}

export default App
