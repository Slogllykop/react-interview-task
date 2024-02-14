import React from "react";
import "./Row.css";

const Row = ({ name, marks, id, handleDelete, handleEdit, editIndex }) => {
    return (
        <div
            className="row"
            id={id}
            style={{ background: editIndex === id ? "grey" : "" }}
        >
            <h2 className="row-name">{name}</h2>
            <h2 className="row-marks">{marks}</h2>
            <button className="btn row-btn" data-id={id} onClick={handleEdit}>
                Edit
            </button>
            <button className="btn row-btn" data-id={id} onClick={handleDelete}>
                Delete
            </button>
        </div>
    );
};

export default Row;
