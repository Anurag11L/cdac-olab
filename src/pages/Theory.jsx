import React from 'react';
import { NavLink } from 'react-router-dom';
import SquareRootSpiral from '../components/SpiralRootSpiral';

const Theory = () => {
    
  return (
    <>
    <br></br>
        <header>
            <div>
                <a href='/theory' className='logo'>Square Root Spiral</a>
                <nav className='navbar'>
                    {/* <a href='#' className='toggle-button'>
                        <span className='bar'></span>
                        <span className='bar'></span>
                        <span className='bar'></span>
                    </a> */}
                    <ul className='menu'>
                            <NavLink to="/theory" className="nava"><div className='linktitle'>Theory</div></NavLink>
                            <NavLink to="/animation" className="nava"><div className='linktitle'>Animation</div></NavLink>
                            <NavLink to="/simulator" className="nava"><div className='linktitle'>Simulator</div></NavLink>
                            <NavLink to="/selfevaluation" className="nava"><div className='linktitle'>Self-Evaluation</div></NavLink>
                            <NavLink to="/reference" className="nava"><div className='linktitle'>Reference</div></NavLink>
                            <NavLink to="/feedback" className="nava"><div className='linktitle'>FeedBack</div></NavLink>
                    </ul>
                </nav>
            </div>
        </header>
        {/* <div className='title'>
            -THEORY-
        </div> */}
        <SquareRootSpiral />
        <div className='theory' style={{background:'white',padding:'2%',border:'2px solid darkblue',color:'black',width:'90%',margin:'auto'}}>

        <div style={{ fontSize: '5vh', fontWeight: 'bold' ,textAlign:'left',marginLeft:'0px',width:'100%',}}>
        {/* textShadow:' 2px 2px 20px #000000' */}
            Introduction
        </div>
        <br></br>
        <br></br>
        <br></br>
        
        {/* textShadow:' 2px 2px 20px #000000' */}
        <div style={{ fontSize: '', fontWeight: '' ,textAlign:'left',marginLeft:'0px',width:'100%',}} >The spiral of Theodorus, also known as the square root spiral, Spiral of Einstein, Pythagorean spiral, or Pythagoras's snail, is a unique geometric construction. It consists of a sequence of right triangles arranged in a spiral formation, with each triangle sharing one side with the previous one. This captivating spiral is attributed to its namesake, Theodorus of Cyrene.
        </div>
        <br></br>


        <p style={{ fontSize: '5vh', fontWeight: 'bold' ,textAlign:'left',marginLeft:'0px',width:'100%',}}>Construction</p>
        {/* textShadow:' 2px 2px 20px #000000' */}

        {/* textShadow:' 2px 2px 20px #000000' */}
        <div style={{ fontSize: '', fontWeight: '' ,textAlign:'left',marginLeft:'0px',width:'100%',}}>To draw a square root spiral, start with a point as the origin. Draw a right-angled triangle with sides of length 1, √2, and 1, then rotate it 90 degrees. Attach the hypotenuse's end to the previous triangle's right-angle vertex to form a new triangle. Repeat this process, increasing the length of the hypotenuse by √3, √4, √5, and so on. Continue adding triangles to create a smooth spiral. Each triangle represents a square root of a natural number. As the sequence grows, the spiral expands outward, forming the mesmerizing Square Root Spiral.
        </div>
        <br></br>
        <img src='./src/components/spiral.png' className='spiral' ></img>


        <p style={{ fontSize: '5vh', fontWeight: 'bold' ,textAlign:'left',marginLeft:'0px',width:'100%',}}>
        {/* textShadow:' 2px 2px 20px #000000' */}
            History and Uses
        </p>
        {/* textShadow:' 2px 2px 20px #000000' */}
        <div style={{ fontSize: '', fontWeight: '' ,textAlign:'left',marginLeft:'0px',width:'100%',}}>Despite the loss of Theodorus' original works, his contributions were mentioned in Plato's dialogue "Theaetetus." This dialogue describes Theodorus' work, suggesting that he demonstrated the irrationality of square roots for non-square integers between 3 and 17 using the Spiral of Theodorus. Notably, Theodorus' method did not include the proof of the irrationality of √2, as it was already known. Theodorus and Theaetetus classified rational and irrational numbers into distinct categories, further emphasizing their pioneering exploration of number theory. Their work laid the foundation for later advancements in understanding the nature of numbers and their properties.</div>
        <br></br>
        <br></br>
        
        <figure>
            <img src='./src/components/shell.jpg' className='spiral' style={{margin:"auto"}}></img>
            <figcaption>Existence of Square Root Spiral in Nature.</figcaption>
        </figure>
        </div>
        
        <br></br>
        <br></br>
        <br></br>
        <br></br>

    </>
  );
};

export default Theory;
