import { useSnapshot } from "valtio";
import { getContrastingColor } from "../config/helpers";
import state from "../store";



const CustomButton = ({ title, type, handelClick, customStyles }) => {
const snap = useSnapshot(state);

  const generateStyles = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    } else if (type === "outline") {
      return {
        borderWidth: '1px',
        borderColor: snap.color,
        color: snap.color
      };
    }
  }

  return (

      <button className={`px-2 py-1.2 flex-1 rounded-md ${customStyles}`}
      style={generateStyles(type)}
      onClick={handelClick}
      >
        {title}
      </button>
  
  )
}


export default CustomButton

