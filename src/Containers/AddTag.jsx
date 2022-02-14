import Input from "../Components/Input/Input";
import Tag from "../Components/Tag/Tag";
import "./AddTag.css"

const AddTag = () => {
  return (
    <div className="add-tag-container">
      <Tag/>
      <Input/>
    </div>
  )
};

export default AddTag;
