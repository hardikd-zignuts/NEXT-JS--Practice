import { useRouter } from 'next/router'
import React from 'react'

const Docs = () => {
    const router = useRouter()
    const { parms = [] } = router.query
    let template = <h1>Docs Home Page</h1>


    if (parms.length === 1) {
        template = <h1>View of {parms[0]} </h1>
    }
    if (parms.length === 2) {
        template = <h1>View of {parms[0]} page for {parms[1]}</h1>
    }
    if (parms.length === 3) {
        template = <h1>View of {parms[0]} page for {parms[1]} of {parms[2]}</h1>
    }

    return (
        <div>
            {template}
        </div>
    )
}

export default Docs
