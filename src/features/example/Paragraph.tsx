import React, { useContext } from 'react'
import { ThemeContext, Value } from '../Context/ThemeContext'

const Paragraph = () => {
    const context = useContext<Value | null>(ThemeContext)
    console.log(context?.theme);
    
    return (
        <p className={context?.theme}>
            Context provides a way to pass data through the 
            component tree without having to pass props down 
            manually at every level.
        </p>
    )
}

export default Paragraph
