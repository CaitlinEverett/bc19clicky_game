
import React from 'react';

const Box = (props) => (
    <div role="img" aria-label="click item" className="click-item">
    <img src={props.image} alt="image"/>
</div>
);

export default Box;
