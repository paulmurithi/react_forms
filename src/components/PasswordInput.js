import React from 'react'

export default function PasswordInput ( props ) {
    return (
        <div>
            <label for={ props.name }>{ props.name.toUpperCase() }:</label>
            <input type="password" value={ props.value } id={ props.name } onChange={ props.onchange } />
        </div>
    )
}