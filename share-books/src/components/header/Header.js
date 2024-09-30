import './Header.css';
import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const [search, setSearch] = useState("")
    const [activeButton, setActiveButton] = useState(null);

    const pageList = [
                {
                    page: "Autores",
                    route: "author"
                },
                {
                    page: "Resenhas",
                    route: "review"
                },
                {
                    page: "Destaques",
                    route: "highlights"
                },
                {
                    page: "Quiz",
                    route: "quiz"
                },
            ]


    const handleActiveButton = (buttonId) => {
        setActiveButton(buttonId)
    }


    return (
        <div className="principal-div div-header">
            <div className='header'>
             <Link to="/"><h2  className='div-home-logo'>Pesquise Autores</h2></Link> 
                
            </div>
            
            <section className='navbar'>
                <ul className='header-navbar-ul'>
                    {pageList.map((pageLink, index) => (
                        <li
                        key={index}
                        onClick={() => handleActiveButton(index)}
                        className={`navbar-link ${activeButton === index ? "active" : ""}`}
                        >
                            <Link to={`/${pageLink.route}`}>{pageLink.page}</Link>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
};
export default Header;