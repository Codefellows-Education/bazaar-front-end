import React, { Component } from 'react';
import Modal from 'react-modal';
import Auth from '../auth/auth';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

export class Card extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  // editItem = (id) => {
  //   //edit the item
  // }
  
  // deleteItem = (id) => {
  //   let newProducts = [];
  //   console.log('my props content', this.props.content);
  //   for (let product in this.props){
  //     if(product.content[id] !== id){
  //       newProducts.push(product.content);
  //     }
  //   }
  
  //   this.props.updateProducts(newProducts);
  // }


  render() {
    console.log('hello from CARDSSSS', this.props);
    return (
      <div>
        <div>{this.props.content.name}</div>
        <img src={this.props.content.image} style={{ width: "200px", height: '200px' }} />
        <div>{this.props.content.description}</div>


        <button onClick={() => this.setModalVisible(!this.state.modalVisible)}>Learn More</button>
        <Modal
          isOpen={this.state.modalVisible}
          onRequestClose={this.modalVisible}
          style={customStyles}
          contentLabel="Example Modal">
          <h1>{this.props.content.name}</h1>
          <img src={this.props.content.image} style={{ width: "500px", height: '500px' }} />
          <div>{this.props.content.description}</div>
          <div>{this.props.content.price}</div>
          {/* <Auth capibility="update">
            <button className='editButton' onSubmit={this.editItem(this.props.content.id)}>Edit Product</button>
          </Auth>

          <Auth capibility="delete">
            <button className='deleteButton' onSubmit={this.deleteItem(this.props.content.id)}>Delete Product</button>
          </Auth> */}
          {/* <button onClick = {()=>this.addToCart(this.props.content.name, this.props.content._id)}>Add To Cart</button> */}
          <button onClick={() => this.setModalVisible(!this.state.modalVisible)}>CLOSE!</button>
        </Modal>
      </div>
    )
  }
}

export default Card
