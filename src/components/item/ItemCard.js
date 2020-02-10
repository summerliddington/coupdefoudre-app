import React, { Component } from 'react';
import { Card, CardBody, Button, CardTitle, CardSubtitle, CardText, CardImg } from 'reactstrap';



class ItemCard extends Component {

    state = {
        items: [],
        // userId: "",
        // itemName: "",
        // brand: "",
        // size: "",
        // color: "",
        // price: "",
        // description: ""
    }


  render() {
    console.log(this.props.item.userId , this.props.userId)
    return (
      <div className="itemCardContainer">
        <Card top="true" width="180px" body outline color="secondary">
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>{this.props.item.price}</CardTitle>
          <CardSubtitle>{this.props.item.brand}</CardSubtitle>
          <CardSubtitle>{this.props.item.itemName}</CardSubtitle>
          <CardSubtitle>{this.props.item.size}</CardSubtitle>
          <CardSubtitle>{this.props.item.color}</CardSubtitle>
          <CardText>{this.props.item.description}</CardText>

            <Button onClick={() => {this.props.history.push(`/item/${this.props.item.id}/edit`)}}>Edit</Button>

            <Button onClick={() => {this.props.handleDelete(this.props.item.id)}}>Delete</Button>

          <Button>Buy</Button>
        </CardBody>
      </Card>
      </div>
    );
  }
}
export default ItemCard;

// {this.props.item.userId === this.props.userId ?
//   <>