import React, {useMemo} from 'react';
import {BOARD_MODEL_TYPE} from "../../../type/model";

interface BoardItemProps {
    data: BOARD_MODEL_TYPE;
    onClickRemoveBtn:Function;
}
const BoardItem:React.FC<BoardItemProps> = ({data, onClickRemoveBtn}) => {
    return(
        <>
            {data.title}
            <button onClick={() => onClickRemoveBtn(data.id)}>Remove</button>
        </>
    )
}

interface HomeBoardListViewProps {
    boards: Array<BOARD_MODEL_TYPE>;
    removeBoardItem: Function;
}
const HomeBoardListView:React.FC<HomeBoardListViewProps> = ({ boards , removeBoardItem}) => {
    const boardCnt = useMemo( () => (boards && boards.length) ? boards.length : 0, [boards]);
    const onClickRemoveBtn = (id) => { removeBoardItem(id) }
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
                                    <BoardItem
                                        data={board}
                                        onClickRemoveBtn={onClickRemoveBtn}
                                    />
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