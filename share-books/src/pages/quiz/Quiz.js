import React from 'react';
import './Quiz.css'

const Quiz = () => {

return(
<div className='principal-div div-quiz'>
    <h2>Quiz</h2>

    <div className='list-quiz'>
        <section className='quiz-option'>
            <p className='quiz-theme'><strong>Teste seus conhecimentos sobre autores da literatura clássica e suas obras.</strong></p>
            <p className='question-description'>pelos grandes autores e obras que moldaram a história literária! 🖋️🌍 Teste seu conhecimento sobre os clássicos imortais e descubra se você está entre os maiores admiradores de Shakespeare, Dostoiévski, Austen e tantos outros. 🎩📖 Aceite o desafio e faça o quiz agora!</p>
        </section>

        <section className='quiz-option'>
            <p className='quiz-theme'><strong>Teste seus conhecimentos sobre o universo de Tolkien.</strong></p>
            <p className='question-description'>Você é um verdadeiro conhecedor da Terra Média? 🧙‍♂️⚔️ Teste seu conhecimento sobre o incrível universo de J.R.R. Tolkien, o criador de O Senhor dos Anéis e O Hobbit! 🌋💍 Encare criaturas místicas, desvenda segredos épicos e mostre que você merece o título de Guardião da Terra Média. 🌟 Faça o quiz agora e desafie-se!</p>
        </section>

        <section className='quiz-option'>
            <p className='quiz-theme'><strong>Teste seus conhecimentos sobre literatura poética.</strong></p>
            <p className='question-description'>Você é apaixonado por poesia? 🌹📝 Chegou a hora de testar sua alma literária! Explore os versos dos grandes mestres, sinta a força das palavras e descubra o quanto você sabe sobre o universo da literatura poética. 📜✨ Faça o quiz e mergulhe no mundo dos poetas, das rimas e das emoções profundas. Está preparado para esse desafio poético? 🎶💫</p>
        </section>
    </div>
</div>

)
}
export default Quiz;