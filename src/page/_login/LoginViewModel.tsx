import React, {useEffect, useState} from 'react';
import LoginView from "./LoginView";

const LoginViewModel:React.FC = () => {
    useEffect(() => {
        console.log(`${__filename} ::: LoginViewModel Mounted`);
    }, [])
    return(
        <>
            <LoginView/>
        </>
    )
}

export default LoginViewModel;