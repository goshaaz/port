import React,{useState, useRef} from 'react'
import JobItem from './JobItem'

const places = [{company: "LiTHehack", title:"Programming tutor @ LiTHehack", date:"May 2021 - Present",desc:[`Helped other Linkoping university students with programming related labs and projects.
 The technologies and languages tutored in were C++, React and JavaScript.`,`
Together with the other members of LiTHehack organized events and held talks 
related to programming and software development to inspire other students to program more and help them become better software developers.`]},
 {company: "NAFFI", title:"Webmaster @ NAFFI",date:"Sept 2020 - June 2021", desc:[`Was responsible for maintaining and updating NAFFI's website and MySQL user database.`,`Made changes to NAFFI's board and other members roles in the database to allow them to access to admin control panel and activity registration on NAFFI's website.`]}]

export default function Jobs() {

  const [selected,setSelected] = useState(0)

  return (
    <div style={{display:"flex", gap:"50px", minHeight:"350px"}}>
      <div style={{display:"flex", position:"relative", flexDirection:"column", borderLeft:"1px solid rgb(0,0,0,0.3)", height:"200px"}}>
        <div style={{top:`${selected*44}px`,position:"absolute",left:"0px",borderLeft:"3px solid rgb(0,0,0,0.8)", width:"1px",height:"44px",transform:"translateX(-1.5px)", transition:"top 0.25s ease 0s"}}></div>
        {places.map(({company,title,date,desc}, i) => {
          return <div onClick={() => setSelected(i)} className={selected === i ? "joblistitemSel" : "joblistitemUns"} style={{cursor:"pointer", paddingTop:"10px",paddingBottom:"10px",paddingRight:"20px",paddingLeft:"20px"}}>{company}</div>
        })}
      </div><JobItem job={places[selected]}/></div>
  )
}
