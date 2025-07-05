import {useState} from 'react';

const Child3 = () => {
    let [defaultFruit, setdefaultFruit] = useState("Apple");
    function changeName(fruit){
        //defaultFruit = fruit;
        setdefaultFruit(fruit);
        console.log(defaultFruit);
    }
    return (
        <div>
            <hr />
            <div>{defaultFruit}</div>
            <button onClick={()=>changeName('Banana')}>Click to change name</button>
        </div>
    );
};

export default Child3;