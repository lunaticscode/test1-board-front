import React, {useEffect, useState} from 'react';
import HomeBoardListView from "./view/HomeBoardListView";
import {BOARD_API_FORM} from "../../api-const";
import {api_fetch} from "../../util/apiFetch";

const HomeViewModel:React.FC = () => {

    const [boards, setBoards] = useState(null);

    useEffect( () => { init(); }, [])

    const init = async () => {
        const allBoardsData = await api_fetch(BOARD_API_FORM.GET_ALL_BOARDS.PATH, {method: BOARD_API_FORM.GET_ALL_BOARDS.METHOD})
        if( !allBoardsData.error ){
            setBoards(allBoardsData.result);
        }
    }

    const removeBoardItem = async(id:number) => {
        const deleteBoardItemResult = await api_fetch(BOARD_API_FORM.DELETE_BOARD.PATH(id), {method: BOARD_API_FORM.DELETE_BOARD.METHOD})
        console.log(deleteBoardItemResult);
        init();
    }

    return(
        <>
            <HomeBoardListView
                boards={boards}
                removeBoardItem={removeBoardItem}
            />
        </>
    )
}

export default HomeViewModel;