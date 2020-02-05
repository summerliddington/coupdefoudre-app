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

    componentDidMount(){
        APIManager.getItems()
            .then((items) => {
                this.setState({
                    items: items
                })
            })
        }

    render(){
        return(
            <>
            <div className="itemsListContainer">
                {this.state.items.map(item =>
                    <ItemCard
                        key={item.id}
                        item={item}
                        userId={this.state.userId}
                        getData={this.getData}
                        {...this.props}/>)}
            </div>
            </>
        )
    }
}

export default ItemList