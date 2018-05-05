
import React from 'react';

const Box = (props) => (
    <div role="img" aria-label="click item" className="click-item" 
        onClick={() => props.onclick(props.array)}>
            <img src={props.image} alt="image" className="click-item-image"/> 
    </div>
);

export default Box;
