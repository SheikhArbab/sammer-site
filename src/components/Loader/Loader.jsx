import React from 'react'
import ls from './Loader.module.css'

const Loader = () => {
    return (
        <body className={ls.body}>
            <span className={ls.loader}></span>
        </body>
    )
}

export default Loader
