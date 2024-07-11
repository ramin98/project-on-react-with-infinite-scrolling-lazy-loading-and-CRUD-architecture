export const initialState = {
  items: [],
  displayedItems: [], 
  loading: false,
  error: null,
  page: 1,
  itemsPerPage: 20,  
};

export const itemReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_ITEMS_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_ITEMS_SUCCESS':
      return {
        ...state,
        loading: false,
        items: action.payload,
        displayedItems: action.payload.slice(0, state.itemsPerPage),
        page: 1
      };
    case 'FETCH_MORE_ITEMS':
      const nextPage = state.page + 1;
      const newDisplayedItems = state.items.slice(0, nextPage * state.itemsPerPage);
      return {
        ...state,
        displayedItems: newDisplayedItems,
        page: nextPage
      };
    case 'FETCH_ITEMS_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'ADD_ITEM':
      console.log(action.payload)
      return { 
        ...state, 
        items: [...state.items, action.payload],
        displayedItems: [...state.displayedItems, action.payload]
      };
    case 'UPDATE_ITEM':
      return {
        ...state,
        items: state.items.map(item => item.id === action.payload.id ? action.payload : item),
        displayedItems: state.displayedItems.map(item => item.id === action.payload.id ? action.payload : item)
      };
    case 'DELETE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
        displayedItems: state.displayedItems.filter(item => item.id !== action.payload)
      };
    case 'FILTER_ITEMS':
      return {
        ...state,
        displayedItems: state.items.filter(item =>
          item.title.startsWith(action.payload) ||
          item.albumId === action.payload
        )
      };
    default:
      return state;
  }
};
