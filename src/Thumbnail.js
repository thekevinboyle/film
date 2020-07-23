import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';

function Thumbnail(props) {
    return (
        <div className="gallery__item">
            <Link to={props.link}>
                <div className="gallery__item">
                    <img src={props.image} alt="Project Image" />
                </div>
                <div className="gallery-title">{props.title}</div>
                <div className="gallery-cat">{props.category}</div>
            </Link>
        </div>
    );
}

export default Thumbnail;