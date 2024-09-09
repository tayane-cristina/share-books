import React from 'react';
import './Filter.css'


const  GenderFilter = () => {

return(
    <div className='principal-div div-genderFilter div-filter'>
        <h2>Filtrar por genêro literário</h2>
        <ul className='more-options-filter'>
            <li className='item-filter-option'>Romance</li>
            <li className='item-filter-option'>Conto</li>
            <li className='item-filter-option'>Poesia </li>
            <li className='item-filter-option'>Crônica</li>
            <li className='item-filter-option'>Ensaio</li>
            <li className='item-filter-option'>Drama</li>
            <li className='item-filter-option'>Ficção Cientifica</li>
            <li className='item-filter-option'>Fantasia</li>
            <li className='item-filter-option'>Suspense</li>
            <li className='item-filter-option'>Terror</li>
            <li className='item-filter-option'>Infanto Juvenil</li>
            <li className='item-filter-option'>Distopia</li>
            <li className='item-filter-option'>Biografia</li>
            <li className='item-filter-option'>Autobiografia</li>
        </ul>
    </div>

)
}
export default GenderFilter;