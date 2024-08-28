import React from 'react';
import { NavLink } from 'react-router-dom';

const Animation = () => {

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

        <iframe className='utube' style={{boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.9)'}}  src="https://www.youtube.com/embed/u1qAAmAuf9M?si=uK_nWH9wifXpBuP9" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <br></br>
        <br></br>
        <br></br>
    </>
  );
};

export default Animation;
