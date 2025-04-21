import React from 'react';
import useInputField from '../../Hooks/useinputfield';

const HookForm = () => {

    const [name, nameOnChange] = useInputField('')
    const [email, emailOnChange] = useInputField('')
    const [password, passwordOnChange] = useInputField('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log("Submit", name, email, password)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input defaultValue={name} type="text" onChange={nameOnChange} placeholder='name' />
                <br />
                <input defaultValue={email} type="email" onChange={emailOnChange} placeholder='Email' />
                <br />
                <input defaultValue={password} type="password" placeholder='Password' onChange={passwordOnChange} />
                <input type='submit' value="submit" />
            </form>
        </div>
    );
};

export default HookForm;