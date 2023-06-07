import React from "react"
import clsx from 'clsx';


const Card = ({children , className}) => {
    return (
        <div className={clsx(
            'rounded-lg p-4 w-[30%] shadow bg-jet', 
            className
          )}
          >
            {children}
          </div>
    )
}



export default Card