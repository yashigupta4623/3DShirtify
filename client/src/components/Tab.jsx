import React from "react";
import { useSnapshot } from "valtio";

import state from "../store";

const Tab = ({tab, isFilterTab, isActiveTab, handleClick}) => {
  const snap = useSnapshot(state); 

  const activeStyles = isFilterTab && isActiveTab
    ? {backgroundColor: snap.color, opacity: 0.5}
    : {backgroundColor: "transparent", opacity: 1}

  return (
    <div
      key = {tab.name}
      className={`tab-btn ${isFilterTab ? 'rounded-full glassmorhism' : 'rounded-4'}`}
      onClick={handleClick}
      style={activeStyles}
    >  
    < img
      src = {tab.icon}
      alt = {tab.name}
      className={`${isFilterTab ? 'w-2/5 h-2/5' :'w-11/12 h-11/12 onject-contain'}`}
/>
    </div>
  );
};

export default Tab;