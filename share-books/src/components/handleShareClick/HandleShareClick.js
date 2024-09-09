import React from "react";
import { useState } from "react";
import axios from 'axios'
import './HandleShareClick.css'

const HandleShareClick = () => {

    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);

    const API_KEY = 'AIzaSyDA0AzdpiSYhak2DWC_o1iMZOQnEz-9H-w';

    const searchBooks = async () => {
        try {
        const response = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`
        )
        setBooks(response.data.items)
        } catch (error) {
        console.error("Erro ao buscar livros:", error)
        }
    }

    return(
        <div className="principal-div div-handleShareClick">
            <h1>Pesquisa de Livros no Google</h1>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Digite o nome do livro"
                className="input-handleShare"
            />
            <button className="btn-handleShare" onClick={searchBooks}>Pesquisar</button>

            <div className="div-show-books-infor">
                {books.length > 0 ? (
                books.map((book) => (
                    <div className="books-infor-list" key={book.id}>
                        <section className="about-books-infor">
                            <h2>{book.volumeInfo.title}</h2>
                            <img
                            src={book.volumeInfo.imageLinks?.thumbnail}
                            alt={book.volumeInfo.title}
                            />
                            <p>{book.volumeInfo.authors?.join(', ')}</p>
                        </section>

                        <section className="about-books-description">
                            <p>{book.volumeInfo.description}</p>
                        </section>
                    </div>
                ))
                ) : (
                <p>Nenhum livro encontrado</p>
                )}
            </div>
        </div>
    )
}
export default HandleShareClick