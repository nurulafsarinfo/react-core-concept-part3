import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Spacial = ({name, asset}) => {
    const newAsset = useContext(AssetContext);
    console.log('new asset', newAsset);
    return (
        <div>
            <h2>Special: {name}</h2>
            <p>Asset: {asset}</p>
            <p>New Asset: {newAsset}</p>
        </div>
    );
};

export default Spacial;