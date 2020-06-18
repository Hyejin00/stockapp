import produce from 'immer';

const initalState = {
  loading: false,
  error:null,
  general_news:[],
  my_list:null,
  my_list_symbol:[],
  quote:null,
}

const reducer = produce((state, action)=>{
  switch(action.type){
    case 'START_LOADING':
      state.loading = true;
      break;
    case 'END_LOADING':
      state.loading = false;
      break;
    case 'ERROR':
      state.loading = false;
      state.error = action.payload;
      break;
    case 'CLEAR_ERROR':
      state.error = null;
      break;
    case 'FETCH_GENNEWS':
      state.general_news = action.payload;
      break;
    case 'FETCH_PRICE':
      state.quote = action.payload;
    case 'FETCH_LIST':
      state.my_list = action.payload;
    case 'CHANGE_LIST':
      state.my_list_symbol = action.payload;
    default:
      break;
  }
},initalState);

export default reducer;