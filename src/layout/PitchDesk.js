import React from "react";
import PressReleaseCards from "../components/PressReleaseCards";

function PitchDesk() {
  const data = [
    {
      title: "Our 2022 Pitch Deck",
      desc: "TIPA is the unparalleled acknowledgement of the years of passion put into polo both within the Indian and International community. Participate in this momentous honor marked with a synergy of distinguished names and the greatest of the country for the 2022 edition. Click here to know more about the next phase.",
      link: "https://backend.theindianpoloawards.com/media/pdf/The-Indian-Polo-Awards-Edition-2.pdf",
    },
    {
        title: "Press Release",
        desc: "The splendid night nonpareil in the country was graced by a variety of dignitaries and stars captured in all its glory. From The Business Daily to the Asian Chronicle here is a peak into the wonderful event.",
        link: "https://www.theindianpoloawards.com/press-release",
      },
  ];

  return (
    <>
    {data.map((item,index) =><PressReleaseCards key={index} item={item}/>)}
      

    </>
  );
}

export default PitchDesk;
