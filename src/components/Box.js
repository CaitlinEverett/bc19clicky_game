
import React from 'react';


const Box = (props)=> {
    console.log(props);
    return (
        <div role="img" aria-label="click item" className="click-item" id={props.image.id} 
            onClick={() => props.onclick(props.id)}>
            <img src={props.image}  key="props.image.key" alt="image" className="click-item-image"/> 
        </div>  
    )
}
    

 
export default Box;
