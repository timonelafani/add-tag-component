import { useState } from 'react';
import './Input.css';

const Input = ({ tagDropdownData, selectTag, searchTag, searchedValue }) => {
    const [value, setValue] = useState("+  Add tag")
    const [showTagList, setShowTagList] = useState(false)

    console.log(searchedValue)
    const onChangeHandler = (e) => {
        setValue(e.target.value)
    }

    const onClickHandler = () => {
        setValue(""); setShowTagList(true)
    }

    /**
     * Handels OnClick event on a single tag.
     * @constructor
     * @param {string} selected - The selected tag.
     */
    const onTagListItemClickHandler = (selected) => {
        setShowTagList(!showTagList)
        setValue("+  Add tag")
        selectTag(selected)
    }

    /**
    * Makes bold the search word.
    */
    const boldSearchText = () => {
        return tagDropdownData.map(data => {
            if (!data) {
                return "";
            }
            const indexOfText = data.indexOf(searchedValue);
            if (indexOfText === -1) {
                <li key={data} onClick={() => onTagListItemClickHandler(data)}>{data}</li>
            } else {
                const endIndexOfText = indexOfText + searchedValue.length;
                return (
                    <li key={data} onClick={() => onTagListItemClickHandler(data)}>
                        {`${data.slice(0, indexOfText)}`}
                        <b>{data.slice(indexOfText, endIndexOfText)}</b>
                        {data.slice(endIndexOfText)}
                    </li>
                );
            }
        })

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
                <ul>{boldSearchText()}</ul>
            </div>}
        </div>
    )
}

export default Input