import React from 'react';
import './Filter.css'

const NacionalFilter = () => {

return(
<div className='principal-div div-nacionalFilter div-filter'>
    <h2>Filtrar por Nacionalidade</h2>
        <ul className='more-options-filter'>
            <li className='item-filter-option'>China</li>
            <li className='item-filter-option'>Alemanha</li>
            <li className='item-filter-option'>Estados Unidos</li>
            <li className='item-filter-option'>Reino Unido</li>
            <li className='item-filter-option'>França</li>
            <li className='item-filter-option'>Itália</li>
            <li className='item-filter-option'>Japão</li>
            <li className='item-filter-option'>Rússia</li>
            <li className='item-filter-option'>Espanha</li>
            <li className='item-filter-option'>Brasil</li>
            <li className='item-filter-option'>Holanda</li>
            <section className='more-nacional-options'>
                <input type='text' placeholder='País...'></input>
                <button>Pesquisar</button>
            </section>
            
        </ul>
</div>

)
}
export default NacionalFilter;