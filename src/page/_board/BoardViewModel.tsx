import React, {useEffect, useState} from 'react';
import BoardCreateView, {BoardCreateDataType} from "./view/BoardCreateView";
import {API_PATH, BOARD_API_FORM} from "../../api-const";
import {api_fetch} from "../../util/apiFetch";

const BoardViewModel:React.FC = () => {

    const onSubmitData = async (board: BoardCreateDataType) => {
        const {result, error} = await api_fetch(BOARD_API_FORM.CREATE_BOARD.PATH, {method: BOARD_API_FORM.CREATE_BOARD.METHOD, body:board});
        console.log(result);
    }

    return(
        <>
            <BoardCreateView
                onSubmitData={onSubmitData}
            />
        </>
    )

}

export default BoardViewModel;