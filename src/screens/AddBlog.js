import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const AddBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const navigate = useNavigate();

    const postBlog = async (e) => {
        e.preventDefault();
        const post = await axios.post('http://34.252.185.24:3000/api/posts',{
            title: title,
            content: content,
            author: author
        });
        navigate('/');
    }

    return(
        <div>
            <form onSubmit={postBlog}>
                <input value={title} placeholder={'enter title'} onChange={(e) => setTitle(e.target.value)}/>
                <input value={content} placeholder={'enter content'} onChange={(e) => setContent(e.target.value)}/>
                <input value={author} placeholder={'enter author'} onChange={(e) => setAuthor(e.target.value)}/>
                <button>Add Blog</button>
            </form>
        </div>
    )
}

export default AddBlog;