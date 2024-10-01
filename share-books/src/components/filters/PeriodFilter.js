import {useState, React}  from 'react';
import './Filter.css';


const PeriodFilter = () => {

    const [activeComponent, setActiveComponent] = useState(null);
    const periodOptions = ['Classicismo', 'Romantismo', 'Realismo', 'Naturalismo', 'Simbolismo', 'Modernismo', 'Pós-modernismo', 'Barroco', 'Iluminismo', 'Pré-modernismo']

    const handleActiveComponent = (componentId) => {
        setActiveComponent(componentId)
    } 

return(
<div className='principal-div div-periodFilter div-filter'>
    <h2>Filtrar por genêro Período </h2>
        <ul className='more-options-filter'>
            {periodOptions.map((periodOpt, index) => (
                <li 
                    key={index} 
                    className={`item-filter-option ${activeComponent === index ? "active" : ""}`}
                    onClick={() => handleActiveComponent(index)}
                >
                    {periodOpt}
                </li>
            ))}
        </ul>
</div>

)
}
export default PeriodFilter;