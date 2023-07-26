import React from 'react';
import { NavLink } from 'react-router-dom';
// import LineCanvas from '../components/lineCanvas';
// import SampleSimulator from '../components/SampleSimulator';

const Animation = () => {

    
    
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
        
        {/* <iframe style={{width:"80%" ,height:"30rem"}} src="https://www.youtube.com/embed/7WKbDyWbxGk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

        <iframe className='utube' style={{boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.9)'}}  src="https://www.youtube.com/embed/6eskZiGQmKo" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <br></br>
        <br></br>
        <br></br>
    </>
  );
};

export default Animation;
