import React from 'react';
// import ArticleList from './ArticleList';
import blogData from '../data/blog';

function Article({ title, date, preview }){
    const minutes = blogData.posts.minutes;
    let minutesToRead;
    if (minutes < 30){
        minutesToRead = Math.ceil(minutes/5);
    }else{
        minutesToRead = Math.ceil(minutes/10);
    }
    let emoji = minutes < 30 ?'☕️' : '🍱'
    return (
        <article>
            <h3>{title}</h3>
            <small>{date || "January 1, 1970"}</small>
            <p>{preview}</p>
            <div>
               {emoji.repeat(minutesToRead)}{minutes} min read
            </div>
        </article>
    )
}

export default Article;