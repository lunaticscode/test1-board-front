import React, {useEffect, useState} from 'react';
import {useFetchResultType} from "../../../hook/useFetch";
interface HomeBoardListViewProps {
    allBoardsData: useFetchResultType;
}
const HomeBoardListView:React.FC<HomeBoardListViewProps> = ({ allBoardsData }) => {
    useEffect(() => {
        console.log('HomeBoardListView mounted');
    }, [])
    return (
        <>
            <div>
                HomeBoardListView
            </div>
        </>
    )
}
export default HomeBoardListView;