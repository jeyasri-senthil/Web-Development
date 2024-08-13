import React, { useState } from 'react';

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

function State() {
    const [theme, setTheme] = useState("Light");
    const [bgColor, setBgColor] = useState("white");
    const [textColor, setTextColor] = useState("black");

    const handleToggle = () => {
        setTheme(theme === "Light" ? "Dark" : "Light");
        setBgColor(theme === "Light" ? "black" : "white");
        setTextColor(theme === "Light" ? "white" : "black");
    };

    const handleRandomColors = () => {
        setBgColor(getRandomColor());
        setTextColor(getRandomColor());
    };

    return (
        <div style={{ 
            backgroundColor: bgColor, 
            color: textColor,
            height: "100vh", 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            justifyContent: "center" 
        }}>
            <button onClick={handleToggle} style={{padding: "10px 20px", fontSize: "12px", marginBottom: "10px"}}>
                {theme}
            </button>
            <button onClick={handleRandomColors} style={{padding: "10px 20px", fontSize: "12px"}}>
                Generate Random Theme
            </button>
        </div>
    );
}

export default State;
