import Input from "../Components/Input/Input";
import Tag from "../Components/Tag/Tag";
import { useState } from "react";
import "./AddTag.css";
import data from "../MockData/data.json"

const AddTag = () => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [tagsDropdownData, settagsDropdownData] = useState(data.people.map(el => el.name))
  const [isSearch, setIsSearch] = useState(false);
  const [tagsAfterSearch, setTagsAfterSearch] = useState(tagsDropdownData);

  const selectTagHandler = (selected) => {
    setSelectedTags([...selectedTags, selected])
    const index = tagsDropdownData.indexOf(selected);
    tagsDropdownData.splice(index, 1);
    settagsDropdownData(tagsDropdownData)
    setIsSearch(false);
  }

  const removeTagHandler = (selected) => {
    setSelectedTags(selectedTags.filter(item => item !== selected));
    settagsDropdownData([...tagsDropdownData, selected])
  }

  const searchTagHandler = (value) => {
    setIsSearch(true);
    const remainingTags = tagsDropdownData;

    if (value.length > 2) {
      setTagsAfterSearch(remainingTags.filter(data => data.includes(value)))
    }
    else {
      setTagsAfterSearch(tagsDropdownData)
    }
  }

  return (
    <div className="add-tag-container">
      <Tag tags={selectedTags} removeTag={removeTagHandler} />
      <Input tagDropdownData={isSearch ? tagsAfterSearch : tagsDropdownData} selectTag={selectTagHandler} searchTag={searchTagHandler} />
    </div>
  )
};

export default AddTag;
