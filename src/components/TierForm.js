import React, {useState} from 'react';

const TierForm = (props) => {
    const{add,tiers} = props;
    const[inputs, setInputs] = useState({});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputs(prevState => ({ ...prevState, [name]: parseFloat(value)}));
    }

    const validateTiers = () => {
        const tiersLength = tiers.length;
        const prevTier = tiersLength-1;
        let result = null;
        if(tiersLength>=1){
            if(inputs.min === tiers[prevTier].max+0.01){
                result= true;
            }else{
                result = false;
            }
        }else if(tiersLength === 0 ){
            result =true;
        }
        return result;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const validate = validateTiers();
        if(validate){
            add(inputs);
            setInputs({})
        }else{
            setInputs({});
            alert("There cannot be gaps between the price ranges. Please enter the correct min price.");
        }
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
                    <input type="number" min="0.0" step = "any" className="form-control" name = "min" value={inputs.min|| ''} id="inlineFormInputGroupUsername" placeholder="Min Price" required onChange={handleInputChange}/>
                </div>
            </div>

            <div>
                <label className="sr-only" htmlFor="inlineFormInputGroupUsername">Max Price</label>
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text">$</div>
                    </div>
                    <input type="number" min="0.00" step = "any" className="form-control" name="max" value={inputs.max || ''} id="inlineFormInputGroupUsername" placeholder="Max Price" onChange={handleInputChange}/>
                </div>
            </div>

            <div>
                <label className="sr-only" htmlFor="inlineFormInputGroupUsername">Fee</label>
                <div className="input-group mb-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text">$</div>
                    </div>
                    <input type="number" min="0.00" step = "any" className="form-control" name="fee" value={inputs.fee || ''} id="inlineFormInputGroupUsername" placeholder="Fee" required onChange={handleInputChange}/>
                </div>
            </div>
            <div className="text-left">
                <button type="submit" className="btn btn-primary">Add</button>
            </div>
        </form>
    )
}

export default TierForm;