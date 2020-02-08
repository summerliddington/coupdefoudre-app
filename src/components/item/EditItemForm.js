import React, { Component } from "react"
import { Card, CardBody, Button, CardTitle, CardSubtitle, CardText, CardImg } from 'reactstrap';
import APIManager from '../../modules/APIManager';



class EditItemForm extends Component {

      state = {
        items: [],
        price: "",
        itemName: "",
        brand: "",
        size: "",
        color: "",
        description: "",
        imageURL: "",
        userId: "",
        loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    updateExistingItem = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedItem = {
                price: this.state.price,
                itemName: this.state.itemName,
                brand: this.state.brand,
                size: this.state.size,
                color: this.state.color,
                description: this.state.description,
                imageURL: this.state.imageURL,
                userId: this.currentUserId
      };

      APIManager.update(editedItem)
      .then(() => this.props.history.push("/items"))
    }

    componentDidMount() {
      APIManager.getItems()
      // .then(allEmployees => {
      //   AnimalManager.get(this.props.match.params.animalId)
        .then(item => {
            this.setState({
              price: item.price,
              itemName: item.itemName,
              brand: item.brand,
              size: item.size,
              color: item.color,
              description: item.description,
              imageURL: item.imageURL,
              userId: item.userId,
              // employees: allEmployees,
              loadingStatus: false,
            });
        });
    // })
}

    render() {
      return (
        <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="animalName"
                value={this.state.animalName}
              />
              <label htmlFor="animalName">Animal name</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="breed"
                value={this.state.breed}
              />
              <label htmlFor="breed">Breed</label>
              <select
                className="form-control"
                id="employeeId"
                value={this.state.employeeId}
                onChange={this.handleFieldChange}
              >
                {this.state.employees.map(employee =>
                  <option key={employee.id} value={employee.id}>
                    {employee.name}
                  </option>
                )}
              </select>
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingAnimal}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default EditItemForm