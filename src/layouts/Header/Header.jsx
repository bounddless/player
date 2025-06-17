import('./Header.scss')
import Logo from '@assets/images/logo.png'


function Header(){
    return (
        <header>
            <div className="logo">
                <a href="#"><img src={Logo} alt="" width='200px' height='200px'/></a>
            </div>
            <nav className="header__nav">
                <ul className='header__nav-list'>
                    <li><img src="" alt="#" /><a href="#">Главная</a></li>
                    <li><img src="" alt="#" /><a href="#">Моя музыка</a></li>
                    <li><img src="" alt="#" /><a href="#">Мои плейлисты</a></li>
                    <li><img src="" alt="#" /><a href="#">Профиль</a></li>
                    
                </ul>
            </nav>
        </header>
    )
}

export default Header