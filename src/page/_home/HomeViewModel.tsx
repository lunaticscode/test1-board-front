import React, {useEffect, useState, useMemo} from 'react';
import HomeBoardListView from "./view/HomeBoardListView";
import useFetch from "../../hook/useFetch";
import {API_PATH} from "../../api-const";

const HomeViewModel:React.FC = () => {
    const allBoardsData = useFetch(API_PATH.GET_ALL_BOARDS, {method: 'get'})

    useEffect( () => {
        init();
    }, [])

    const init = () => {
        console.log('HomeViewModel init .... ');
    }
    return(
        <>
            <HomeBoardListView
                allBoardsData={allBoardsData}
            />
        </>
    )
}

export default HomeViewModel;