import React from 'react';

interface TriesProps {
    tries: number;
}

const Tries: React.FC<TriesProps> = ({tries}) => {
    return (
        <div>
            Tries: {tries}
        </div>
    );
};

export default Tries;