import React from 'react';

const Child2 = () => {
    function handleClick(fruit){
        alert("I am inside handleClick function",fruit)
    }
    return (
        <div>
            <h1>This is Child2.jsx</h1>
            <button onClick={()=>handleClick('apple')}>Click Me!</button>
        </div>
    );
};

export default Child2;