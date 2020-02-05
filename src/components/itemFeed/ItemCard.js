import React, { Component } from 'react';
import { Card, CardBody, Button, CardTitle, CardSubtitle, CardText, CardImg } from 'reactstrap';
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
        <Card top width="180px" body outline color="secondary">
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>{this.props.item.price}</CardTitle>
          <CardSubtitle>{this.props.item.brand}</CardSubtitle>
          <CardSubtitle>{this.props.item.itemName}</CardSubtitle>
          <CardSubtitle>{this.props.item.size}</CardSubtitle>
          <CardSubtitle>{this.props.item.color}</CardSubtitle>
          <CardText>{this.props.item.description}</CardText>
          <Button>Buy</Button>
        </CardBody>
      </Card>
      </div>
    );
  }
}
export default ItemCard;