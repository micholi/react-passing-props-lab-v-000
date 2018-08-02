import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({currentFilter, onUpdateFilter}) => {
  return (
    <div className="fruit-basket">
      <Filter handleChange={onUpdateFilter} />
      <FilteredFruitList
      filter={currentFilter} />
    </div>
  )
}


  FruitBasket.defaultProps = {
    fruit: [],
    filters: [],
    currentFilter: null,
    updateFilterCallback: function() {}
  }

export default FruitBasket;
