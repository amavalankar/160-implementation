import { XCircleFill } from 'react-bootstrap-icons'

export default function AllergenBadge(props) {

    const handleClick = (e) => {
        e.preventDefault();
        props.callback(props.label);
    }

    return (
        <span className='badge rounded-pill text-bg-secondary fs-6 fw-normal px-2 mb-3'>
            {props.label} <a onClick={handleClick} ><XCircleFill /></a>
        </span>
    );
}