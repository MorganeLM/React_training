import '../styles/Banner.css'
import logo from '../assets/logo.png'

function Banner() {
    const title = 'Ma petite jungle'
    return <div className="mpj-banner">
                <img src={logo} alt='La maison jungle' className='mpj-logo' />
                <h1 className='mpj-title'>{title}</h1>
            </div>
}

export default Banner