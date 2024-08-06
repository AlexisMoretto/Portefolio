import './NavBarre.scss';

function NavBarre() {

    const handleScrollToComponent = (sectionClassName: string) => {
        const section = document.getElementById(sectionClassName);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', inline: 'start' });
        }
    }

    return (
        <div className='navBarre'>
            <div onClick={() => handleScrollToComponent('home')} className='navBarre-home'>
                Home
            </div>
            <div onClick={() => handleScrollToComponent('skills')} className='navBarre-experience'>
                Compétence
            </div>
            <div onClick={() => handleScrollToComponent('projet')} className='navBarre-projet'>
                Projet
            </div>
            <div onClick={() => handleScrollToComponent('contact')} className='navBarre-contact'>
                Contact
            </div>
        </div>
    )
}

export default NavBarre;
