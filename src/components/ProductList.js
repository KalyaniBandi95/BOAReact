import React from 'react'
import products from './Products.json';
import ProductCard from './ProductCard';

const ProductList = props =>{
    let {data: products} = props 
    return (
        <div>
            <div>
                <div>
                    <h3>Products</h3>
                </div>
            </div>
            <div>
                {products.map((product) => <ProductCard key = {product.sku} {...product}/>)}
            </div>
        </div>
    )
}

const ProductSearch = WrappedComponent => {
    return class extends React.Component {
      state = {
        searchTerm: ''
      };
      handleSearch = event => {
        this.setState({ searchTerm: event.target.value });
      };
  
      render() {
        let { searchTerm } = this.state;
        return (
          <div>
            <div>
              <input
                onChange={this.handleSearch}
                value={searchTerm}
                type="text"
                placeholder="Search"
              />
            </div>
            <WrappedComponent searchTerm={searchTerm} />
          </div>
        );
      }
    };
  };
  
  const ProductsListWithSearch = ProductSearch(ProductsList);
  
  function App() {
    return (
      <div className="App">
        <ProductsListWithSearch />
      </div>
    );
  }

export default ProductList