import React, { useContext, useEffect, useState } from "react";
import NoteIndividual from './NoteIndividual';

export default function Notes(props) {
  const [ currentNote, setCurrentNote ] = useState(0);
  const [ hasStarted, setHasStarted ] = useState(false); 
  
  // REPLACE USEEFFECT WITH CUSTOM USEINTERVAL HOOK - SEE https://overreacted.io/making-setinterval-declarative-with-react-hooks/
  // useEffect(() => {
  const startClock = function() {  
    if (hasStarted) return;
    setInterval(() => {
      if (currentNote > 14) setCurrentNote(0);
      if (currentNote < 15) setCurrentNote(prev => prev + 1);
    }, 250);
    setHasStarted(true);
  }
  // }, [])



  return (
    <div className="notes-container" onClick={startClock()}>
      {Array(16).fill(1).map((el, i) =>
      <NoteIndividual key={i} rowID={i} currentNote={currentNote}/>
    )}
    </div>
  )
}