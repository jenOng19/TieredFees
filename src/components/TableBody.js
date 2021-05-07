import React from 'react';

const TableBody = (props) => {
    return (
        <tr>
            <td>{props.min}</td>
            <td>{props.max}</td>
            <td>{props.fee}</td>
            <td>
                <button onClick={() => props.delete(props.id)} className='btn btn-danger'>Delete</button>
            </td>
        </tr>
    );
}

export default TableBody;