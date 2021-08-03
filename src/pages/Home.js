import React, {useState} from 'react'
import './Home.css'
import githublogo from '../assets/images/githublogo.png'
import linkedinlogo from '../assets/images/linkedinlogo.png'
import obdate from '../assets/images/obdate.png'
import leftarrow from '../assets/images/leftarrow.png'

export const Home = () => {

    const obdateImages = [obdate, "https://cdn.datingxp.co/wp-content/uploads/2019/09/tinder-bio-examples-1024x715.png", "https://www.vidaselect.com/wp-content/uploads/2019/02/negative-response-start.jpg"]
    const [currentImageDate, setCurrentImageDate] = useState(0)

    return (
        <div>
            <div className="header">
                <div className="logo">
                    GL
                </div>
                <div className="links">
                    <div>
                        Projects
                    </div>
                    <div>
                        About
                    </div>
                    <div>
                        Contact
                    </div>
                </div>
                
            </div>
        <div className="container">
            <div style={{width:"60%", fontSize:"28px"}}><h1>
            Hi, my name is
            Georgij Li.
            </h1>
            I'm a Fullstack Developer with a passion for building
            applications that help solve real life problems.
            </div>
            <div style={{paddingTop:"20px", fontSize:"18px"}}>
                <h1>
                    Projects
                </h1>
            </div>
            <div className="project">
                <div style={{width:"50%"}}>
                    <div style={{fontWeight:"600", fontSize:"18px"}}>
                    01 / Dating web app</div><br/>
                    <div>
                    A tinder like dating web app for gamers and streamers. 
                    Register and upload up to 4 images and then start swiping to find potential
                    matches within your chosen search distance. If you match
                    with someone you can message him or her. User information, matches and 
                    messages are stored in a MongoDB database and images are stored on Firebase storage.

                    </div>

                    <div style={{fontWeight:"400", paddingTop:"30px"}}>
                        <span>
                    Used technologies:</span> <span style={{fontWeight:"bold"}}>React, Node.js, MongoDB, Express.js and Firebase</span> </div><br/>
                    <div style={{fontWeight:"600", fontSize:"14px", paddingTop:"20px"}}>
                        Source code
                    </div>
                    <div style={{fontWeight:"600", fontSize:"14px"}}>
                        Live demo
                    </div>
                </div>
                <div style={{width:"60%", paddingLeft:"20px", display:"flex", justifyContent:"center"}}>
                    <div className="image"> 
                    <div style={{position:"absolute", bottom:"4px", display:"flex", width:"100%", gap:"10px", justifyContent:"center"}}>
                        {obdateImages.map((item, index) => {
                            return  <div style={{width:"6%", backgroundColor:index === currentImageDate ? "rgb(0,0,0,0.5)" : "rgb(0,0,0,0.15)" , height:"5px", borderRadius:"6px", marginBottom:"4px"}}/>

                        })}
                    </div>
                        <img style={{width:"100%", height:"300px", borderRadius:"4px", objectFit:"cover", maxHeight:"500px", border:"1px solid rgb(0,0,0,0.1)"}} src={obdateImages[currentImageDate]}></img>
                        <div style={{position:"absolute", display:"flex", width:"100%", justifyContent:"space-between",alignItems:"center", top:"50%"}}>
                        <div>
                            {currentImageDate > 0 ? 
                                 <img onClick={() => {setCurrentImageDate(currentImageDate-1)}} className="arrow" src={leftarrow}></img>
                                : null}
                        </div>
                        <div>
                            {currentImageDate < obdateImages.length-1 ? 
                                 <img onClick={() => {setCurrentImageDate(currentImageDate+1)}} className="arrow2" src={leftarrow}></img>
                                : null}
                        </div>

                    </div>
                    </div>
                </div>
            </div>
            <div className="project">
                <div style={{width:"50%"}}>
                    <div style={{fontWeight:"600", fontSize:"18px"}}>
                    02 / 8 Puzzle Game</div><br/>
                    <div>
                    A 8 puzzle game where the user gets a randomized puzzle and can solve it by
                    moving the pieces into their correct spot. You get to choose difficulty and if you get stuck
                    you can press a button that lets an implementation of A* search algorithm solve the puzzle for you.
                    It is possible to play with others online. When playing
                     with others there is a chat. The chat was 
                    implemented using Socket.io for low latency messaging.

                    </div>

                    <div style={{fontWeight:"400", paddingTop:"30px"}}>
                        <span>
                    Used technologies:</span> <span style={{fontWeight:"bold"}}>React, Node.js, Express.js and Socket.io</span> </div><br/>
                    <div style={{fontWeight:"600", fontSize:"14px", paddingTop:"20px"}}>
                        Source code
                    </div>
                    <div style={{fontWeight:"600", fontSize:"14px"}}>
                        Live demo
                    </div>
                </div>
                <div style={{width:"60%", paddingLeft:"20px", display:"flex", justifyContent:"center"}}>
                    <div className="image"> 
                    <div style={{position:"absolute", bottom:"4px", display:"flex", width:"100%", gap:"10px", justifyContent:"center"}}>
                        {obdateImages.map((item, index) => {
                            return  <div style={{width:"6%", backgroundColor:index === currentImageDate ? "rgb(0,0,0,0.5)" : "rgb(0,0,0,0.15)" , height:"5px", borderRadius:"6px", marginBottom:"4px"}}/>

                        })}
                    </div>
                        <img style={{width:"100%", height:"300px", borderRadius:"4px", objectFit:"cover", maxHeight:"500px", border:"1px solid rgb(0,0,0,0.1)"}} src={obdateImages[currentImageDate]}></img>
                        <div style={{position:"absolute", display:"flex", width:"100%", justifyContent:"space-between",alignItems:"center", top:"50%"}}>
                        <div>
                            {currentImageDate > 0 ? 
                                 <img onClick={() => {setCurrentImageDate(currentImageDate-1)}} className="arrow" src={leftarrow}></img>
                                : null}
                        </div>
                        <div>
                            {currentImageDate < obdateImages.length-1 ? 
                                 <img onClick={() => {setCurrentImageDate(currentImageDate+1)}} className="arrow2" src={leftarrow}></img>
                                : null}
                        </div>

                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Home;
