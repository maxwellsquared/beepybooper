import React, { useContext, useEffect, useState } from "react";

export default function NoteIndividual(props) {
  const [isOn, setIsOn] = useState(false);
  const [lightClass, setLightClass] = useState("note-light off");

  useEffect(() => {
    if (props.rowID.toString() === props.currentNote) {
      setLightClass("note-light on");
    }
  }, [props])


  return (
    <div className="note-individual">
      <div className={lightClass}></div>
      {props.rowID + 1}
      current note is {props.currentNote}
    </div>
  )
}