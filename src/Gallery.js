import React from "react";
import Thumbnail from './Thumbnail.js';
import './App.css';

import god from './god.jpg';
import prayer from './prayer.jpg';
import texture from './texture.jpg';

function Gallery(props) {
    return (
        <div className="gallery">
           
            <Thumbnail
            link=""
            image= {god} 
            title=""
            category=""
            />
             <Thumbnail
            link=""
            image={ texture }
            title=""
            category=""
            />
             <Thumbnail
            link=""
            image={ prayer }
            title=""
            category=""
            />
        </div>
    );
}

export default Gallery;
