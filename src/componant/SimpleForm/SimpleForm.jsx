import React from 'react';

const SimpleForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='your name' />
                <br />
                <input type="email" name='email' placeholder='Your email'/>
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default SimpleForm;