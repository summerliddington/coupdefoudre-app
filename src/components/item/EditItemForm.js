import React, { Component } from "react"
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import APIManager from '../../modules/APIManager';



class EditItemForm extends Component {

      state = {
        // items: [],
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
                id: this.props.match.params.itemId,
                price: this.state.price,
                itemName: this.state.itemName,
                brand: this.state.brand,
                size: this.state.size,
                color: this.state.color,
                description: this.state.description,
                imageURL: this.state.imageURL,
                userId: parseInt(this.state.userId)
      };

      APIManager.update(editedItem)
      .then(() => this.props.history.push(`/item`))
    }

    componentDidMount() {
        APIManager.get(`items`,this.props.match.params.itemId)
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
              // users: allItems,
              loadingStatus: false,
            });
        });

}

    render() {
      return (
        <>
        <div className="itemFormContainer">
        <Form>
            <FormGroup row>
                    <Label for="imageURL" sm={2}>imageURL</Label>
                    <Col sm={10}>
                    <Input onChange={this.handleFieldChange} type="imageURL" name="imageURL" id="imageURL" />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label for="price" sm={2}>Price</Label>
                    <Col sm={10}>
                    <Input onChange={this.handleFieldChange} type="price" name="price" id="price" placeholder={this.state.price} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="Brand" sm={2}>Brand</Label>
                    <Col sm={10}>
                    <Input onChange={this.handleFieldChange} type="brand" name="brand" id="brand" value={this.state.brand} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="itemName" sm={2}>Style Name</Label>
                    <Col sm={10}>
                    <Input onChange={this.handleFieldChange} type="itemName" name="itemName" id="itemName" value={this.state.itemName}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="color" sm={2}>Color</Label>
                    <Col sm={10}>
                    <Input onChange={this.handleFieldChange} type="colorPicker" name="colorPicker" id="color"value={this.state.color} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="size" sm={2}>Size</Label>
                    <Col sm={10}>
                    <Input onChange={this.handleFieldChange} type="size" name="size" id="size" value={this.state.size}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="description" sm={2}>Description</Label>
                    <Col sm={10}>
                    <Input onChange={this.handleFieldChange} type="description" name="description" id="description"value={this.state.description} />
                    </Col>
                </FormGroup>
                    <Button onClick={this.updateExistingItem}>Submit</Button>
                </Form>
            </div>
                {/* {this.state.employees.map(employee =>
                  <option key={employee.id} value={employee.id}>
                    {employee.name} */}

        </>
      );
    }
}

export default EditItemForm