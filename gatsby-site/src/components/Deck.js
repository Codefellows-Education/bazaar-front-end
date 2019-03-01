
import React, { Component } from 'react'
import { If, Then, Else } from './conditional';
import '../components/design/layout.scss';
import Card from './Card.js';
import '../components/design/dropdown.css';
import '../components/design/deck.scss';
import Auth from '../auth/auth.js';

import AddProductMutation from '../components/apollo/add-product.js'


class Deck extends Component {
    constructor(props){
        super(props);
          this.state={
            categoryName: false,
            categoryId: false,
            products: [],
            condition: false
        }
      }

    //bug fix
    clickCategory = (name, id) => {
    let filteredProducts = this.props.allProducts.filter(product=>{
        return product.category._id === id;
    });
    this.setState({products: filteredProducts,categoryId: id, categoryName: name, condition: true});
        }

  render() {

    return (
        <>
        <div>
        <div className="dropdown">
          <button className="dropbtn">Categories</button>
          <div className="dropdown-content">
          {this.props.allCategories.map(category=>(
              <span key={category._id} onClick={()=> this.clickCategory(category.name, category._id)}>{category.name}</span>
          ))}
          </div>
        </div>
        <div className="card-deck">
       
        <If condition={this.state.categoryId}>
          <Then>
                <section className = "deck">
                {this.state.products.map( product => (
                    <Card key={product._id} content={product} />
                ))}
                </section>
                
                <Auth capibility="create">
                <section>
                    <AddProductMutation categoryId={this.state.categoryId}/>
                </section>
                </Auth>

          </Then>
            <Else condition={this.state.categoryId}>
                <div className="imgContainer">
                  <img alt='featured product' className="featuredImage" src="https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2200&q=80" />
                </div>
            </Else>
        </If>
      

        </div>

        </div>
      </>
    )
  }
}



export default Deck;
