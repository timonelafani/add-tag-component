import { useEffect } from 'react';
import './Tag.css';

const Tag = ({ tags, removeTag }) => (
    <>
        {tags?.map(tag => (
            <div className='tag' key={tag}>{tag} <span onClick={() => removeTag(tag)}>x</span></div>
        ))
        }
    </>
)

export default Tag