import React from 'react'

const AddCar = () => {
    return (
        <div className="col-12 mt-3 p-3 shadow cardAdd bg-white rounded-3">
            <h2 className="text-center p-1">Add Car</h2>
            <div className="row">
                <div className="col-sm-9">
                <div class="input-group mb-2">
                    <span class="input-group-text" id="inputGroup-sizing-default">
                    Title
                    </span>
                    <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    />
                </div>
                </div>
                <div className="col-3">
                <div class="input-group mb-2">
                    <span class="input-group-text">$</span>
                    <input
                    type="text"
                    class="form-control"
                    aria-label="Amount (to the nearest dollar)"
                    />
                </div>
                </div>
            </div>
            <div class="input-group mb-2">
                <span class="input-group-text" id="inputGroup-sizing-default">
                Image URL
                </span>
                <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                />
            </div>
            <div class="input-group mb-2">
                <span class="input-group-text">description</span>
                <textarea
                class="form-control"
                aria-label="With textarea"
                ></textarea>
            </div>
            <div className="d-flex justify-content-end">
                <div className="btn btn-primary px-5">Add</div>
            </div>
        </div>
    )
}

export default AddCar