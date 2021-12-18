import React, {useMemo} from 'react';
import {BOARD_MODEL_TYPE} from "../../../type/model";

interface BoardItemProps {
    data: BOARD_MODEL_TYPE;
}
const BoardItem:React.FC<BoardItemProps> = ({data}) => {
    return(
        <>
            {data.title}
        </>
    )
}

interface HomeBoardListViewProps {
    boards: Array<BOARD_MODEL_TYPE>;
}
const HomeBoardListView:React.FC<HomeBoardListViewProps> = ({ boards }) => {
    const boardCnt = useMemo( () => (boards && boards.length) ? boards.length : 0, [boards]);
    return (
        <>
            {
                (boards && boards.length)
                    ?
                    <>
                        <div>게시물 수: {boardCnt}</div>
                        <div>
                            {boards.map( (board) => {
                                return <div key={board.id}>
                                    <BoardItem data={board}/>
                                </div>
                            })}
                        </div>
                    </>
                    :
                    ""
            }

        </>
    )
}
export default HomeBoardListView;