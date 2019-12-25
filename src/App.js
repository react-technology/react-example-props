import React, { Component } from 'react';
import './App.css';
import Product from './component/Product'

class App extends Component {
  render() {

    var products = [
      {
        id: 1,
        name: "Iphone X",
        price: "20.999.999",
        image: "https://didongthongminh.vn/upload_images/2017/10/iphoneX-silver.png",
        status: true
      },
      {
        id: 2,
        name: "Galaxy Note 10",
        price: "25.999.999",
        image: "https://cdn.fptshop.com.vn/Uploads/Originals/2019/8/8/637008711602926121_SS-note-10-pl-den-1-1.png",
        status: true
      },
      {
        id: 3,
        name: "Vsmart Live",
        price: "2.999.999",
        image: "https://cdn.tgdd.vn/Products/Images/42/209553/vsmart-live-6gb-white-400x460.png",
        status: false
      }
    ]

    let elements = products.map((product, index) => {
      if (product.status) {
        return (
          <Product
            key={product.id}
            price={product.price}
            image={product.image}
          >{product.name}</Product>

        );
      }
    })

    return (
      <div>
        <nav className="navbar navbar-inverse">
          <a className="navbar-brand" href="#">Title</a>
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
          </ul>
        </nav>
        <div className="container">

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {elements}
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
