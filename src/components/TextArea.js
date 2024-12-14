
import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import 'react-edit-text/dist/index.css';

function TextArea() {

    const navigate  = useNavigate();
    const nodeRef = React.useRef(null);

    const [textData, setListData] = useState("Item")
    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e) => {
        setListData(e.target.value);
    };

    return(
        <div
                style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                height: "88px",
                backgroundColor: isEditing ? "#1A232B" : "#161921", // Background color changes when editing
                borderRadius: "4px",
                padding: "5px",
                boxSizing: "border-box",
                minWidth: "20vw",
                maxWidth: "90vw",
                transition: "all 0.3s ease", // Smooth transition for style changes

            }}
        >
            <textarea
                value={textData}
                onChange={handleChange}
                onFocus={() => setIsEditing(true)} // Set editing mode when focused
                onBlur={() => setIsEditing(false)} // Set editing mode off when blurred
                style={{
                    fontSize: "30px",
                    fontFamily: "'Arial', sans-serif",
                    fontWeight: "normal",
                    color: "#BA6FEC",
                    textAlign: "center",
                    width: "100%", // Expand width based on content
                    height: "100%", // Takes full height of the container
                    padding: "5px",
                    resize: "none", // Disable resizing
                    outline: "none", // Remove outline for cleaner appearance
                    boxSizing: "border-box",
                    lineHeight: "88px", // Vertically centers text
                    transition: "all 0.3s ease", // Smooth transition for styles
                    backgroundColor: isEditing ? "#1A232B" : "#161921", // Update background color
                    border: isEditing ? "1px solid #BA6FEC" : "none", // Border on edit mode
                    overflow: isEditing ? "auto" : "hidden", // Show scrollbar when editing, hide when not
                    boxSizing: "border-box", // Ensures padding is included in the width/height

                }}
            />
        </div>
    )
}

export default TextArea