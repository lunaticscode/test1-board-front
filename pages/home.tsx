import React, {useEffect, useMemo} from 'react';
import dynamic from "next/dynamic";
const sleep = async() => await new Promise((resolve, reject) => setTimeout(() => resolve(true), 3000));

const WELCOME_VIEW_LOADING_TEXT:string = "Loading....";
const DynamicWelcomeView = dynamic(async() => {
        await sleep();
        return import('../src/page/_home/view/HomeMainView')},
    {ssr: false, loading: () => <p>{WELCOME_VIEW_LOADING_TEXT}</p>});

const Home:React.FC = () => {
    useEffect( () => {
        console.log('Home ::: Static Component mounted');
    }, [])
    return(
        <div>
            <DynamicWelcomeView/>
        </div>
    )
}
export default Home;