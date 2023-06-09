/* eslint-disable */
import { useState } from 'react';
import FilterModal from './FilterModal';

export default function SearchFilter(props) {
  const [showFilterModal, setShowFilterModal] = useState(false);
  

    const [items, setItems] = useState([]);
    const [query, setQuery] = useState(props.value);
    const handleShowFilterModal = () => {
        if (!showFilterModal) {
          setShowFilterModal(true);
        }
      }
    const filtered = items
    .filter(item => item !== null && item.name)
    .filter(item => {
      const query = query.toLowerCase();
      return (
        item.name?.toLowerCase().includes(query) || item.allergens.includes(query)
      );
    });

    function updateValue(event) {
        setQuery(event.target.value)
        props.callback(event.target.value);
    }

    return (
        <div class="container-fluid">
            <form class="d-flex" onSubmit={e => e.preventDefault()}>
                <input class="form-control form-control-lg me-2 " type="text" value={query} onChange={updateValue} placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-primary btn-lg m-1" style={{ backgroundColor: "#42a0bd", borderColor: "#96c4d4" }} onClick={handleShowFilterModal}>
              Filter
            </button>
            <button className="btn btn-primary btn-lg m-1" style={{ backgroundImage: "url(https://static.thenounproject.com/png/987-200.png)", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "contain", width: 100, backgroundColor: "#42a0bd", borderColor: "#96c4d4" }}>
            </button>
            
            {/* <img src="https://static.thenounproject.com/png/987-200.png" style={{ maxHeight: 40, marginTop: 5, marginLeft: 15, paddingLeft: "10px" }} alt="Filter"></img> */}
                {/* <img src="https://cdn1.iconfinder.com/data/icons/round-web-icons/100/rwi-44-512.png" style={{marginLeft: 20, maxHeight: 40 }} alt="Filter"></img> */}
            </form>
            <FilterModal showModal={showFilterModal} onClose={() => setShowFilterModal(false)} />
        </div>
    );
}