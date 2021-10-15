import React from 'react'

export default function Decoration(props) {
    return (
        <div className="decoration" style={{top:props.top, left:props.left, borderColor:props.color}}></div>  
    )
}
