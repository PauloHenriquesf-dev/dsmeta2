import logo from '../../assets/img/logo.svg'

import './styles.css';

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta"/>
                    <h1>DSMeta</h1>
                    <p> Desenvolvido por
                        <a href="https://www.instagram.com/paulohenrique_14g/">@paulohenrique_14g</a>
                    </p>
            </div>
        </header>
    )
}

export default Header
