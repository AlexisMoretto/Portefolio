import './Work.scss'
import { useState } from 'react'
import { useRef } from 'react'

function Work () {
const [isOpen,setIsOpen] = useState(false)
const [isOpen2,setIsOpen2] = useState(false)
const [isOpen3,setIsOpen3] = useState(false)

const meteoRef = useRef(null);
const orecipeRef = useRef(null);
const associeRef = useRef(null);

const toggleExp = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
        setTimeout(() => {
            meteoRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 0);
    }
};

const toggleExp2 = () => {
    setIsOpen2(!isOpen2);
    if (!isOpen2) {
        setTimeout(() => {
            orecipeRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 0);
    }
};

const toggleExp3 = () => {
    setIsOpen3(!isOpen3);
    if (!isOpen3) {
        setTimeout(() => {
            associeRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 0);
    }
};


    return(
        <div className='workParent'>
            <h1>Projets</h1>
        <div className='work'>
            
            <div className='exp'>
                <div className='textAndButton'>
                    <div className='workText'>
                <p>Création d'un Widget météo</p>
                </div>
                <div className='workButton'>
                <button className='toggleButton' onClick={toggleExp}>{isOpen ? '-' : '+'}</button>
                </div>
                </div>
                <div ref={meteoRef} className='imageShowedMeteo'>
                {isOpen && (     
                <div className='allCardShowed'> 
          <p><img className='meteo' src="src\assets\resultat.png" alt="" /></p> 
                    <div className='textCard'>
                        <h3>Technologie Utilisé</h3>
                    <ul>
                        <li>React</li>
                        <li>Hooks</li>
                        <li>Redux</li>
                        <li>Récupération des données d'une API public</li>
                        <li>Champs contrôlé</li>
                    </ul>
                    </div>
                </div>    
      )}
      </div>
            </div>
            <div className='exp'>
                <div className='textAndButton'>
                    <div className='workText'>
                <p>Création d'un site de recette</p>
                </div>
                <div className='workButton'>
                <button className='toggleButton' onClick={toggleExp2}>{isOpen2 ? '-' : '+'}</button>
                </div>
                </div>
                <div ref={orecipeRef} className='imageShowedOrecipe'>
                {isOpen2 && (
          <div className='allCardShowed'> 
          <p><img className='orecipe' src="src\assets\resultatOreceip.gif" alt="" /></p> 
                    <div className='textCard'>
                        <h3>Technologie Utilisé</h3>
                    <ul>
                        <li>React</li>
                        <li>Hooks</li>
                        <li>Redux</li>
                        <li>Récupération des données d'une API public</li>
                        <li>Champs contrôlé</li>
                        <li>Création de plusieurs routes avec </li>
                    </ul>
                    </div>
                </div>    
      )}
      </div>
            </div>
            <div className='exp'>
                <div className='textAndButton'>
                    <div className='workText'>
                <p>Création d'un site mettant en relation des entrepreneurs</p>
                </div>
                <div className='workButton'>
                <button className='toggleButton' onClick={toggleExp3}>{isOpen3 ? '-' : '+'}</button>
                </div>
                </div>
                <div ref={associeRef} className='imageShowedAssocie'>
                {isOpen3 && (
                    <div className='allCardShowed'> 
                    <p><img className='associe' src="src\assets\Associé.png" alt="" /></p>
                              <div className='textCard'>
                                  <h3>Technologie Utilisé</h3>
                              <ul>
                                  <li>Projet en collaboration avec 4 personnes</li>
                                  <li>2 s'occupant du backend et 3 s'occupant du frontend</li>
                                  <li>Mise en place d'un cahier des charges</li>
                                  <li>Répartition des rôles concernant la gestion du projet</li>
                                  <li>Toutes les technologies listé précédemment on été utilisé</li>
                                  <li>Work in progress</li>
                              </ul>
                              </div>
                          </div>       
                  
      )}
      </div>
            </div>
            
        </div>
        </div>
)}

export default Work;