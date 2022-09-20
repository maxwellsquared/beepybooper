## BEEPYBOOPER

1. Add single drum loop.
Assuming clock is at 120bpm, every cell should display for:
2 beats per second
8 16th notes per second
1 16th note = 1000 / 8 = 125 milliseconds

create global clock with useContext
  notePosition (0-15)
  Every 125 ms:
    if notePosition = 15, setNotePosition(0)
    else setNotePosition(prev => prev + 1)

create array of notes
for each note:
  set noteValue (default 0)

  If cellPosition = notePosition:
    if (noteValue) play sample
    set style to light-on
  If cellPosition != notePosition:
    set style to light-off

2. Add effects 


STRETCH
audio waveform visualizer
