import "./App.css";
import Input from "./components/Input";
import Row from "./components/Row";
import React from "react";

function App() {
    const [nameValue, setNameValue] = React.useState("");
    const [marksValue, setMarksValue] = React.useState("");
    const [editIndex, setEditIndex] = React.useState(null);
    const [isInEditMode, setIsInEditMode] = React.useState(false);
    const [row, setRow] = React.useState([
        { name: "Ironman", marks: 100 },
        { name: "Captain America", marks: 90 },
        { name: "Spiderman", marks: 40 },
        { name: "Antman", marks: 20 },
        { name: "Hawkeye", marks: 0 },
        { name: "Thanos", marks: 100 },
        { name: "Hulk", marks: 90 },
        { name: "Thor", marks: 40 },
        { name: "Black Panther", marks: 20 },
        { name: "Captain Marvel", marks: 0 },
    ]);

    const handleAdd = () => {
        if (isInEditMode || !nameValue || !marksValue) return;
        setRow((row) => [
            ...row,
            {
                name: nameValue,
                marks: marksValue,
            },
        ]);
        setNameValue("");
        setMarksValue("");
    };

    const handleSort = () => {
        if (isInEditMode) return;
        setRow((row) => [...row].sort((a, b) => a.marks - b.marks));
    };

    const handleDelete = (e) => {
        if (isInEditMode) return;
        setRow(row.filter((_, i) => i !== parseInt(e.target.dataset.id)));
    };

    const handleEdit = (e) => {
        if (isInEditMode) return;
        const index = parseInt(e.target.dataset.id);
        setIsInEditMode(true);
        setEditIndex(index);
        setNameValue(row[index].name);
        setMarksValue(row[index].marks);
    };

    const handleSave = () => {
        row[editIndex].name = nameValue;
        row[editIndex].marks = marksValue;
        handleCancel();
    };

    const handleCancel = () => {
        setIsInEditMode(false);
        setEditIndex(null);
        setNameValue("");
        setMarksValue("");
    };

    return (
        <div className="content-wrapper">
            <h1 className="table-head">
                Table
                <span style={{ fontSize: "1rem", marginLeft: "1rem" }}>
                    (No. of entries: {row.length})
                </span>
            </h1>
            <div className="input-btns">
                <Input
                    placeholder="Name"
                    nameValue={nameValue}
                    setNameValue={setNameValue}
                />
                <Input
                    placeholder="Marks"
                    type="number"
                    marksValue={marksValue}
                    setMarksValue={setMarksValue}
                />
                <button className="btn" onClick={handleAdd}>
                    Add
                </button>
                <button className="btn" onClick={handleSort}>
                    Sort
                </button>
            </div>
            <div className="marks-container">
                <div className="headings">
                    <h1 className="heading">Name</h1>
                    <h1 className="heading">Marks</h1>
                    <h1 className="heading">Edit</h1>
                    <h1
                        className="heading"
                        style={{ display: "flex", gap: "1rem" }}
                    >
                        Delete{" "}
                        <span
                            style={{
                                display: "grid",
                                placeItems: "center",
                            }}
                        >
                            <button
                                className="btn small"
                                onClick={() => setRow([])}
                            >
                                Clear all
                            </button>
                        </span>
                    </h1>
                </div>
                <div className="rows-container">
                    {row.map((r, i) => {
                        return (
                            <Row
                                key={i}
                                id={i}
                                editIndex={editIndex}
                                name={r.name}
                                marks={r.marks}
                                handleDelete={(e) => handleDelete(e)}
                                handleEdit={(e) => handleEdit(e)}
                            />
                        );
                    })}
                </div>
                {isInEditMode && (
                    <div className="bottom-btns">
                        <button className="btn" onClick={handleSave}>
                            Save
                        </button>
                        <button className="btn" onClick={handleCancel}>
                            Cancel
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
