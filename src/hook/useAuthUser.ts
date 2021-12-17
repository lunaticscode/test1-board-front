import {useEffect, useState} from 'react';

const useAuthUser = () => {
    const [isAuth, setIsAuth] = useState<boolean>(false);
    return !isAuth;
}
export default useAuthUser;