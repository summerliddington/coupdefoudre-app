import React, { Component } from 'react'
    import ItemCard from '../item/ItemCard'
    import APIManager from '../../modules/APIManager'
    import {withRouter} from 'react-router-dom'

    class MyItemsList extends Component {

        state = {
            items: [],
            userId: ""
        }

        currentUserId = (sessionStorage.getItem("credentials"))


        handleDelete = (id) => {
            APIManager.delete(id)
            .then(() => this.getData());
          }


        getData = () => {
            APIManager.getWithUserId(this.currentUserId)
            .then((items) => {
                this.setState({
                    items: items
            })
        })
    }

    componentDidMount(){
        APIManager.getWithUserId(this.currentUserId)
        .then((items) => {
            this.setState({
                items: items
            })
        })
    }

    render(){

        return(
            <>
            <div className="myListOfItems">
                <p>Your List of Items for Sale</p>
                {this.state.items.map(item =>
                    <ItemCard
                        key={item.id}
                        item={item}
                        userId={this.state.userId}
                        getData={this.getData}
                        handleDelete={this.handleDelete}
                        {...this.props}/>)}
            </div>
            </>
        )
    }
}

export default withRouter(MyItemsList)