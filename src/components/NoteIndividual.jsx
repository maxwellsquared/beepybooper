import React, { useContext, useEffect, useState, useRef } from "react";

export default function NoteIndividual(props) {
  const [isOn, setIsOn] = useState(false);
  const [currentNote, setCurrentNote] = useState(props.currentNote);
  const [lightClass, setLightClass] = useState(() => { 
    if (props.currentNote == props.rowID) return "note-light on";
    return "note-light off";
  });

  const clickNote = function() {
    setIsOn(prev => !prev);
    console.log("gabagool!");
  };


  return (
    <div className={isOn ? "note-individual-on" : "note-individual"} onClick={props.onClick} rowid={props.rowID}>
      <div className={lightClass} key={props.currentNote}></div>
      {props.rowID + 1}
    </div>
  )
}