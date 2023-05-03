export default function FoodCard(props) {

    const triggerEdit = () => {
        console.log('trigger edit for ', props.item.id);
        props.edit(props.item);
    }

    return (
        <div key={props.item.id} className="col-6 col-md-4 col-lg-3 col-xl-2 gx-4 gy-4">
            <div className="p-3 rounded rounded-4 border border-2 shadow shadow-sm" style={{ backgroundColor: props.item.inStock ? 'white' : '#ffd1d3' }} id="compare-one">

                {props.item.image_url &&

                    <div className={props.item.inStock ? "text-center border rounded rounded-3" : "text-center"} >

                        {props.item.image_url && <img className="card-img-top card-img-bottom" style={{ width: 125, filter: !props.item.inStock ? "saturate(10%)" : "saturate(100%)", alignItems: "center", outline: 5 }} src={props.item.image_url} alt={props.item.name} />}

                    </div>}

                <h3 className="text-primary fw-bold mb-1" style={{ fontSize: 18, }}>
                    {props.item.name}
                </h3>

                {props.item.inStock ? (
                    <h6>Qty: {props.item.quantity}</h6>
                ) : (
                    <h6 className="fw-bold text-danger">Out of stock</h6>
                )}
                {props.item.allergens.length > 0 ? (
                    <h6>Allergens: {props.item.allergens.join(', ')}</h6>
                ) : (
                    <h6 className="fw-bold text-danger"></h6>
                )}

                {props.isPublic == false && <button className='btn btn-info btn-light  text-center' style={{}} onClick={triggerEdit}> <img style={{ maxWidth: "20px" }} src="https://cdn-icons-png.flaticon.com/512/1827/1827951.png" ></img>
                </button>}

            </div>
        </div>
    );
}