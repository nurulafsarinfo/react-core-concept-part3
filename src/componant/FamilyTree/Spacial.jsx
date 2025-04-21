import React from 'react';

const Spacial = ({name, asset}) => {
    return (
        <div>
            <h2>Special: {name}</h2>
            <p>Asset: {asset}</p>
        </div>
    );
};

export default Spacial;