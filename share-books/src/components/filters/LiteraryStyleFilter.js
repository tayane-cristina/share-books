import {useState, React} from 'react';
import './Filter.css'

const LiteraryStyleFilter = () => {

    const [activeComponent, setActiveComponent] = useState(null);
    const styleOptions = ["Descritivo", "Narrativo", "Dissertativo", "Persuasivo", "Lírico", "Fluente de Consciência", "Minimalista", "Simbolista", "Realista", "Expressionista"]

    const handleActiveComponent = (componentId) => {
        setActiveComponent(componentId)
    } 

return(
<div className='principal-div div-literaryStyleFilter div-filter'>
    <h2>Filtrar por Estilo literário</h2>
        <ul className='more-options-filter'>
            {styleOptions.map((styleOpt, index) => (
                 <li 
                    key={index}
                    className={`item-filter-option ${activeComponent === index ? "active" : ""}`}
                    onClick={() => handleActiveComponent(index)}
                >
                    {styleOpt}
                </li>
            ))}
           
        </ul>

</div>

)
}
export default LiteraryStyleFilter;