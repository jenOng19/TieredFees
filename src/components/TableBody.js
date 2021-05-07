import React from 'react';

const TableBody = (props) => {
    return (
        <tr>
            <td>{props.min}</td>
            <td>{props.max}</td>
            <td>{props.fee}</td>
            <td>
                <button className='btn btn-danger'>Delete</button>
            </td>
        </tr>
    );
}

export default TableBody;