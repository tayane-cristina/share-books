import {useState, React} from 'react';
import './Filter.css'

const NacionalFilter = () => {

    const [activeComponent, setActiveComponent] = useState(null);
    const nacionalityOptions = ["China", "Alemanha", "Estados Unidos", "Reino Unidade", "França", "Itália", "Japão", "Rússia", "Espanha", "Brasil", "Holanda"]

    const handleActiveComponent = (componentId) => {
        setActiveComponent(componentId)
    } 

return(
<div className='principal-div div-nacionalFilter div-filter'>
    <h2>Filtrar por Nacionalidade</h2>
        <ul className='more-options-filter'>
            {nacionalityOptions.map((nacionalityOpt, index) => (
                <li 
                    key={index}
                    className={`item-filter-option ${activeComponent === index ? "active" : ""}`}
                    onClick={() => handleActiveComponent(index)}
                    >
                        {nacionalityOpt}
                    </li>
            ))}            
        </ul>
        <section className='more-nacional-options'>
                <input type='text' placeholder='País...'></input>
                <button>Pesquisar</button>
        </section>
</div>

)
}
export default NacionalFilter;