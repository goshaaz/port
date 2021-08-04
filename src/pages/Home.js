import React, {useState, useEffect, useRef} from 'react'
import './Home.css'
import githublogo from '../assets/images/githublogo.png'
import linkedinlogo from '../assets/images/linkedinlogo.png'
import obdate from '../assets/images/obdate.png'
import leftarrow from '../assets/images/leftarrow.png'
import puzzlemultiplayer from '../assets/images/puzzlemultiplayer.gif'
import puzzleplay from '../assets/images/puzzleplay.gif'
import puzzlesolver from '../assets/images/puzzlesolver.gif'
import profilepic from '../assets/images/profilepic.jpg'
import {
    Link, useLocation
  } from "react-router-dom";

export const Home = () => {

    const obdateImages = [obdate, "https://cdn.datingxp.co/wp-content/uploads/2019/09/tinder-bio-examples-1024x715.png", "https://www.vidaselect.com/wp-content/uploads/2019/02/negative-response-start.jpg"]
    const [currentImageDate, setCurrentImageDate] = useState(0)

    const puzzleImages = [puzzleplay, puzzlesolver, puzzlemultiplayer]
    const [currentImagePuzzle, setCurrentImagePuzzle] = useState(0)
    const [menuVisible, setMenuVisible] = useState(false)
    const [fixedVisible, setFixedVisible] = useState(false)

    const projectsRef = useRef(null)
    const aboutRef = useRef(null)
    const contactRef = useRef(null)

    const location = useLocation()

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

    function scrollListener(event){
        if(window.pageYOffset === 450){
            console.log('projects ')
        }
        if(window.pageYOffset > 200){
            setFixedVisible(true)
        }else{
            setFixedVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollListener)
    },[])


    return (
        <div>
            <div className="header">
                <div className="logo">
                    GL
                </div>
                <div className="links">
                    <div>
                        <Link onClick={() => navigateTo(projectsRef)} to="/projects" style={{textDecoration:"none", color:"inherit"}}>
                            Projects
                        </Link>
                    </div>
                    <div>
                        <Link onClick={() => navigateTo(aboutRef)} to="/about" style={{textDecoration:"none", color:"inherit"}}>
                            About 
                        </Link>
                    </div>
                    <div>
                    <Link onClick={() => navigateTo(contactRef)} to="/about" style={{textDecoration:"none", color:"inherit"}}>
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
            I'm a solution oriented Fullstack Developer with a passion for building
            applications that help solve real life problems.
            </div>
            <div ref={projectsRef} className="sectiontitle">
                <h1>
                    Projects
                </h1>
            </div>
            <div className="project">
                <div className="infosection" >
                    <div style={{fontWeight:"500", fontSize:"20px"}}>
                    01 / Dating web app</div><br/>
                    <div style={{fontSize:"18px"}}>
                    A tinder like dating web app for gamers and streamers. 
                    Register and upload up to 4 images and then start swiping to find potential
                    matches within your chosen search distance. If you match
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
                <div className="rightside">
                    <div className="image"> 
                        <div style={{position:"absolute", bottom:"4px", display:"flex", width:"100%", gap:"10px", justifyContent:"center"}}>
                            {obdateImages.map((item, index) => {
                                return  <div style={{width:"6%", backgroundColor:index === currentImageDate ? "rgb(0,0,0,0.7)" : "rgb(0,0,0,0.15)" , height:"5px", borderRadius:"6px", marginBottom:"4px"}}/>

                            })}
                        </div>
                        <img className="projectimg" src={obdateImages[currentImageDate]}></img>
                        <div style={{position:"absolute", display:"flex", width:"80%", justifyContent:"space-between",alignItems:"center", top:"50%"}}>
                        <div>
                            {currentImagePuzzle > 0 ? 
                                 <img onClick={() => {setCurrentImagePuzzle(currentImagePuzzle-1)}} className="arrow" src={leftarrow}></img>
                                : null}
                        </div>
                        <div>
                            {currentImagePuzzle < puzzleImages.length-1 ? 
                                 <img onClick={() => {setCurrentImagePuzzle(currentImagePuzzle+1)}} className="arrow2" src={leftarrow}></img>
                                : null}
                        </div>

                    </div>
                    </div>
                </div>
            </div>
            <div className="project">
                <div className="infosection">
                    <div style={{fontWeight:"500", fontSize:"20px"}}>
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
                        {puzzleImages.map((item, index) => {
                            return  <div style={{width:"6%", backgroundColor:index === currentImagePuzzle ? "rgb(0,0,0,0.7)" : "rgb(0,0,0,0.15)" , height:"5px", borderRadius:"6px", marginBottom:"4px"}}/>
                        })}
                    </div>
                    <div style={{position:"absolute", display:"flex", width:"80%", gap:"10px",color:"rgb(0,0,0,1)", fontWeight:"500", fontSize:"18px", transform:"translate(0px,calc( 15px - 20vh )", left:"4px", justifySelf:"center"}}>
                        {puzzleImages.map((item, index) => {
                        })}
                    </div>
                        <img className="projectimg" style={{objectFit: currentImagePuzzle === 2 ? "contain" : "cover"}} src={puzzleImages[currentImagePuzzle]}></img>
                        <div className="arrowcontainer">
                        <div>
                            {currentImagePuzzle > 0 ? 
                                 <img onClick={() => {setCurrentImagePuzzle(currentImagePuzzle-1)}} className="arrow" src={leftarrow}></img>
                                : null}
                        </div>
                        <div>
                            {currentImagePuzzle < puzzleImages.length-1 ? 
                                 <img onClick={() => {setCurrentImagePuzzle(currentImagePuzzle+1)}} className="arrow2" src={leftarrow}></img>
                                : null}
                        </div>
                        {
                            puzzleImages.map((obj, index) => {
                                return <div className="slidename" style={{display:currentImagePuzzle === index ? 'inherit' : 'none',position:"absolute"}}>{index+1}. {index === 0 ? <>Playing puzzle</> : index === 1 ? <>A* search solver </> : <>Playing online</>} </div>
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
 for the user, while also considering any potential potential pitfalls for non-ideal use cases.
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
                    <div className="image"> 
                        <img className="profileimg" src={profilepic}></img>
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
        <img src={githublogo} style={{maxWidth:"100%", maxHeight:"100%", cursor:"pointer"}}></img>
    </a>
</div>
<div style={{width:"22px", height:"auto"}}>
    <a style={{textDecoration:"none", color:"inherit"}} href="https://www.linkedin.com/in/georgij-li-25b7a8159/">
        <img src={linkedinlogo} style={{maxWidth:"100%", maxHeight:"100%", cursor:"pointer"}}></img>
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
