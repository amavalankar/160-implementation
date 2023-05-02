import { useState } from 'react';

export default function SearchFilter(props) {

    const [query, setQuery] = useState(props.value);

    function updateValue(event) {
        setQuery(event.target.value)
        props.callback(event.target.value);
    }
      
    return (
        <div class="container-fluid">
            <form class="d-flex" onSubmit={e => e.preventDefault()}>
                <input class="form-control form-control-lg me-2 " type="text" value={query} onChange={updateValue} placeholder="Search" aria-label="Search"></input>
                <img src="https://cdn1.iconfinder.com/data/icons/round-web-icons/100/rwi-44-512.png" style={{ maxHeight: 40 }} alt="Filter"></img>
            </form>
        </div>
    );
}