import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import APIManager from '../../modules/APIManager';


class ItemCard extends Component {

    state = {
        items: [],
        userId: "",
        itemName: "",
        brand: "",
        size: "",
        color: "",
        price: "",
    }
    getData = () => {
        APIManager.getItems()
        .then((items) => {
            this.setState({
                items: items
            })
        })
    }
    handleDelete = id => {
        APIManager.delete(id)
        .then(() => this.props.getData());
      }
    // onAddClick = () => {
    //     const newGroupUser = {
    //         groupId: this.props.groupId,
    //         userId: this.props.users.id
    //     }
    //     APIManager.post(newGroupUser)
    //     .then(() => this.props.updateCurrentGroupUserState())
    // }
  render() {
    return (
      <div className="itemCardContainer">
        <div className="itemCardContent">
        <h2>{this.props.item.itemName}</h2>
        </div>
        <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>{this.props.item.itemName}</CardTitle>
          <CardSubtitle>{this.props.item.itemName}</CardSubtitle>
          <CardText>{this.props.item.itemName}</CardText>
          <Button>Buy</Button>
        </CardBody>
      </Card>
      </div>
    );
  }
}
export default ItemCard;