
import {useState} from "react";

const useInputField = (defaultValue) => {

    const [fieldValue, setFieldValue] = useState(defaultValue);

    const handlefieldOnChange = e => {
        setFieldValue(e.target.value);
    }

    return [fieldValue, handlefieldOnChange];
}


export default useInputField;
