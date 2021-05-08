import React from 'react';
import TableBody from './TableBody';

const TierTable = (props) => {
    const {tiers, validate} = props;
    let message;
    let tierRows;
    if(tiers.length < 1) {
        message = 'No Tiers Recorded';
    }else {
        tierRows = tiers.map(tier => {
            return <TableBody key={tier.id} {...tier} delete={props.delete}/>
        })
    }
    return(
        <div>
            <table className='table table-bordered table-striped table-hover'>
                <thead className='thead-dark'>
                    <tr>
                        <th scope='col'>Price Range</th>
                        <th scope='col'>Fee</th>
                        <th scope='col'>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {tiers.length > 0 ? tierRows : null}
                </tbody>
            </table>
            {tiers.length > 0 ? null : message}
            {
                tiers.length > 0
                ?<button onClick = {validate} type="submit" className="btn btn-primary">Submit Tiers</button>
                :null
            }
        </div>
    )
}

export default TierTable;