import React, {useEffect, useState} from 'react';

const InputTitle = ({handleInput}) => {
    return(
        <div>
            <input placeholder={"Title"} name={"title"} type={"text"} onChange={handleInput} />
        </div>
    )
}

const InputDescription = ({handleInput}) => {
    return(
        <div>
            <input placeholder={"Description"} name={"description"} type={"text"} onChange={handleInput} />
        </div>
    )
}

export interface BoardCreateDataType {
    title: string;
    description: string;
}
interface BoardCreateViewProps {
    onSubmitData: (data: BoardCreateDataType) => void;
}

const BoardCreateView:React.FC<BoardCreateViewProps> = ({onSubmitData}) => {
    const [inputValue, setInputValue] = useState<BoardCreateDataType>({title: "", description: ""});
    const handleInput = ({target}) => {
        setInputValue({
            ...inputValue, [target.name]: target.value,
        })
    }
    const onClickRegistBtn = () => {
        onSubmitData(inputValue)
    }
    return(
        <>
            <InputTitle
                handleInput={handleInput}
            />
            <InputDescription
                handleInput={handleInput}
            />
            <button onClick={onClickRegistBtn}>Regist</button>
        </>
    )
}

export default BoardCreateView;