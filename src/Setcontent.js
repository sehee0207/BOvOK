// import React, {Component} from 'react'
import './Style.css';

function Setcontent(props) {
    return (
        <div className="book-info">
        <img src={props.thumbnail}/>
        <p>{props.title}</p>
        <p>{props.authors}</p>
        <p>{props.publisher}</p>
        <p>{props.price}</p>
        <p>{props.status}</p>
        <p>{props.contents}</p>
        </div>
    )
}



export default Setcontent;