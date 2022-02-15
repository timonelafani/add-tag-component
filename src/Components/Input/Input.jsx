import { useState } from 'react';
import './Input.css';

const Input = ({ tagDropdownData, selectTag, searchTag }) => {
    const [value, setValue] = useState("+  Add tag")
    const [showTagList, setShowTagList] = useState(false)

    const onChangeHandler = (e) => {
        setValue(e.target.value)
    }

    const onClickHandler = () => {
        setValue(""); setShowTagList(true)
    }

    const onTagListItemClickHandler = (selected) => {
        setShowTagList(!showTagList)
        setValue("+  Add tag")
        selectTag(selected)
    }

    return (
        <div className='input-container'>
            {tagDropdownData.length > 0 && <input
                type="text"
                value={value}
                className='input'
                onChange={(e) => {
                    searchTag(e.target.value);
                    onChangeHandler(e)
                }}
                onClick={onClickHandler}
            />}
            {showTagList && <div className='items-list'>
                <ul>
                    {tagDropdownData.map(tag => (
                        <li key={tag} onClick={() => onTagListItemClickHandler(tag)}>{tag}</li>
                    ))}
                </ul>
            </div>}
        </div>
    )
}

export default Input