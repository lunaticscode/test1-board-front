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

    return(
        <>
            <HomeBoardListView
                boards={boards}
            />
        </>
    )
}

export default HomeViewModel;