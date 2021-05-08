import React from 'react';

const TableBody = (props) => {
    return (
        <tr>
            <td>{"$"+props.min.toFixed(2)}{props.max?"-$"+ props.max.toFixed(2): "+"}</td>
            <td>{"$"+props.fee.toFixed(2)}</td>
            <td>
                <button onClick={() => props.delete(props.id)} className='btn btn-danger'>Delete</button>
            </td>
        </tr>
    );
}

export default TableBody;