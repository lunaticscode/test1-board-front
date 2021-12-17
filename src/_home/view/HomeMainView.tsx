import React, {useMemo} from 'react';
const getUserAgent = () => window.navigator.userAgent.toString() || "";
const HomeMainView:React.FC = () => {

    const userAgent = useMemo( () => getUserAgent(), [] );
    return (
        <>
            UserAgent<br/>
            {userAgent}
        </>
    )
}
export default HomeMainView;