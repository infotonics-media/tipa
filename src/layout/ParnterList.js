import Axios from "axios";
import style from "../assets/css/partnerCards.module.css";
import React, { useEffect } from "react";
import { useState } from "react";
import PartnerCards from "../components/PartnerCards";
import Nav from "./Nav";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function ParnterList() {
  const [partner, setPartner] = useState([]);
  useEffect(() => {
    Axios.get("https://backend.theindianpoloawards.com/partners/all-partners/")
      .then((response) => setPartner(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Nav />
      <div className={style.title}>Partners</div>
      <div className={style.mainbody}>
        {partner.map((item) => (
          <Link to={"/parnterList/" + item.slug}>
            <PartnerCards key={item.id} item={item} />
          </Link>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default ParnterList;
