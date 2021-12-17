import React, {useEffect, useState, useCallback} from 'react';

const InputEmail = ({handleInput}) => {
    return(
        <div>
            <input name={"email"} type={"text"} onChange={handleInput} />
        </div>
    )
}
const InputPassword = ({handleInput}) => {
    return(
        <div>
            <input name={"password"} type={"password"} onChange={handleInput} />
        </div>
    )
}


const LoginView:React.FC = () => {
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