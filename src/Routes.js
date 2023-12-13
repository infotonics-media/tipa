import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Hero from "./layout/Hero";
import Nomination from "./layout/Nomination";
import Partner from "./layout/Partner";
import About from "./layout/About";
import Awards from "./layout/Awards";
import Footer from "./layout/Footer";
import Stories from "./layout/Stories";
// import Registration from './layout/Registration';
import InMotion from "./layout/InMotion";
import PlayerDetails from "./layout/PlayerDetails";
import PlayerListing from "./layout/PlayerListing";
import Blog from "./layout/Blog";
import data from "../src/assets/data/tipa-data.json";
// import RegistrationPage from './layout/registration-page';
import Video from "./layout/Event";
import PartnerPage from "./layout/PartnerPage";
import BlogPage from "./layout/BlogPage";
import NominationPage from "./layout/NominationPage";
import PartnerContent from "./layout/PartnerContent";
import PrivacyPolicy from "./layout/PrivacyPolicy";
import Error from "./components/Error";
import GalleryPage from "./layout/GalleryPage";
import GalleryPage2021 from "./layout/GalleryPage2021";
import GalleryPage2022 from "./layout/GalleryPage2022";


import PressRelease from "./layout/PressRelease";
import WinnerLayout from "./layout/WinnerLayout";
import TetstimonialsLayout from "./layout/TetstimonialsLayout";
import GallerySlider from "./layout/GallerySlider";
import PitchDesk from "./layout/PitchDesk";
import BlogCardsRelated from "./components/BlogCardsRelated";
import ParnterList from "./layout/ParnterList";
import PartnerDetails from "./layout/PartnerDetails";
import Contact from "./layout/Contact";
import PartnerFrm from "./layout/PartnerFrm";

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <About />
      <Nomination title="Awards Category" year="2022" />
      {/* <Registration /> */}
      <WinnerLayout title="Winners" year="2022" />
      <WinnerLayout title="Winners" year="2021" />
      <TetstimonialsLayout />
      <GallerySlider title="Gallery"/>
      <Partner />
      <PitchDesk/>
      <InMotion title="in motion" />
      {/* <Stories /> */}
      <BlogCardsRelated/>
      <Awards />
      <Footer />
    </React.Fragment>
  );
};

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/award-categories/:nomSlug">
        <PlayerListing />
      </Route>
      <Route exact path="/privacy-policy">
        <PrivacyPolicy />
      </Route>
      <Route exact path="/award-categories">
        <NominationPage />
      </Route>
      {/* <Route exact path="/award-categories/:nomSlug/:playerSlug">
        <PlayerDetails />
      </Route> */}
      <Route path="/home">
        <Redirect to="/" />
      </Route>

      <Route exact path="/playerdetails">
        <PlayerDetails />
      </Route>
      <Route exact path="/partner">
        <PartnerPage />
      </Route>
      <Route exact path="/parnterList">
       <ParnterList />
      </Route>
      <Route exact path="/blog">
        <BlogPage />
      </Route>
      <Route exact path="/blog/blog-details/:slug">
        <Blog />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path="/partnerContact">
        <PartnerFrm />
      </Route>
      <Route exact path="/parnterList/:slug">
        <PartnerDetails />
      </Route>
      <Route exact path="/page-not-found">
        <Error />
      </Route>
      <Route exact path="/gallery">
        <GalleryPage />
      </Route>
      <Route exact path="/gallery2021">
        <GalleryPage2021 />
      </Route>
      <Route exact path="/gallery2022">
        <GalleryPage2022 />
      </Route>
      
      <Route exact path="/press-release">
        <PressRelease />
      </Route>

      {/* <Route>
        <Error />
      </Route> */}

      {/* <Route exact path="/blog/celebrating-a-new-milestone">
        <Blog
          data={data[0]}
          links={[
            '/blog/celebrating-glory',
            '/blog/tipa-partners',
            '/blog/polo-legends-true-warriors',
          ]}
          link_title={[data[1].title, data[2].title, data[3].title]}
          link_img={[
            data[1].cover_image,
            data[2].cover_image,
            data[3].cover_image,
          ]}
          link_date={[data[1].date, data[2].date, data[3].date]}
        />
      </Route>
      <Route exact path="/blog/celebrating-glory">
        <Blog
          data={data[1]}
          links={[
            '/blog/tipa-partners',
            '/blog/polo-legends-true-warriors',
            '/blog/how-can-you-not-be-romantic-about-polo',
          ]}
          link_title={[data[2].title, data[3].title, data[4].title]}
          link_img={[
            data[2].cover_image,
            data[3].cover_image,
            data[4].cover_image,
          ]}
          link_date={[data[2].date, data[3].date, data[4].date]}
        />
      </Route>
      <Route exact path="/blog/tipa-partners">
        <Blog
          data={data[2]}
          links={[
            '/blog/polo-legends-true-warriors',
            '/blog/celebrating-a-new-milestone',
            '/blog/celebrating-glory',
          ]}
          link_title={[data[3].title, data[0].title, data[1].title]}
          link_img={[
            data[3].cover_image,
            data[0].cover_image,
            data[1].cover_image,
          ]}
          link_date={[data[3].date, data[0].date, data[1].date]}
        />
      </Route>
      <Route exact path="/blog/polo-legends-true-warriors">
        <Blog
          data={data[3]}
          links={[
            '/blog/celebrating-a-new-milestone',
            '/blog/celebrating-glory',
            '/blog/tipa-partners',
          ]}
          link_title={[data[0].title, data[1].title, data[2].title]}
          link_img={[
            data[0].cover_image,
            data[1].cover_image,
            data[2].cover_image,
          ]}
          link_date={[data[0].date, data[1].date, data[2].date]}
        />
      </Route>
      <Route exact path="/blog/how-can-you-not-be-romantic-about-polo">
        <Blog
          data={data[4]}
          links={[
            '/blog/celebrating-glory',
            '/blog/tipa-partners',
            '/blog/polo-legends-true-warriors',
          ]}
          link_title={[data[1].title, data[2].title, data[3].title]}
          link_img={[
            data[1].cover_image,
            data[2].cover_image,
            data[3].cover_image,
          ]}
          link_date={[data[1].date, data[2].date, data[3].date]}
        />
      </Route>*/}
      <Route exact path="/videos">
        <Video is_coming={false} is_completed={false} is_live={false} />
      </Route>
      {/* <Route exact path="/event-live">
        <Video
          is_live={true}
          is_coming={false}
          is_completed={false}
          links={[
            '/blog/celebrating-glory',
            '/blog/tipa-partners',
            '/blog/polo-legends-true-warriors',
          ]}
          link_title={[data[1].title, data[2].title, data[3].title]}
          link_img={[
            data[1].cover_image,
            data[2].cover_image,
            data[3].cover_image,
          ]}
          link_date={[data[1].date, data[2].date, data[3].date]}
        />
      </Route>
      <Route exact path="/event-completed">
        <Video
          is_completed={true}
          is_live={false}
          is_coming={false}
          links={[
            '/blog/celebrating-glory',
            '/blog/tipa-partners',
            '/blog/polo-legends-true-warriors',
          ]}
          link_title={[data[1].title, data[2].title, data[3].title]}
          link_img={[
            data[1].cover_image,
            data[2].cover_image,
            data[3].cover_image,
          ]}
          link_date={[data[1].date, data[2].date, data[3].date]}
        />
      </Route> */}
      {/* <Route exact path="/registration">
        <RegistrationPage />
      </Route> */}
      <Route exact path="/partner-content">
        <PartnerContent
          is_coming={false}
          is_completed={false}
          is_live={true}
          links={[
            "/blog/celebrating-glory",
            "/blog/tipa-partners",
            "/blog/polo-legends-true-warriors",
          ]}
          link_title={[data[1].title, data[2].title, data[3].title]}
          link_img={[
            data[1].cover_image,
            data[2].cover_image,
            data[3].cover_image,
          ]}
          link_date={[data[1].date, data[2].date, data[3].date]}
        />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route>
        <Redirect to="/page-not-found" />
      </Route>
    </Switch>
  );
};

export default Routes;
