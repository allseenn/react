export const addProduct = (product) => ({
    type: 'ADD_PRODUCT',
    payload: product,
  });
  
  export const deleteProduct = (id) => ({
    type: 'DELETE_PRODUCT',
    payload: id,
  });
  
  export const updateProduct = (id, updates) => ({
    type: 'UPDATE_PRODUCT',
    payload: { id, updates },
  });
  
  export const toggleAvailability = (id) => ({
    type: 'TOGGLE_AVAILABILITY',
    payload: id,
  });
  