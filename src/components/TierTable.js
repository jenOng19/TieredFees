import React from 'react';

const TierTable = () => {
    return(
        <div>
            <table className='table table-bordered table-striped table-hover'>
                <thead className='thead-dark'>
                    <tr>
                        <th scope='col'>Price Min</th>
                        <th scope='col'>Price Max</th>
                        <th scope='col'>Fee</th>
                        <th scope='col'>Operations</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    )
}

export default TierTable;