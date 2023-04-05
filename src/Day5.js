import React from 'react'

function Day5() {
    var fruits=["orange","grapes","watermelon"]
    var displayfruits=fruits.map(fname=>{return <li>{fname}</li>})
    const stuinfo=[{id:1,name:"Nithya"},{id:2,name:"Amu"},{id:3,name:"Priya"}]
  return (
    <div>{displayfruits}
    {stuinfo.map((sinfo)=>{return <li key={sinfo.id}>{sinfo.id}   {sinfo.name}</li>})}
    </div>
  )
}
export default Day5;