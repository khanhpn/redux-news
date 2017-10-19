import React, { Component } from 'react'
import {connect} from 'react-redux';

class FoodList extends Component {
  createFoodListItems() {
      let listItems = this.props.foods.map(
          (eachFood) => {
              return(
                  <li key={eachFood.id}>{eachFood.name}</li>
              );
          }
      );
      return listItems;
  }
  render() {
    return (
      <div>
        <ul>{this.createFoodListItems}</ul>        
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        foods: state.foods
    };
}

let FoodContainer = connect(mapStateToProps)(FoodList);
export default FoodContainer;