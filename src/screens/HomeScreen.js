import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const HomeScreen = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetchBlogs();
    },[]);

    const fetchBlogs = async () => {
        const response = await axios.get('http://34.252.185.24:3000/api/posts');
        setBlogs(response.data);
    }

    return(
        <div>
            <Link to={'/add'}>
                <button>Add blog</button>
            </Link>
            {blogs.map(blog => {
                return(
                    <div key={blog.id}>
                        <h1>{ blog.title }</h1>
                        <p>{ blog.content }</p>
                        <p>{ blog.author }</p>
                    </div>
                )
            })}
        </div>
    )
}

export default HomeScreen;