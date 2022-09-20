import React, { useContext, useEffect, useState } from "react";
import NoteIndividual from './NoteIndividual';

export default function Notes(props) {
  const [ currentNote, setCurrentNote ] = useState(0);
  const [ hasStarted, setHasStarted ] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNote((prev) => {
        if(prev > 14) return 0;
        if(prev < 15) return prev + 1;
      })
    }, 125);
    return () => {
      clearInterval(interval);
    }
  }, [])

  // useEffect(() => {
  //   setInterval(() => {
  //     setCurrentNote(prev => {
  //       if (prev > 14) return 0;
  //       if (prev < 15) return prev + 1;
  //     })
  //   }, 500);
  // }, [])



  return (
    <div className="notes-container">
      {Array(16).fill(1).map((el, i) =>
      <NoteIndividual key={i + (currentNote / 50)} rowID={i} currentNote={currentNote}/>
    )}
    </div>
  )
}