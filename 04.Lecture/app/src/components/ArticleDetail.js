import React from 'react';
import { useParams } from 'react-router-dom';

const ArticleDetail = ({articles}) => {
    const {id} = useParams();
    const article = articles.find(article => article.id === Number(id));

    if(!article){
        return <h1>Article not found</h1>
    }

    return (
        <div>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
        </div>
    )
}

export default ArticleDetail