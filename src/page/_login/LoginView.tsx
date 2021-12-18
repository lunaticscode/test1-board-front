import React, {useEffect, useState, useCallback} from 'react';

const InputEmail = ({handleInput}) => {
    return(
        <div>
            <input
                name={"email"} type={"text"}
                placeholder={"Email"}
                onChange={handleInput}
            />
        </div>
    )
}
const InputPassword = ({handleInput}) => {
    return(
        <div>
            <input
                name={"password"} type={"password"}
                placeholder={"Password"}
                onChange={handleInput}
            />
        </div>
    )
}

const ButtonSubmit = ({handleButton}) => {
    return (
        <div>
            <button onClick={handleButton} >Login</button>
        </div>
    )
}

interface LoginViewProps {
    onSubmitLoginForm: Function;
}
const LoginView:React.FC<LoginViewProps> = ({onSubmitLoginForm}) => {
    const [inputValues, setInputValues] = useState({email: "", password: ""});

    useEffect(() => {
        console.log(`${__filename} ::: LoginView Mounted`);
    })

    const handleInput = useCallback( ({target}) => {
            const {value, name} = target;
            setInputValues( {
                ...inputValues, [name] : value,
            });
            console.log(inputValues);
    }, [inputValues])

    const handleButton = () => {
        onSubmitLoginForm(inputValues);
    }
    return(
        <>
            <InputEmail
                handleInput={handleInput}
            />
            <InputPassword
                handleInput={handleInput}
            />
            <ButtonSubmit
                handleButton={handleButton}
            />
        </>
    )
}

export default LoginView;