import React, { useContext, useEffect, useState, useRef } from "react";

export default function NoteIndividual(props) {
  const [isOn, setIsOn] = useState(false);
  const [currentNote, setCurrentNote] = useState(props.currentNote);
  const [lightClass, setLightClass] = useState(() => { 
    if (props.currentNote == props.rowID) return "note-light on";
    return "note-light off";
  });
  // const noteFunction = useRef();

  // useEffect(() => {
  //   noteFunction.current = checkNote;
  //   noteFunction.current();
  // }, [checkNote, props]);



  // const checkNote = function() {
  //   if (props.rowID.toString() === props.currentNote) {
  //     setLightClass("note-light on");
  //     setTestText("BOOP!");
  //   };
  //   if (props.rowID.toString() !== props.currentNote) {
  //     setLightClass("note-light off");
  //     setTestText("");
  //   };
  // };

  return (
    <div className="note-individual">
      <div className={lightClass} key={props.currentNote}></div>
      {props.rowID + 1}
    </div>
  )
}