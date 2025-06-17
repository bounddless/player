import('./Header.scss')
import Logo from '@assets/images/logo.png'
import Profile from '@assets/icons/profile.png'
import Like from '@assets/icons/favorite_traks.png'
import Playlist from '@assets/icons/playlist.png'
import Home from '@assets/icons/home.png'

function Header() {
    return (
        <header>
            <div className="logo">
                <a href="#"><img src={Logo} alt="" width='200px' height='200px' /></a>
            </div>
            <nav className="header__nav">
                <ul className='header__nav-list'>
                    <li><a href="#"><img src={Home} alt="#" />Главная</a></li>
                    <li><a href="#"><img src={Like} alt="#" />Моя музыка</a></li>
                    <li><a href="#"><img src={Playlist} alt="#" />Мои плейлисты</a></li>
                    <li><a href="#"><img src={Profile} alt="#" />Профиль</a></li>

                </ul>
            </nav>


           

        </header>
    )
}

export default Header