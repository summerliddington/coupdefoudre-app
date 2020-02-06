import React, { Component } from 'react';
import APIManager from '../../modules/APIManager';
import './AddItem.css'


class AddItem extends Component {
    state = {
        items: [],
        itemName: "",
        brand: "",
        size: "",
        color: "",
        imageURL: "",
        userId: "",
        loadingStatus: true,
    };
    currentUserId = parseInt(sessionStorage.getItem("userId"))

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    constructNewItem = evt => {
        evt.preventDefault();
        if (this.state.itemName === "") {
            window.alert("Please input name of item");
        } else {
            this.setState({ loadingStatus: true });
        const newItem = {
                itemName: this.state.itemName,
                brand: this.state.brand,
                size: this.state.size,
                color: this.state.color,
                imageURL: this.state.imageURL,
                userId: this.currentUserId
            };
        APIManager.post(newItem)
            .then((res) => this.props.history.push(`/newItem     /${res.id}`));
        }
    };

    render(){

        return(
            <>
            <div className="backgroundContainer">
            <form className="formDiv">
                    <div className="inputDiv">
                        <label className="group_name" htmlFor="group_name">Name: </label>
                        <input type="text" required onChange={this.handleFieldChange} id="group_name" placeholder="Collective Name"/>

                    </div>
                    <div>
                        <button
                        type="button" className="submit"
                        onClick={this.constructNewGroup}
                        >Submit</button>
                    </div>
            </form>
            </div>
        </>
        )
    }
}

export default AddItem