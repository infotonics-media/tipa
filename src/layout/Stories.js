import React from 'react';
import SliderItems from '../components/SliderItems';
import data from "../assets/data/tipa-data.json"
import { useSelector } from 'react-redux';

const Stories = () => {

  const state = useSelector(state => state.FetchApi.BlogPost)
  // console.log();
  // console.log(state);
  return (
    <div className="stories">
      <div className="heading italiana">Stories</div>
      <div className="content">
        <div className="main">
          <div className="htext">THE INDIAN POLO AWARDS</div>
          <div className="description">
            The Indian Polo Awards is an initiative to recognize and celebrate
            the conspicuous success of the most remarkable people from the
            magnificent world of Polo. As a first of its kind venture, the
            Awards
          </div>
          <div style={{ cursor: 'pointer' }} className="button">
            <a className="btn" href=".">
              know more
            </a>
          </div>
        </div>
        <div className="slide-up">
          {state && state.map(item => <SliderItems key={item.id} item={item} />)}


          {/* <SliderItems blogName="/blog/celebrating-glory" content={data[1]} />
          <SliderItems blogName="/blog/tipa-partners" content={data[2]} />
          <SliderItems blogName="/blog/polo-legends-true-warriors" content={data[3]} />
          <SliderItems blogName="/blog/celebrating-a-new-milestone" content={data[0]} />
          <SliderItems blogName="/blog/how-can-you-not-be-romantic-about-polo" content={data[4]} /> */}
        </div>
      </div>
    </div>
  );
};

export default Stories;
