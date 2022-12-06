import React, { useEffect, useState } from "react";
import { SketchPicker } from "react-color";

function ColorPicker() {
  const [bg, setBg] = useState({ color: "#FFF" });

  const bgStyle = {
    background: bg.color,
  };

  useEffect(() => {}, [bg]);

  const handleChangeComplete = (color) => {
    setBg({ color: color.hex });
  };

  return (
    <div className="p-4" style={bgStyle}>
      <div className="text-xl border-b-2 text-center">Color Picker </div>
      <div className="w-full  flex flex-row h-4/6 justify-center gap-4 p-2">
        <SketchPicker
          color={bg.color}
          onChangeComplete={handleChangeComplete}
        />
      </div>
    </div>
  );
}

export default ColorPicker;
