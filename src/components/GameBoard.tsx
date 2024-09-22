import React, { useState } from 'react';
import Cell from './Cell';
import Tries from './Tries';
import ResetButton from './ResetButton';

interface Item {
    hasItem: boolean;
    clicked: boolean;
}

const createItems = (): Item[] => {
    const items: Item[] = Array(36).fill(null).map(() => ({ hasItem: false, clicked: false }));
    const randomIndex = Math.floor(Math.random() * 36);
    items[randomIndex].hasItem = true;
    return items;
};

const GameBoard: React.FC = () => {
    const [items, setItems] = useState<Item[]>(createItems());
    const [tries, setTries] = useState<number>(0);
    const [gameOver, setGameOver] = useState<boolean>(false);

    const handleClick = (index: number) => {
        if (gameOver) return;

        const newItems = [...items];
        newItems[index].clicked = true;

        setTries(tries + 1);
        setItems(newItems);

        if (newItems[index].hasItem) {
            setGameOver(true);

            setTimeout(() => {
                alert('Congratulations! The smile has been found! You can continue pressing only after the "Reset".');
            }, 500);
        }
    };

    const handleReset = () => {
        setItems(createItems());
        setTries(0);
        setGameOver(false);
    };

    return (
        <div>
            <div className="cellBox">
                {items.map((item, index) => (
                    <Cell
                        key={index}
                        index={index}
                        onClick={handleClick}
                        hasItem={item.hasItem}
                        clicked={item.clicked}
                    />
                ))}
            </div>

            <Tries tries={tries} />

            <ResetButton onReset={handleReset} />
        </div>
    );
};

export default GameBoard;
