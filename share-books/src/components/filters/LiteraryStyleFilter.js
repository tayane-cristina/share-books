import React from 'react';
import './Filter.css'

const LiteraryStyleFilter = () => {

return(
<div className='principal-div div-literaryStyleFilter div-filter'>
    <h2>Filtrar por Estilo literário</h2>
        <ul className='more-options-filter'>
            <li className='item-filter-option'>Descritivo</li>
            <li className='item-filter-option'>Narrativo</li>
            <li className='item-filter-option'>Dissertativo</li>
            <li className='item-filter-option'>Persuasivo</li>
            <li className='item-filter-option'>Lírico</li>
            <li className='item-filter-option'>Fluente de consciência</li>
            <li className='item-filter-option'>Minimalista</li>
            <li className='item-filter-option'>Simbolista</li>
            <li className='item-filter-option'>Realista</li>
            <li className='item-filter-option'>Expressionista</li>
        </ul>

</div>

)
}
export default LiteraryStyleFilter;