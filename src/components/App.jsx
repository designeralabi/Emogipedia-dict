import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

// using a mapping loop components 
//to loop through arrays from "../emojepedia" 

function createEntry(entries){
  return <Entry 
    key={entries.id}
    emoji={entries.emoji}
    name={entries.name}
    meaning={entries.meaning}

  />
    
}

function App(props) {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">

        {emojipedia.map(createEntry)}
      
      {/* without using  the mapping components
      each data will be done call the components 
      one by one*/}
        {/* <Entry 
          emoji ={emojipedia[0].emoji}
          name = {emojipedia[0].name}
          meaning = {emojipedia[0].meaning}
        /> */}
        
      </dl>
    </div>
  );
}

export default App;
