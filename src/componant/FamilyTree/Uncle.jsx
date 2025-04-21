import React from 'react';
import Cousin from './Cousin';
import Cousin2 from './Cousin2';

const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className='flex'>
                <Cousin></Cousin>
                <Cousin2></Cousin2>
            </section>
        </div>
    );
};

export default Uncle;