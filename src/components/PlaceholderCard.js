import 'bootstrap/dist/css/bootstrap.min.css';

export default function PlaceholderCard() {
    return (
       <div className="col-6 col-md-4 col-lg-3 col-xl-2 gx-4 gy-4">
            <div className="p-3 rounded rounded-4 border border-2 shadow shadow-sm" id="compare-one">
                <h1 className="display-1 placeholder-glow fw-bold mb-1">
                    <span className="placeholder col-12"></span>
                </h1>
                <h2 className="text-primary placeholder-glow fw-bold mb-1">
                    <span className="placeholder col-8 bg-primary"></span>
                </h2>
                <h4>
                    <span className="placeholder col-6"></span>
                </h4>
            </div>
        </div> 
    );
}