import React, { useState } from 'react';

const ControlledField = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(name, email, password)

        // if(password.length < 6){
        //     setError("password need to 6 char")
        // }
        // else{
        //     setError('')
        // }
    }

    const handleNameChange = e => {
        setName(e.target.value);
    }
    console.log("Name is: ", name);

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    console.log("Name is: ", email);

    const handlePasswordOnChange = e => {
        console.log(e.target.value);
        setPassword(e.target.value);

        if(password.length <= 5){
            setError('Password must be 6 character or longer!')
        }
        else{
            setError("");
        }
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleNameChange} placeholder='name' defaultValue={name}/>
                <br /> 
                <input type="email" onChange={handleEmailChange} name='email' placeholder='Email' defaultValue={email} required/>
                <br />
                <input type="password" name='password' placeholder='Password' onChange={handlePasswordOnChange} defaultValue={password}  required />
                <br />
                <input type="submit" value="submit"/>
            </form>
            <p style={{color: 'red'}}>{error}</p>
        </div>
    );
};

export default ControlledField;