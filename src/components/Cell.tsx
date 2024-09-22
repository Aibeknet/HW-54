import React from 'react';

interface CellProps {
    index: number;
    onClick: (index: number) => void;
    hasItem: boolean;
    clicked: boolean;
}

const Cell: React.FC<CellProps> = ({index, onClick, hasItem, clicked}) => {
    const handleClick = () => {
        if (!clicked) {
            onClick(index);
        }
    };

    return (
        <div onClick={handleClick} className={`cell ${clicked ? 'clicked' : ''}`}>
            {clicked && hasItem ? '😉' : ''}
        </div>
    );
};

export default Cell;