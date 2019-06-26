import React from 'react';

export default function ItemForm(props){
    return <form onSubmit={props.onSubmit}>
        <h2 class='item-header'>Add A New Item</h2>
        {/* <label>
            <input type="checkbox" name='purchased' checked />
        </label> */}
        {/* <select>
            <option value='purchased'>Mark as Purchased</option>
            <option selected value='unpurchased'>Mark as Unpurchased</option>
        </select> */}
            <input type='text' name='name' placeholder='Enter Item Name'/>
            <input type="submit" value="Submit" class="submit-button" />
            <img src={require('./list-icon.png')} class='list-icon' alt="list icon" />
    </form>
}