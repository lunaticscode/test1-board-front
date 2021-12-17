import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import PrivateRouter from "./router/privateRouter";
import PublicRouter from "./router/publicRouter";
interface CommonHeaderProps {
    isAuth:boolean;
}

const CommonHeader:React.FC<CommonHeaderProps> = ({isAuth}) => {
    const router = useRouter();
    console.log(isAuth);
    return(
        <>
            <a onClick={() => router.push('/home')}>Home</a>
            {
                (isAuth)
                ?
                    <PrivateRouter/>
                :
                    <PublicRouter/>
            }
        </>
    )
}
export default CommonHeader;