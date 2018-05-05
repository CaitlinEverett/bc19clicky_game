import React from 'react';

const Container = props => <main className="Container">
    <div className="container">
        {props.children}
    </div>
</main>;

export default Container;