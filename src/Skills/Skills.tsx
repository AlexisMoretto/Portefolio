import "./Skills.scss"

function Experience  (){
     return(
        <div id="experience" className="experience">
            <h1>Compétences</h1>
            <div className="fullExp">
            <div className="oclockExperience">
                <h2>Formation développeur FullStack</h2>
                <div>
                <ul>
                    <li>Intégration, Layout, HTML CSS</li>
                    <li>Base de donées : croiser le code avec la base</li>
                    <li>MCV</li>
                    <li>Langage PHP</li>
                    <li>Programmation Orientée Objet</li>
                    <li>React dans le détail</li>
                </ul> 
                </div>     
            </div>
            <div className="logo">
                    <img src="public\assets\redux.svg" alt="" />
                    <img src="public\assets\react-2.svg" alt="" />
                    <img src="public\assets\new-php-logo.png" alt="" />
                    <img src="public\assets\mysql-3.svg" alt="" />
                    <img src="public\assets\typescript.svg" alt="" />
                    <img src="public\assets\html-1.svg" alt="" />
                    <img src="public\assets\css-3.svg" alt="" />
                </div> 
            <div className="skills">
                    <h2>Compétences Acquises</h2>
                    <ul>
                        <li>Développer la partie front-end d’une application web ou web mobile sécurisée avec React. </li>
                        <li>Sur un environnement Vite</li>
                        <li>Développer un back-end avec un framework express</li>
                    </ul>
                    
                </div>
                </div>
        </div>
    )
}

export default Experience