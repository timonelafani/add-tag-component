import { useState } from 'react';
import Tag from '../Tag/Tag';
import './Input.css';

const Input = () => {
    const [value, setValue] = useState("+  Add tag")
    const [showTagList, setShowTagList] = useState(false)

    const onChangeHandler = (e) => {
        setValue(e.target.value)
    }

    const onClickHandler = () => {
        setValue("")
        setShowTagList(!showTagList)
    }

    const onTagListItemClickHandler = () => {
        setShowTagList(!showTagList)
        setValue("+  Add tag")
    }

    return (
        <div className='input-container'>
            <input
            type="text"
            value={value}
            className='input'
            onChange={onChangeHandler}
            onClick={onClickHandler}
        />
       {showTagList && <div className='items-list'>
            <ul>
                <li onClick={onTagListItemClickHandler}>item 1</li>
                <li onClick={onTagListItemClickHandler}>item 2</li>
            </ul>   
        </div>}
        </div>
    )
}

export default Input