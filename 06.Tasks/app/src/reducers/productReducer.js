const initialState = [
    { id: 1, name: 'Сгущенка', description: 'Клинский молочный комбинат', price: 100, available: true },
    { id: 2, name: 'Молоко', description: 'Домик в деревне', price: 500, available: false },
  ];
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_PRODUCT':
        return [...state, action.payload];
  
      case 'DELETE_PRODUCT':
        return state.filter(product => product.id !== action.payload);
  
      case 'UPDATE_PRODUCT':
        return state.map(product =>
          product.id === action.payload.id ? { ...product, ...action.payload.updates } : product
        );
  
      case 'TOGGLE_AVAILABILITY':
        return state.map(product =>
          product.id === action.payload ? { ...product, available: !product.available } : product
        );
  
      default:
        return state;
    }
  };
  
  export default productReducer;
  