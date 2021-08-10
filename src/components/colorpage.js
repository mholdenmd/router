import React from 'react'

const Colors = (props) => {

    return (
        <div>
            {isNaN(props.word) ?
                <div style={{backgroundColor: props.color2}}>
                    <h1 style={{color: props.color1 }}>The word is: {props.word} </h1>
                    </div>:
                <h1>Needs To Be A word!: {props.word} </h1>
                
            }
        </div>

    )

};
export default Colors;