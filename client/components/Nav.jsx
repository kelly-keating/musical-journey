import React, {Fragment} from 'react'

const Nav = (props) => {
    return (
        <Fragment>
            <button onClick={() => props.changePage('home')}>Home</button>
            <button onClick={() => props.changePage('sine')}>Sine</button>
        </Fragment>
    )
}

export default Nav
