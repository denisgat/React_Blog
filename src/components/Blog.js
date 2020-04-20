import React from 'react';
import Navbar from './Navbar'
import Projects from './Project'
import Preweek1 from './Preweek1';
import Preweek2 from './Preweek2';
import Preweek3 from './Preweek3';
import Preweek4 from './Preweek4';
import Week1 from './Week1';
import Week2 from './Week2';
import Week3 from './Week3';
import Week4 from './Week4';
import Week5 from './Week5';
import Week6 from './Week6';
import Week7 from './Week7';
import Week8 from './Week8';
// import Week9 from './Week9';
// import Week10 from './Week10';
// import Week11 from './Week11';
// import Week12 from './Week12';



function Blog(){
    return (
        <div>
            <Navbar/>
            <img style={{height: '100vh', width: '99vw'}} src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fea%2F00%2F0c%2Fea000cc6fb9375b14a7b21d55dcf9745.jpg&f=1&nofb=1' alt='nature image'/>
            <br></br>
            <br></br>
            <Projects/>
            <h1 className='text-center'>BootCamp Blog</h1>
            <br/>
            {/* <Week12/> */}
            {/* <Week11/> */}
            {/* <Week10/> */}
            {/* <Week9/> */}
            {/* <Week8/> */}
            <Week7/>
            <Week6/>
            <Week5/>
            <Week4/>
            <Week3/>
            <Week2/>
            <Week1/>
            <Preweek4/>     
            <Preweek3/> 
            <Preweek2/>   
            <Preweek1/>
            
            
        </div>
    )
    
}

export default Blog