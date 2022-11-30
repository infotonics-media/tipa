
import Axios from "axios";
import React, { useEffect, useState } from "react";
import ContactForm from "../components/ContactForm";
import FaqBox from "../components/Faqs";
import Form from "../components/Form";
import Footer from "./Footer";
import Nav from "./Nav";
import style from "../assets/css/faqs.module.css";
function PartnerFrm() {
    const [faq, setFaq] = useState();
    useEffect(() => {
      Axios.get("https://backend.theindianpoloawards.com/baseApp/faqs")
        .then((response) => setFaq(response.data))
        .catch((error) => console.log(error));
    }, []);
    const [hidden, setHidden] = useState({});
  
  
    const toggleHidden = (i) => {
      setHidden({ ...hidden, [i]: !hidden[i] });
    };
  
  
    const box = faq?.map((item, i) => (
      <FaqBox
        toggleHidden={toggleHidden}
        item={item}
        hidden={hidden}
        index={i}
        key={i}
      />
    ));
  
  return (
    <>
      <Nav />
      <div className={style.faws}>
        <div>
          <img
              src={require("../assets/img/newimg/partner-form.png")}
              style={{padding: "50px",width: "800px"}}
              alt="TIPA"
            />
        </div>
        <ContactForm title="Partner's Form" />
      </div>
      <Footer />
    </>
  );
}

export default PartnerFrm;
