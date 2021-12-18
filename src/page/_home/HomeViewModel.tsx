import React, {useEffect, useState, useMemo} from 'react';
import HomeBoardList from "./view/HomeBoardList";
import useFetch from "../../hook/useFetch";
import {API_PATH} from "../../api-const";

const HomeViewModel:React.FC = () => {
    const {data, loading, error} = useFetch(API_PATH.GET_ALL_BOARDS, {method: 'get'})

    useEffect( () => {
        init();
    }, [])

    const init = () => {
        console.log('HomeViewModel init .... ');
    }

    return(
        <>
            <HomeBoardList/>
        </>
    )
}

export default HomeViewModel;