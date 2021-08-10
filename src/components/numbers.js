import React from 'react';

const NumberPage = (props) => {

        return (
            <div>
                {isNaN(props.num) ?
                <h1>the word is: {props.num}</h1>:<h1>the number is: {props.num}</h1>
                }
            </div>
        )
    
};
export default NumberPage;