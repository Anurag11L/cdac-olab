import React from 'react';
import { NavLink } from 'react-router-dom';

const Reference = () => {
    
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
            -REFERENCE-
        </div> */}
        {/* <LineCanvas></LineCanvas> */}
        <div style={{background:'white',padding:'2%',border:'4px solid darkblue',color:'black',width:'90%',margin:'auto',borderRadius:'1rem',textAlign:'left'}}>
        {/* • https://ncert.nic.in/textbook/pdf/iemh101.pdf <br></br> */}
        • <a href='https://ncert.nic.in/textbook/pdf/iemh101.pdf'>NCERT Number System</a> <br></br>
        {/* • https://ncert.nic.in/textbook.php?jemh1=1-15<br></br> */}
        • <a href='https://ncert.nic.in/textbook.php?jemh1=1-15'>NCERT 10th Mathematics Textbook</a></div>
        
    </>
  )
}

export default Reference
