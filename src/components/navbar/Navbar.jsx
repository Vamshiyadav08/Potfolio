import React from 'react';
import './navbar.scss';
import {logo} from "../../assests/index"

import { Link } from 'react-scroll';
import { navLinksdata } from '../../constants/constants';
export const Navbar = () => {
  return (
    <nav>
        <div className='logo-section'>
            <img src={logo} alt="logo"/>
        </div>
        <ul className=''>
            {
             navLinksdata.map(({_id,title,link})=>(
                <li key={_id}>
                    <Link
                    activeClass='active'
                    to={link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                    {title}
                    </Link>
                </li>
             ))
            }
        </ul>
    </nav>
  )
}
