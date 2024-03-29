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
  const [searchedValue, setSearchedValue] = useState("");

  /**
   * Handels selecting a single tag and removing it from the dropdown.
   * @constructor
   * @param {string} selected - The selected tag.
   */
  const selectTagHandler = (selected) => {
    setSelectedTags([...selectedTags, selected])
    const index = tagsDropdownData.indexOf(selected);
    tagsDropdownData.splice(index, 1);
    settagsDropdownData(tagsDropdownData)
    setIsSearch(false);
    setSearchedValue("")
  }

  /**
 * Handels removing a single tag and adding it to the dropdown.
 * @constructor
 * @param {string} selected - The selected tag.
 */
  const removeTagHandler = (selected) => {
    setSelectedTags(selectedTags.filter(item => item !== selected));
    settagsDropdownData([...tagsDropdownData, selected])
    setSearchedValue("")
  }

  /**
 * Handels searching for a tag.
 * @constructor
 * @param {string} selected - The selected tag.
 */
  const searchTagHandler = (value) => {
    setIsSearch(true);
    const remainingTags = tagsDropdownData;
    setSearchedValue(value)
    if (value.length > 2) {
      setTagsAfterSearch(remainingTags.filter(data => { const toLowerCase = data.toLowerCase(); return toLowerCase.includes(value.toLowerCase()) }))
    }
    else {
      setTagsAfterSearch(tagsDropdownData);
      setSearchedValue("")
    }
  }

  return (
    <div className="add-tag-container">
      <Tag tags={selectedTags} removeTag={removeTagHandler} />
      <Input tagDropdownData={isSearch ? tagsAfterSearch : tagsDropdownData} selectTag={selectTagHandler} searchTag={searchTagHandler} searchedValue={searchedValue} />
    </div>
  )
};

export default AddTag;
