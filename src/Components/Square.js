import React from 'react';

const squareStyle = {
    border: '2px solid brown',
    background: 'lightgreen',
    marginTop: '-1px',
    marginRight: '-1px',
    fontSize: "60px",
    fontWeight:'bold',
    float: 'left',
    cursor: 'pointer',
    padding: '0px',
    textAlign: 'center'
}
const Square = (props) => {
    return (
        <button style={squareStyle}>
            {props.card.isOpen ? props.card.img : ''}

        </button>
    );
};

export default Square;
