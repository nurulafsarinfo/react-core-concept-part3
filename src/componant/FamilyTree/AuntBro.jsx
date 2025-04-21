import React from 'react';
import Spacial from './Spacial';
import Friend from './Friend';

const AuntBro = ({name, asset}) => {
    return (
        <div>
            <h2>{name}</h2>
            {
                name === 'Tom tom' && <Spacial asset={asset}></Spacial>
            }
            {
                name === 'jo joo' && <Friend></Friend>
            }
        </div>
    );
};

export default AuntBro;