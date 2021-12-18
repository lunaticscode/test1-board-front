import React, {useEffect, useState} from 'react';
import BoardCreateView, {BoardCreateDataType} from "./view/BoardCreateView";

const BoardViewModel:React.FC = () => {

    const onSubmitData = (data: BoardCreateDataType) => {
        console.log(data);
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