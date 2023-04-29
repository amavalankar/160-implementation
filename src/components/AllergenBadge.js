import { useState } from 'react';
import { XCircleFill } from'react-bootstrap-icons'

export default function AllergenBadge(props) {

    const handleClick = (e) => {
        e.preventDefault();
        console.log('oooyu ', props.label);

        props.callback(props.label);
    }

    return (
        <span class='badge rounded-pill text-bg-secondary fs-6 fw-normal px-2 m-1'>
            {props.label} <a onClick={handleClick} ><XCircleFill /></a>
        </span>
    );
}