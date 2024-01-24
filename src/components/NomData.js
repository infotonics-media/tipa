import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
// import { useHistory } from 'react-router-dom';
const NomData = (props) => {
  const [url, setUrl] = useState("")
  useEffect(() => {
    if (props.item) {
      if (props.item.winner !== null) {
        const url = `/award-categories/${props.item.slug}`
        setUrl(url)
      }
    }
  }, [props])
  // const history = useHistory();
  return (
    <div className="nomdata">
      <div className="index">{props.index}</div>
      <div className="bar"></div>
      <div className="htext italiana">{props.item.title}</div>
      <div className="description">{props.item.description.substr(0, 130)}</div>
      <Link to={url.length !== 0 ? url : "/award-categories"} >
        {/* <a> */}
        <div
          className="leftarw"
        >
          <img
            style={{ cursor: 'pointer' }}
            src={require('../assets/img/leftarrow.png')}
            alt=""
          />
        </div>
      </Link>
    </div>
  );
};

export default NomData;
