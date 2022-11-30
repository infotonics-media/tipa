import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, us, useSelector } from 'react-redux';
import PartnerData from '../components/PartnerData';
import PartnerStrip from '../components/PartnerStrip';
import { partnerUpdate } from '../store/Actions/Action'

const Partner = () => {
  const [dataIn, setDataIn] = useState(0);
  // const [partnerdetails, setPartnerdetails] = useState([])
  const partnerdetails = useSelector(state => state.FetchApi.Partners)
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   axios.get('https://backend.theindianpoloawards.com/partners/')
  //     .then((res) => {
  //       dispatch(partnerUpdate(res.data))
  //       setPartnerdetails(res.data)
  //       // console.log(res.data)
  //     })
  //     .catch(err => console.log(err))

  // }, [])

  const partnerdata = partnerdetails.map((data) => (
    <PartnerData logo={data.logo} desc={data.desc} slug={data.slug} />
  ));
  return (
    <div className="partner">
      <div className="heading italiana">Partners</div>
      <div className="top">
        <div
          onClick={() =>
            setDataIn((prev) => {
              if (prev > 0) {
                return prev - 1;
              } else if (prev === 0) {
                return partnerdata.length - 1;
              }
              return prev;
            })
          }
          className="left"
        >
          <img src={require('../assets/img/leftarrow.png')} alt="" />
        </div>
        <div className="main">{partnerdata[dataIn]}</div>
        <div
          onClick={() =>
            setDataIn((prev) => {
              if (prev < partnerdata.length - 1) {
                return prev + 1;
              } else if (prev === partnerdata.length - 1) {
                return 0;
              }
              return prev;
            })
          }
          className="right"
        >
          <img
            style={{ cursor: 'pointer' }}
            src={require('../assets/img/leftarrow.png')}
            alt=""
          />
        </div>
      </div>
      <PartnerStrip title={false} />
      
    </div>
  );
};

export default Partner;
