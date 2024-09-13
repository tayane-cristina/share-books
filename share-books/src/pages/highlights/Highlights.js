import React from 'react';
import './Highlights.css'

const Highlights = () => {

return(
<div className='principal-div div-highlights'>
    <h2>Destaques</h2>

    <div className='list-highlights'>
        <section className='highlight-option'>
            <p className='highlight-theme'><strong>10 fantasias mais aclamadas de todos os tempos</strong></p>
            <p className='highlight-description'>Se você é apaixonado por mundos mágicos, heróis lendários e histórias que transcendem o imaginável, essa lista é pra você! Mergulhe nos clássicos que encantaram gerações e marcaram a literatura fantástica.</p>
        </section>

        <section className='highlight-option'>
            <p className='highlight-theme'><strong>8 Livros para se emocionar</strong></p>
            <p className='highlight-description'>Se você ama histórias que mexem com a alma, te fazem rir, chorar e refletir, essa lista é imperdível! Dos romances mais profundos aos dramas mais tocantes, selecionamos 8 livros que vão te envolver do começo ao fim. </p>
        </section>

        <section className='highlight-option'>
            <p className='highlight-theme'><strong>O impacto da literatura na infância</strong></p>
            <p className='highlight-description'>Você sabia que as histórias que lemos na infância podem impactar toda a nossa vida? Descubra como a leitura estimula a imaginação, fortalece a empatia e ajuda a formar adultos mais criativos e conscientes.</p>
        </section>
    </div>
</div>

)
}
export default Highlights;