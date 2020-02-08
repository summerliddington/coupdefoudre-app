import React, { Component } from 'react'
import ItemCard from './ItemCard'
import APIManager from '../../modules/APIManager'


    class ItemList extends Component {
        state = {
            items: [],
            // itemName: "",
            // brand: "",
            // size: "",
            // color: "",
            // imageURL: "",
            // userId: ""
        }
        getData = () => {
            APIManager.getItems()
            .then((items) => {
                this.setState({
                    items: items
                })
            })
        }
    componentDidMount(){
        // APIManager.getItems()
        //     .then((items) => {
        //         this.setState({
        //             items: items
        //         })
        //     })
        this.getData()
        }

        handleDelete = (id) => {
            APIManager.delete(id)
            .then(() => this.getData());
          }

    render(){
        console.log(this.props.userId)
        return(
            <>
            <div className="itemsListContainer">
                {this.state.items.map(item =>
                    <ItemCard
                        key={item.id}
                        item={item}
                        userId={this.props.userId}
                        getData={this.getData}
                        handleDelete={this.handleDelete}
                        {...this.props}/>)}
            </div>
            </>
        )
    }
}

export default ItemList