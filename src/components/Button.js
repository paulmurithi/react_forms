import React from 'react'

export default function Button ( props ) {
    return (
        <div>
            <button onClick={ props.onclick } >{ props.value }</button>
        </div>
    )
}
