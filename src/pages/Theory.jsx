import React from 'react';
// import Header from '../components/Header';
// import { Outlet } from 'react-router-dom';
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
        
            <div >In geometry, the spiral of Theodorus also called square root spiral, Spiral of Einstein, Pythagorean spiral, or Pythagoras's snail is a spiral composed of right triangles, placed edge-to-edge. It was named after Theodorus of Cyrene.<br></br>
            <p style={{ fontSize: '30px', fontWeight: 'bold' }}>Construction</p>
            The spiral is started with an isosceles right triangle, with each leg having unit length. Another right triangle is formed, an automedian right triangle with one leg being the hypotenuse of the prior triangle (with length the square root of 2) and the other leg having length of 1; the length of the hypotenuse of this second triangle is the square root of 3. The process then repeats; the nth triangle in the sequence is a right triangle with the side lengths √ n and 1, and with hypotenuse √n+1. For example, the 16th triangle has sides measuring 4=√16 , 1 and hypotenuse of √17.
            </div>
            <img src='./src/components/spiral.png' className='spiral'></img>
        {/* </div> */}
        {/* <div style={{color:'black'}}> */}
            <p style={{ fontSize: '5vh', fontWeight: 'bold' ,textAlign:'left',marginLeft:'0px',width:'100%'}}>
                History and Uses
            </p>
            <div style={{ fontSize: '', fontWeight: '' ,textAlign:'left',marginLeft:'0px',width:'100%'}}>Although all of Theodorus' work has been lost, Plato put Theodorus into his dialogue Theaetetus, which tells of his work. It is assumed that Theodorus had proved that all of the square roots of non-square integers from 3 to 17 are irrational by means of the Spiral of Theodorus.

            Plato does not attribute the irrationality of the square root of 2 to Theodorus, because it was well known before him. Theodorus and Theaetetus split the rational numbers and irrational numbers into different categories.</div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

    </>
  );
};

export default Theory;
