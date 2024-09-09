import react from 'react'
import './Author.css'
import GenderFilter from '../../components/filters/GenderFilter';
import LiteraryStyleFilter from '../../components/filters/LiteraryStyleFilter';
import NacionalFilter from '../../components/filters/NacionalFilter';
import PeriodFilter from '../../components/filters/PeriodFilter';
import { useState } from 'react';

const Author = () => {

    const [filterActive, setFilterActive] = useState();

    const alterFilterActive = () => {

    }

    return(
        <div className='principal-div div-author'>
            <section className='author-introduction'>
                <h2>Conheça Autores</h2>
                <p className='author-text-introduction'>
                    Bem-vindo à nossa plataforma dedicada aos amantes da leitura e exploradores de novos mundos literários! Aqui, você encontrará uma seleção abrangente de autores de diversos gêneros, prontos para serem descobertos. Navegue pela nossa lista de autores e filtre conforme suas categorias preferidas – seja ficção, não-ficção, romance, fantasia, biografias, ou qualquer outro gênero que desperte sua curiosidade. Cada autor listado vem acompanhado de informações detalhadas sobre suas obras, estilos de escrita e contribuições para o mundo literário, ajudando você a encontrar novas inspirações para suas próximas leituras. Explore, descubra e deixe-se levar pelas histórias que os grandes autores têm a oferecer!
                </p>
            </section>

            <section className='author-list-filter'>
                <fieldset>
                    <legend>Filtro</legend>
                    <ul className='filter-list-options'>
                        <li className='filter-option'>Nacionalidade</li>
                        <li className='filter-option'>Período</li>
                        <li className='filter-option'>Genêro literário</li>
                        <li className='filter-option'>Estilo Literário</li>
                    </ul>
                </fieldset>
            </section>

            <section className='more-filter'>
                <PeriodFilter />
            </section>
            
        </div>
    )
};
export default Author