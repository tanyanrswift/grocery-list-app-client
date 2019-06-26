import React from 'react';
import './style/item-update.css';

export default function ItemUpdate(props){
    return <form class='update-form' onSubmit={props.onSubmit}>
        <h4 class='edit-header'>Edit Item</h4>
        {/* <label>
            <input type="checkbox" name='purchased' checked />
        </label> */}
        {/* <select>
            <option value='purchased'>Mark as Purchased</option>
            <option selected value='unpurchased'>Mark as Unpurchased</option>
        </select> */}
        <div>
            <input type='text' name='name' placeholder='Enter New Item Name'/>
        </div>
        <div>
            <input type="submit" value="Submit" />
        </div>
    </form>
}