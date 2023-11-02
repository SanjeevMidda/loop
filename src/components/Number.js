import React, { useState } from 'react'

function Number({number}) {

    const [visibility, setVisibility] = useState(true);

    function changeVisibility(){
        setVisibility(false);
    }

  return (
    <h1 className={visibility? "show" : "dontShow"} onClick={changeVisibility}>{number}</h1>
  )
}

export default Number