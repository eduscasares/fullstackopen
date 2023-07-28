import React from 'react';

const Filter = ( {searchQuery, handleChangeSearch} ) => {
    return (
        <div>
        filter shown with:
        <input
          type='text'
          placeholder='search...'
          value={searchQuery}
          onChange={handleChangeSearch}
        />
      </div>
    );
}

export default Filter;
