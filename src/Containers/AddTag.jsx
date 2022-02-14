import Input from "../Components/Input/Input";
import Tag from "../Components/Tag/Tag";
import { useState } from "react";
import "./AddTag.css";
import data from "../MockData/data.json"

const AddTag = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [tagsDropdownData, settagsDropdownData] = useState(data.people.map(el => el.name))

  const selectTagHandler = (selected) => {
    setSelectedTags([...selectedTags, selected])
    const index = tagsDropdownData.indexOf(selected);
    tagsDropdownData.splice(index, 1);
    settagsDropdownData(tagsDropdownData)
  }

  const removeTagHandler = (selected) => {
    setSelectedTags(selectedTags.filter(item => item !== selected));
    settagsDropdownData([...tagsDropdownData, selected])
  }

  return (
    <div className="add-tag-container">
      <Tag tags={selectedTags} removeTag={removeTagHandler} />
      <Input tagDropdownData={tagsDropdownData} selectTag={selectTagHandler} />
    </div>
  )
};

export default AddTag;
