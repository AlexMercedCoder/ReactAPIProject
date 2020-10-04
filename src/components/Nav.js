import React from "react"
import {Link} from "react-router-dom"

export const Nav = (props) => {
    return <nav>
        <Link to="/newyork">
            <div>
                New York
            </div>
        </Link>
        <Link to="/hartford">
            <div>
                Hartford
            </div>
        </Link>
        <Link to="/boston">
            <div>
                Boston
            </div>
        </Link>
        <Link to="/providence">
            <div>
                Providence
            </div>
        </Link>
    </nav>
}