import {useState, React} from 'react';
import './Filter.css';

const GenderFilter = () => {

    const [activeComponent, setActiveComponent] = useState(null);
    const genderLiteraryOptions = ["Romance", "Conto", "Poesia", "Crônica", "Ensaio", "Drama", "Ficção Cientifica", "Fantasia", "Suspense", "Terror", "Infanto Juvenil", "Distopia", "Biografia", "Autobiografia", ]

    const handleActiveComponent = (componentId) => {
        setActiveComponent(componentId)
    } 

return(
    <div className='principal-div div-genderFilter div-filter'>
        <h2>Filtrar por genêro literário</h2>
        <ul className='more-options-filter'>
            {genderLiteraryOptions.map((genderOpt, index) => (
                <li 
                    key={index}
                    className={`item-filter-option ${activeComponent === index ? "active" : ""}`}
                    onClick={() => handleActiveComponent(index)}
                >
                    {genderOpt}
                </li>
            ))}
        </ul>
    </div>

)
}
export default GenderFilter;