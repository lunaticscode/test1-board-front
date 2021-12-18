import React, {useEffect, useMemo} from 'react';
import HomeViewModel from "../src/page/_home/HomeViewModel";

const Home:React.FC = () => {
    useEffect( () => {
        console.log('Home ::: Static Component mounted');
    }, [])
    return(
        <>
            <HomeViewModel/>
        </>
    )
}
export default Home;