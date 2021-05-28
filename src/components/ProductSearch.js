import React from "react";

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

  export default ProductSearch