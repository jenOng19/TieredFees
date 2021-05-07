import React from 'react';

const TierForm = () => {

    const handleInputChange = () => {

    }

    const handleSubmit = () => {

    }

    return(
        <form className="form-group" onSubmit = {handleSubmit}>
            <h1>Add Tier</h1>
            <div>
                <label className="sr-only" htmlFor="inlineFormInputGroupUsername">Min Price</label>
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text">$</div>
                    </div>
                    <input type="number" className="form-control" name = "min" value={''} id="inlineFormInputGroupUsername" placeholder="Min Price" onChange={handleInputChange}/>
                </div>
            </div>

            <div>
                <label className="sr-only" htmlFor="inlineFormInputGroupUsername">Max Price</label>
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text">$</div>
                    </div>
                    <input type="number" className="form-control" name="max" value={''} id="inlineFormInputGroupUsername" placeholder="Max Price" onChange={handleInputChange}/>
                </div>
            </div>

            <div>
                <label className="sr-only" htmlFor="inlineFormInputGroupUsername">Fee</label>
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text">$</div>
                    </div>
                    <input type="number" className="form-control" name="fee" value={''} id="inlineFormInputGroupUsername" placeholder="Fee" onChange={handleInputChange}/>
                </div>
            </div>
            <div className="text-left">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    )
}

export default TierForm;