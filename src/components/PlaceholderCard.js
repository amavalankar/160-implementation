import 'bootstrap/dist/css/bootstrap.min.css';

export default function PlaceholderCard() {
    return (
       <div className="col-6 col-md-3 gx-4">
            <div className="p-3 rounded rounded-4 border border-2" id="compare-one">
                <h2 className="text-primary placeholder-glow fw-bold mb-1">
                    <span className="placeholder col-12 bg-primary"></span>
                </h2>
                <h4>
                    <span className="placeholder col-8"></span>
                </h4>
            </div>
        </div> 
    );
}