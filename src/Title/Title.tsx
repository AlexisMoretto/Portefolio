import './Title.scss'

interface TitleProps {
    experienceId: string;
}


function Title ({experienceId}:TitleProps) {
    const handleScrollToComponent = () => {
        const clickElement = document.getElementById(experienceId);
        if (clickElement) {
            clickElement.scrollIntoView({ behavior: 'smooth' , inline: 'end'});
        }
    };
    return(
        <div className='title'>
            <div className='titleTitle'>
                <h1>ALEXIS MORETTO</h1>
                <p>DÉVELOPPEUR FULLSTACK</p>
                <div className='professionalLink'>
                <div className='linkedin'>
                    <a href="https://www.linkedin.com/in/alexis-moretto-846503118/"><img src="\linkedin-icon.svg" alt="" /></a>
                </div>
                <div className='github'>
                    <a href="https://github.com/AlexisMoretto"><img src="\github-icon-1.svg" alt="" /></a>
                </div>
                <div className='message'>
                    <a href=""><img src="\official-gmail-icon-2020-.svg" alt="" /></a>
                </div>
                </div>
                <div className='arrowDown'>
                    <button className='arrowDownButton' onClick={handleScrollToComponent}><img src="assets\down-arrow-svgrepo-com.svg" alt="" /></button>
                </div>
            </div>
        </div>
    )
}

export default Title