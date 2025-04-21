import React from 'react';
import Spacial from './Spacial';

const AuntBro = ({name, asset}) => {
    return (
        <div>
            <h2>{name}</h2>
            {
                name === 'Tom tom' && <Spacial asset={asset}></Spacial>
            }
        </div>
    );
};

export default AuntBro;