import './Header.css';
import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const [search, setSearch] = useState("")


    return (
        <div className="principal-div div-header">
            <div className='header'>
             <Link to="/"><h2  className='div-home-logo'>Pesquise Autores</h2></Link> 
                
            </div>
            
            <section className='navbar'>
                <ul className='header-navbar-ul'>
                    <li className='navbar-link'><Link to="/author">Autores</Link></li>
                    <li className='navbar-link'><Link to="">Resenhas</Link></li>
                    <li className='navbar-link'><Link to="highlights">Destaques</Link></li>
                    <li className='navbar-link'><Link to="/quiz">Quiz</Link></li>
                </ul>
            </section>
        </div>
    )
};
export default Header;