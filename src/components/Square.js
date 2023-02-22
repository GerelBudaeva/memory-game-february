import React from 'react';

const squareStyle = {
    border: '2px solid green',
    background: 'lightgreen',
    fontSize: '60px',
    fontWeight: '800',
    float: 'left',
    cursor: 'pointer',
    padding: '0px',
    textAlign: 'center',
    height: '100px',
    width: '100px'
}
const Square = (props) => {
    return (
        <button style={squareStyle} onClick={() => props.openCard(props.card.id, props.card.img)}>
            {props.card.isOpen ? props.card.img : ''}
        </button>
    );
};

export default Square;
