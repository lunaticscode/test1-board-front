import React, {useEffect, useState} from 'react';

const InputEmail = ({handleInput}) => {
    return(
        <div>
            <input className={"email"} type={"text"} onChange={handleInput} />
        </div>
    )
}
const InputPassword = ({handleInput}) => {
    return(
        <div>
            <input className={"password"} type={"password"} onChange={handleInput} />
        </div>
    )
}

const LoginView:React.FC = () => {

    const handleInput = ({target}) => {
        const {value, className} = target;
        console.log(value, className);
    }
    return(
        <>
            <InputEmail
                handleInput={handleInput}
            />
            <InputPassword
                handleInput={handleInput}
            />
        </>
    )
}

export default LoginView;