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
            .then((res) => this.props.history.push(`/AddItem/${res.id}`));
        }
    };

    render(){

        return(
            <>
            <div className="itemFormContainer">
            <Form>
                <FormGroup row>
                    <Label for="price" sm={2}>Price</Label>
                    <Col sm={10}>
                    <Input type="price" name="price" id="price" placeholder="$" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="Brand" sm={2}>Brand</Label>
                    <Col sm={10}>
                    <Input type="brand" name="brand" id="brand" placeholder="Brand" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="styleName" sm={2}>Style Name</Label>
                    <Col sm={10}>
                    <Input type="style" name="style" id="style" placeholder="Style"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleSelectMulti" sm={2}>Select Multiple</Label>
                    <Col sm={10}>
                    <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                    <option>XS</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                    </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleText" sm={2}>Text Area</Label>
                    <Col sm={10}>
                    <Input type="textarea" name="text" id="exampleText" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleFile" sm={2}>File</Label>
                    <Col sm={10}>
                    <Input type="file" name="file" id="exampleFile" />
                    <FormText color="muted">
                        This is some placeholder block-level help text for the above input.
                        It's a bit lighter and easily wraps to a new line.
                    </FormText>
                    </Col>
                </FormGroup>
                

                    <Button onClick={this.constructNewItem}>Submit</Button>
                </Form>
                            {/* <CardTitle> onChange={this.handleFieldChange}</CardTitle>
                            <CardSubtitle>onChange={this.handleFieldChange}</CardSubtitle>
                            <CardSubtitle>onChange={this.handleFieldChange}</CardSubtitle>
                            <CardSubtitle>onChange={this.handleFieldChange}</CardSubtitle>
                            <CardSubtitle>onChange={this.handleFieldChange}</CardSubtitle>
                            <CardText>onChange={this.handleFieldChange}</CardText> */}
            </div>
        </>
        )
    }
}

export default AddItem