import React, {useState, useRef} from 'react'
import './Home.css'
import githublogo from '../assets/images/githublogo.png'
import linkedinlogo from '../assets/images/linkedinlogo.png'
import leftarrow from '../assets/images/leftarrow.png'
import puzzlemultiplayer from '../assets/images/puzzlemultiplayer.gif'
import puzzleplay from '../assets/images/puzzleplay.gif'
import puzzlesolver from '../assets/images/puzzlesolver.gif'
import obdateregister from '../assets/images/obdateregister.gif'
import obdatemessage from '../assets/images/obdatemessage.gif'
import profilepic from '../assets/images/profilepic.jpg'
import {
    Link
  } from "react-router-dom";

export const Home = () => {

    const dateImages = [obdateregister, obdatemessage]
    const [currentImageDate, setCurrentImageDate] = useState(0)

    const puzzleImages = [puzzleplay, puzzlesolver, puzzlemultiplayer]
    const [currentImagePuzzle, setCurrentImagePuzzle] = useState(0)

    const [menuVisible, setMenuVisible] = useState(false)

    const projectsRef = useRef(null)
    const aboutRef = useRef(null)
    const contactRef = useRef(null)

    const navigateTo = (ref, mob = false) => {

        if(mob){
            if(ref !== null){
                window.scrollTo({
                    top:ref.current.offsetTop-50,
                    left:0,
                    behavior: "smooth"
                })
                return;
            }else{
                return;
            }
        }

        console.log(ref.current.offsetTop)
        if(ref !== null){
            window.scrollTo({
                top:ref.current.offsetTop,
                left:0,
                behavior: "smooth"
            })
        }else{
            return;
        }
    }

    return (
        <div>
            <div className="header">
                <div className="logo">
                    GL
                </div>
                <div className="links">
                    <div>
                        <Link onClick={() => navigateTo(projectsRef)} style={{textDecoration:"none", color:"inherit"}}>
                            Projects
                        </Link>
                    </div>
                    <div>
                        <Link onClick={() => navigateTo(aboutRef)} style={{textDecoration:"none", color:"inherit"}}>
                            About 
                        </Link>
                    </div>
                    <div>
                    <Link onClick={() => navigateTo(contactRef)} style={{textDecoration:"none", color:"inherit"}}>
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
            {menuVisible}
            <div className="mobileheader">
                <div className="logo mobile">
                    GL
                </div>
                <div onClick={() => setMenuVisible(menuVisible => !menuVisible)} style={{padding:"10px", cursor:"pointer", backgroundColor: menuVisible ? "rgb(0,0,0,0.3)" : "", transition:"background-color 0.2s"}}>
                <div className="burgericon"></div>
                <div className="burgericon"></div>
                <div className="burgericon"></div>
                </div>
                <div style={{zIndex:"2000", position:"fixed", right:"0px", display:"flex", flexDirection:"column", gap:"40px", backgroundColor:"#F3F3F3", height:"100%", top:"50px", padding:"30px", paddingLeft:"100px", paddingRight:"100px", transform: menuVisible ? "translate(0%,0)" : "translate(100%,0)", borderLeft:"1px solid rgb(0,0,0,0.2)", transition:"transform 0.3s"}} className="mobilemenu">
                    <div onClick={() => {navigateTo(projectsRef, true); setMenuVisible(false) }}>
                        Projects
                    </div>
                    <div onClick={() => {navigateTo(aboutRef, true); setMenuVisible(false) }}>
                        About
                    </div>
                    <div onClick={() => {navigateTo(contactRef, true); setMenuVisible(false);}}>
                        Contact
                    </div>
            </div>
            </div>
        <div className="container">
            <div className="hero" ><h1>
            Hi, my name is
            Georgij Li.
            </h1>
            <div className="bio">
                I'm a solution oriented Fullstack Developer with a passion for building
                applications that help solve real life problems.
            </div>
            </div>
            <div ref={projectsRef} className="sectiontitle">
                <h1>
                    Projects
                </h1>
            </div>
            <div className="project">
                <div className="infosection" >
                    <div style={{fontWeight:"600", fontSize:"20px"}}>
                    01 / Dating web app</div><br/>
                    <div style={{fontSize:"18px"}}>
                    A tinder like dating web app for gamers and streamers. 
                    Register and upload up to 4 images and then start swiping to find potential
                    matches within your chosen search distance. You can add what games you stream or play among a selection
                    of currently popular games. If you match
                    with someone you can message him or her. User information, matches and 
                    messages are stored in a MongoDB database and images are stored on Firebase storage.

                    </div>

                    <div style={{fontWeight:"400", paddingTop:"30px", fontSize:"18px"}}>
                        <span>
                    Used technologies:</span> <span style={{fontWeight:"600"}}>React, Node.js, MongoDB, Express.js and Firebase</span> </div><br/>
                    
                    <div style={{display: "flex", gap:"20px", paddingTop:"20px"}}>
                    <div style={{fontWeight:"600", fontSize:"16px", cursor:"pointer"}}>
                       Code
                    </div>
                    <div style={{fontWeight:"600", fontSize:"16px", cursor:"pointer"}}>
                        Demo
                    </div>
                    </div>
                </div>
                <div className="rightside" >
                <div className="image"> 
                    <div style={{position:"absolute", display:"flex", width:"70%", gap:"10px", justifyContent:"center", transform:"translate(0, calc( 20vh - 6px))"}}>
                        {dateImages.map((item, index) => {
                            return  <div className="imageindicator" style={{backgroundColor:index === currentImageDate ? "rgb(0,0,0,0.7)" : "rgb(0,0,0,0.15)"}}/>
                        })}
                    </div>
                        <img alt="projectimg" className="projectimg" style={{objectFit:"contain"}} src={dateImages[currentImageDate]}></img>
                        <div className="arrowcontainer">
                        <div>
                            {currentImageDate > 0 ? 
                                 <img alt="arrow" onClick={() => {setCurrentImageDate(currentImageDate-1)}} className="arrow" src={leftarrow}></img>
                                : null}
                        </div>
                        <div>
                            {currentImageDate < dateImages.length-1 ? 
                                 <img alt="arrow" onClick={() => {setCurrentImageDate(currentImageDate+1)}} className="arrow2" src={leftarrow}></img>
                                : null}
                        </div>
                        {
                            dateImages.map((obj, index) => {
                                return <div className="slidename" style={{display:currentImageDate === index ? 'inherit' : 'none',position:"absolute", opacity:"0.9"}}>{index+1}. {index === 0 ? <>Registration</> : <>Match simulation </>} </div>
                            })
                        }

                    </div>
                    </div>
                </div>
            </div>
            <div className="project">
                <div className="infosection">
                    <div style={{fontWeight:"600", fontSize:"20px"}}>
                    02 / 8 Puzzle Game</div><br/>
                    <div style={{fontSize:"18px"}}>
                    A 8 puzzle game where the user gets a randomized puzzle and can solve it by
                    moving the pieces into their correct spot. You get to choose difficulty and if you get stuck
                    you can press a button that lets an implementation of A* search algorithm solve the puzzle for you.
                    It is possible to play with others online through turn based cooperation. When playing
                     with others there is a chat. The chat was 
                    implemented using Socket.io for low latency messaging.

                    </div>

                    <div style={{fontWeight:"400", paddingTop:"30px", fontSize:"18px"}}>
                        <span>
                    Used technologies:</span> <span style={{fontWeight:"600"}}>React, Node.js, Express.js and Socket.io</span> </div><br/>
                    <div style={{display: "flex", gap:"20px", paddingTop:"20px"}}>
                    <div style={{fontWeight:"600", fontSize:"16px", cursor:"pointer"}}>
                    <a style={{textDecoration:"none", color:"inherit"}} href="https://github.com/goshaaz/8-puzzle-game">
                       Code
                       </a>
                    </div>
                    <div style={{fontWeight:"600", fontSize:"16px", cursor:"pointer"}}>
                        Demo
                    </div>
                    </div>
                </div>
                <div className="rightside" >
                <div className="image"> 
                    <div style={{position:"absolute", display:"flex", width:"70%", gap:"10px", justifyContent:"center", transform:"translate(0, calc( 20vh - 6px))"}}>
                        {puzzleImages.map((item, index) => {
                            return  <div className="imageindicator" style={{backgroundColor:index === currentImagePuzzle ? "rgb(0,0,0,0.7)" : "rgb(0,0,0,0.15)"}}/>
                        })}
                    </div>
                        <img alt="projectimg" className="projectimg" style={{objectFit: currentImagePuzzle === 2 ? "contain" : "cover"}} src={puzzleImages[currentImagePuzzle]}></img>
                        <div className="arrowcontainer">
                        <div>
                            {currentImagePuzzle > 0 ? 
                                 <img alt="arrow" onClick={() => {setCurrentImagePuzzle(currentImagePuzzle-1)}} className="arrow" src={leftarrow}></img>
                                : null}
                        </div>
                        <div>
                            {currentImagePuzzle < puzzleImages.length-1 ? 
                                 <img alt="projectimg" onClick={() => {setCurrentImagePuzzle(currentImagePuzzle+1)}} className="arrow2" src={leftarrow}></img>
                                : null}
                        </div>
                        {
                            puzzleImages.map((obj, index) => {
                                return <div className="slidename" style={{display:currentImagePuzzle === index ? 'inherit' : 'none',position:"absolute", opacity:"0.9"}}>{index+1}. {index === 0 ? <>Playing puzzle</> : index === 1 ? <>A* search solver </> : <>Playing online</>} </div>
                            })
                        }

                    </div>
                    </div>
                </div>
            </div>
            <div ref={aboutRef} className="sectiontitle">
                <h1 >
                    About me
                </h1>
            </div>
            <div className="project">
                <div className="infosection about" >
                    <div style={{fontSize:"18px"}}>
                    Hello! My name is Georgij and I enjoy developing stuff for the web. I'm currently finishing my 
                    fifth and last year at Linköping university as a Media technology and Engineering student.
                     I have always seen myself as a middle ground between a logical and creative person as I enjoy both 
                     math/sciences and media/design depending on the circumstances. That is also perhaps partly one of the reasons why I chose Media technology
                     as my major, since in our programme we get to both code, which I see as mostly a logical task, 
                    and study UI/UX, which is perhaps more of a creative task. I think 
                    this is also one of the reasons why I enjoy developing web applications as it gives me the 
                    possiblity to
                    design and build a product from scratch!
</div>
<br/>
<div style={{fontSize:"18px"}}>
 My main focus when developing applications is providing a smooth, functional and visually pleasing experience 
 for the user.
</div>
<br></br>
<div style={{fontSize:"18px"}}>
Here are a few technologies I've been working with recently:
</div>
<br/>
<div style={{fontSize:"18px", display:"grid", gridTemplateColumns:"1fr 1fr", fontWeight:"600"}}>
        <div>
    JavaScript (ES6+)
    </div>
    <div>
    React
    </div>
    <div>
    Node.js
    </div>
    <div>
    Express.js
    </div>
    <div>
    MongoDB
    </div>
    <div>
    Figma
    </div>

                    </div>
                </div>
                <div className="rightside about">
                    <div className="image about"> 
                        <img alt="projectimg" className="profileimg" src={profilepic}></img>
                    </div>
                </div>
            </div>
            <div ref={contactRef} className="sectiontitle">
                <h1 >
                    Contact
                </h1>
            </div>
            <div className="project" style={{paddingBottom:"0px"}}>
                <div className="infosection about" >
                    <div style={{display:"flex", flexDirection:"column", gap:"0px"}}>
                    <div style={{fontSize:"18px"}}>
                    Phone number: +46722482237
                    </div>
                    <div style={{fontSize:"18px"}}>
Email: ligeorgij7@hotmail.com
</div>
<div style={{display:"flex", gap:"10px", paddingTop:"30px"}}>
<div style={{width:"22px", height:"auto"}}>
<a style={{textDecoration:"none", color:"inherit"}} href="https://github.com/goshaaz">
        <img alt="projectimg" src={githublogo} style={{maxWidth:"100%", maxHeight:"100%", cursor:"pointer"}}></img>
    </a>
</div>
<div style={{width:"22px", height:"auto"}}>
    <a style={{textDecoration:"none", color:"inherit"}} href="https://www.linkedin.com/in/georgij-li-25b7a8159/">
        <img alt="projectimg" src={linkedinlogo} style={{maxWidth:"100%", maxHeight:"100%", cursor:"pointer"}}></img>
    </a>
</div>
</div>
</div>
                </div>
            </div>
        </div>
        <div className="footer" >
            <div className="footerleft">
                Developed by Georgij Li
            </div>
            <div className="footerright" >
                <div style={{cursor:"pointer"}}>
                    <a style={{textDecoration:"none", color:"inherit"}} href="https://github.com/goshaaz">
                        GITHUB
                    </a>
                </div>
                <div style={{cursor:"pointer"}}>
                    <a style={{textDecoration:"none", color:"inherit"}} href="https://www.linkedin.com/in/georgij-li-25b7a8159/">
                        LINKEDIN
                    </a>
                </div>
                <div style={{cursor:"pointer"}}>
                    <a style={{textDecoration:"none", color:"inherit"}} href="https://twitter.com/GoshaazFPS">
                        TWITTER
                    </a>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Home;
