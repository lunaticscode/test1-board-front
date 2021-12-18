import React, {useEffect, useState} from 'react';
import LoginView from "./LoginView";

interface LoginFormType {
    email: string;
    password: string;
}
const LoginViewModel:React.FC = () => {
    useEffect(() => {
        console.log(`${__filename} ::: LoginViewModel Mounted`);
    }, [])

    const onSubmitLoginForm = (form:LoginFormType) => {
        console.log(form);
    }

    return(
        <>
            <LoginView
                onSubmitLoginForm={onSubmitLoginForm}
            />
        </>
    )
}

export default LoginViewModel;