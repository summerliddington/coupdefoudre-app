import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import APIManager from '../../modules/APIManager';
import './AddItem.css'


class AddItem extends Component {
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
    currentUserId = parseInt(sessionStorage.getItem("credentials"))

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    componentDidMount = () => {
        this.setState ({
            userId: this.currentUserId
        })
    }
    constructNewItem = evt => {
        evt.preventDefault();
        // if (this.state.itemName === "") {
        //     window.alert("Please input name of item");
        // } else
            this.setState({ loadingStatus: true });
        const newItem = {
                price: this.state.price,
                itemName: this.state.itemName,
                brand: this.state.brand,
                size: this.state.size,
                color: this.state.color,
                description: this.state.description,
                imageURL: this.state.imageURL,
                userId: this.currentUserId
            };
        APIManager.post(newItem)
            .then(() => this.props.history.push(`/`));
    };

    render(){

        return(
            <>
            <div className="itemFormContainer">
            <Form>
                <FormGroup row>
                    <Label for="price" sm={2}>Price</Label>
                    <Col sm={10}>
                    <Input onChange={this.handleFieldChange} type="price" name="price" id="price" placeholder="$" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="Brand" sm={2}>Brand</Label>
                    <Col sm={10}>
                    <Input onChange={this.handleFieldChange} type="brand" name="brand" id="brand" placeholder="Brand" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="itemName" sm={2}>Style Name</Label>
                    <Col sm={10}>
                    <Input onChange={this.handleFieldChange} type="itemName" name="itemName" id="itemName" placeholder="Item Name"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="color" sm={2}>Color</Label>
                    <Col sm={10}>
                    <Input onChange={this.handleFieldChange} type="colorPicker" name="colorPicker" id="color" placeholder="Color" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="size" sm={2}>Size</Label>
                    <Col sm={10}>
                    <Input onChange={this.handleFieldChange} type="size" name="size" id="size" placeholder="Size"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="description" sm={2}>Description</Label>
                    <Col sm={10}>
                    <Input onChange={this.handleFieldChange} type="description" name="description" id="description" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleFile" sm={2}>File</Label>
                    <Col sm={10}>
                    <Input onChange={this.handleFieldChange} type="file" name="file" id="exampleFile" />
                    <FormText color="muted">
                        This is some placeholder block-level help text for the above input.
                        It's a bit lighter and easily wraps to a new line.
                    </FormText>
                    </Col>
                </FormGroup>

                    <Button onClick={this.constructNewItem}>Submit</Button>
                </Form>
            </div>
        </>
        )
    }
}

export default AddItem