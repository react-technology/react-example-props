import React, { Component } from 'react'

class Product extends Component {
    render() {
    
        return (
            <div>

                <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div class="thumbnail">
                        <img src={this.props.image} alt="Iphone X" />
                        <div class="caption">
                            <h3>{this.props.children}</h3>
                            <p>
                                {this.props.price}
                            </p>
                            <p>
                                <a href="#" class="btn btn-primary">Mua Hàng</a>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Product;