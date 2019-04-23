import React from 'react'

export default function TextInput ( props ) {
    return (
        <div>
            <label for={ props.name }>{ props.name.toUpperCase() }:</label>
            <input type="text" value={ props.value } id={ props.name } onChange={ props.onchange } />
        </div>
    )
}
