import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";
import { SketchPicker } from "react-color";

const ColorPicker = () => {
  const snap = useSnapshot(state);

  console.log("Current color:", snap.color); // Debugging

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        // to add by default
        // presetColors={[ "#FF5733", "#DAF7A6","#FFC0CB","#00FFFF", "#FF00FF","#FFA500","#FFFFFF","#800080","#008000", "#0000FF","#FF0000","#000000"]}
        onChange={(color) => {
          console.log("Selected color:", color.hex); // Debugging
          state.color = color.hex;
        }}
      />
    </div>
  );
};

export default ColorPicker;