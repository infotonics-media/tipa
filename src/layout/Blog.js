import React, { createRef, useEffect, useState } from 'react';
import '../assets/css/bloginfo.css';
import Footer from './Footer';
import { Link, useParams } from 'react-router-dom';
import Nav from './Nav';
import axios from 'axios';
import { useSelector } from 'react-redux'

const RelatedBlog = (props) => {
  return (<div className="v-post">
    <Link to={'/blog/' + props.item.slug}>
      <div>
        <img
          src={'https://backend.theindianpoloawards.com' + props.item.cover_image}
          height="270px"
          alt="cover-blog"
        ></img>
      </div>
      <p className="v-post-date">{props.item.date}</p>
      <h3 className="v-post-header">{props.item.title}</h3>
    </Link>
  </div>)
}



const Blog = (props) => {
  const mainRef = createRef();
  const params = useParams()
  const [state, setState] = useState({})

  useEffect(() => {
    mainRef.current.scrollIntoView();
  }, [mainRef]);

  useEffect(() => {
    if (params.slug !== undefined) {

      axios.get(`https://backend.theindianpoloawards.com/blog/blog-details/${params.slug}`)
        .then((res) => {
          // console.log("deatils",res.data)
          setState(res.data)
        }).catch(err => {
          console.log('err');
        })
    }
  }, [params])


  return (
    <div className="blog-wrapper" ref={mainRef} >
      <div className="blog-bg-1">
        <Nav />
        <div className="blog-date">{state.blog !== undefined ? state.blog.date : ""}</div>
        <div className="blog-title">{state.blog !== undefined ? state.blog.title : ""}</div>
        {/* <div className="blog-subheading">{props.data.caption}</div> */}
        <div className="social-blog">
          <a href="https://www.facebook.com/TheIndianPoloAwards/" target="_blank" rel="noopener noreferrer" >
            <img
              src={require('../assets/img/svg/Icon awesome-facebook-f.svg')}
              alt="facebook"
              height="20px"
              width="15px"
            />
          </a>
          <a href="https://twitter.com/IndianpoloAwrds" target="_blank" rel="noopener noreferrer">

            <img
              src={require('../assets/img/svg/Icon awesome-twitter.svg')}
              height="20px"
              width="15px"
              alt="twitter"
            />
          </a>
          <a href="https://www.instagram.com/theindianpoloawards/" target="_blank" rel="noopener noreferrer" >
            <img
              src={require('../assets/img/svg/insta.svg')}
              alt="external"
              height="20px"
              width="15px"
            />
          </a>
        </div>
        <div className="blog-caption">
          {
            state.blog !== undefined ? state.blog.description : ''
          }
        </div>
        <div className="cover">
          <img
            src={state.title !== undefined ? "https://backend.theindianpoloawards.com" + state.desktopCoveIimage : ""}
            alt="cover"
          />
          <p className="cover-caption">
            {state !== undefined ? state.Image_Credit : ""}
          </p>
        </div>
      </div>
      <div className="blog-details">
        <div className="blog-desc-subheading">
          {/*{props.data.intro}*/}
          {state !== undefined ? state.title : ""}
        </div>
        <div
          className="blog-desc-desc"
          dangerouslySetInnerHTML={{ __html: state !== undefined ? state.body : "" }}
        ></div>
      </div>
      <div className="blog-related-heading">Related Posts</div>
      <div className="v-related-posts">
        {state.related_blogs !== undefined && state.related_blogs.map(item => <RelatedBlog key={item.id} item={item} />)}
      </div>
      <div className="blog-footer">
        <Footer />
      </div>
    </div >);
};

export default Blog;
