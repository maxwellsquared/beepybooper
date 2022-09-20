import { useState } from "react";

export default function NavBar() {

  return (
    <nav>
      <div className="logo"><a href="/">beepybooper</a></div>
      <ul>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}