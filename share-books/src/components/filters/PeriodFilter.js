import React from 'react';
import './Filter.css'

const PeriodFilter = () => {

return(
<div className='principal-div div-periodFilter div-filter'>
    <h2>Filtrar por genêro Período </h2>
        <ul className='more-options-filter'>
            <li className='item-filter-option'>Classicismo</li>
            <li className='item-filter-option'>Romantismo</li>
            <li className='item-filter-option'>Realismo</li>
            <li className='item-filter-option'>Naturalismo</li>
            <li className='item-filter-option'>Simbolismo</li>
            <li className='item-filter-option'>Modernismo</li>
            <li className='item-filter-option'>Pós-modernismo</li>
            <li className='item-filter-option'>Barroco</li>
            <li className='item-filter-option'>Iluminismo</li>
            <li className='item-filter-option'>Pré-modernismo</li>
        </ul>
</div>

)
}
export default PeriodFilter;