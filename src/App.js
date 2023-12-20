import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'animate.css';
import { Helmet } from 'react-helmet'
import './assets/scss/style.css';
import './assets/css/modal-video.css';
import { createStore } from "redux";
import RootReducer from "./store/Reducer";
import { Provider } from "react-redux";
import Routes from './Routes';
import { useDispatch } from "react-redux";
import axios from 'axios'
import { blogUpdate } from './store/Actions/Action'
import GoogleAnalytics from './GoogleAnalytics';
import { partnerUpdate, inMotion } from './store/Actions/Action'


const App = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    axios.get('https://backend.theindianpoloawards.com/partners/all-partners/')
      .then((res) => {
        const newres = res.data
        const newArrv = newres.pop()
        newres.splice(1, 0, newArrv);
        dispatch(partnerUpdate(newres))
        // console.log(res.data)
      })
      .catch(err => console.log(err))

  }, [])
  useEffect(() => {
    axios.get('https://backend.theindianpoloawards.com/blog/')
      .then((response) => {

        dispatch(blogUpdate(response.data?.results))
      }).catch(err => {
        console.log("got an error")
      })
  }, [])

  useEffect(() => {
    axios.get('https://backend.theindianpoloawards.com/in_motion/')
      .then((res) => {
        dispatch(inMotion(res.data))
      }).catch(err => {
        console.log(err)
      })
  }, [])
  return (
    <BrowserRouter>

      <div className="App">
        <GoogleAnalytics />
        <Helmet>
          <meta name="description" content="The Indian Polo Awards" />
          <meta name="theme-color" content="#CDBO71" />
        </Helmet>
        <Routes />
      </div>
    </BrowserRouter>
  );
};

export default App;
