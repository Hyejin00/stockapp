import axios from 'axios';

const API_URL = 'https://finnhub.io/api/v1/';
const API_KEY = 'bqi7mrfrh5rcatj3upm0';

const getGeneralNews = async()=>{
  return await axios.get(API_URL+'news',{
    params:{
      token:API_KEY,
      category:'general',
      minId:10000
    }
  })
}

const getPrice = async(symbol)=>{
  return await axios.get(API_URL+'quote',{
    params:{
      token:API_KEY,
      symbol:symbol
    }
  })
}

export function fetchGeneralNews(){
  return (dispatch)=>{
    dispatch({type:'START_LOADING'});
    getGeneralNews().then((res)=>{
      dispatch({
        type:'FETCH_GENNEWS',
        payload:res.data
      });
      dispatch({
        type:'END_LOADING'
      });
    });
  }
}

export function fetchPrice (symbol){
  return (dispatch)=>{
    dispatch({type:'START_LOADING'});
    getPrice(symbol).then((res)=>{
      dispatch({
        type:'FETCH_PRICE',
        payload:res.data
      });
      dispatch({
        type:'END_LOADING'
      });
    });
  }
}

export function fetchMyList(symbols){
  return (dispatch) => {
    dispatch({type:'START_LOADING'});
    Promise.all(
      symbols.map(async (symbol)=>{
        return {
          symbol,
          price: (await getPrice(symbol)).data
        }
      })
    ).then((res)=>{
      console.log(res);
      dispatch({
        type:'FETCH_LIST',
        payload:res
      });
      dispatch({
        type:'END_LOADING'
      });
    })
  }
}