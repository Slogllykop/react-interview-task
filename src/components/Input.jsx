import React from "react";
import "./Input.css";

const Input = ({
    placeholder,
    type = "text",
    nameValue,
    marksValue,
    setNameValue,
    setMarksValue,
}) => {
    const check = type === "text" ? true : false;
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={check ? nameValue : marksValue}
            onChange={(e) =>
                check
                    ? setNameValue(e.target.value)
                    : setMarksValue(e.target.value)
            }
            className="input-btn"
        />
    );
};

export default Input;
