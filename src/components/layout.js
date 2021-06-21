import React from 'react'
import { Link } from 'gatsby'
import {
    container, 
    heading, 
    navLinks, 
    navLinkItem, 
    navLinkText
} from './layout.module.css'

// Gatsby translates kebab case to camelcase!
const Layout = ({pageTitle, children}) => { // The Javascript props destructures the props. 
    return (
        <div className={container}>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
                    <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
                </ul>
            </nav>
            <h1 className={heading}>{pageTitle}</h1>
            {children}
        </div>
    )
}

export default Layout