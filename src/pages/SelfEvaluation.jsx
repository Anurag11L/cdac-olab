import React from 'react';
import { NavLink } from 'react-router-dom';
import Quiz from './Quiz';

const SelfEvaluation = () => {
    
  return (
    <>
    <br></br>
    <header>
            <div>
                <a href='/' className='logo'>Square Root Spiral</a>
                <nav className='navbar'>
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

        <Quiz></Quiz>
    </>
  )
}

export default SelfEvaluation
