import React from 'react';
import AuntBro from './AuntBro';


const Aunt = ({asset}) => {
    return (
        <div>
            <h2>Aunt</h2>
            <section className='flex'>
                <AuntBro name={'Tom tom'} asset={asset}></AuntBro>
                <AuntBro name={"jo joo"} ></AuntBro>
            </section>
        </div>
    );
};

export default Aunt;