import React, { useState } from 'react';
import Logo from "../components/Logo";
import Navigation from '../components/Navigation';

const Blog = () => {
    const [content, setContent] = useState("");
    const [error, setError] = useState(false);
    const [count, setCount] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (content.length < 140) {
            setError(true);
        }
        else {
            setError(false);
        }
    };

    // const countChar = (e) =>{
    //     return e.trim().length;
    // }

    return (
        <div className="blog-container">
            <Logo />
            <Navigation />
            <h1>Blog</h1>

            <form onSubmit={(e) => handleSubmit(e)} >
                <input type="text" placeholder='Nom' />
                <textarea
                    style={{ border: error ? "1px solid red" : "1px solid #61dafb" }} placeholder='Message min 140 characters' onChangeCapture={(e) => setContent(e.target.value)} onChange={e => setCount(e.target.value.length)}></textarea>
                <span>{count} caractères/ min 140</span>
                {error && <p>Veuillez écrire un minimum de 140 caractères</p>}
                <input type="submit" value='Envoyer' />
            </form>
        </div>
    );
};

export default Blog;