
import { Component } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Text from "./components/text";
import Blue from "./components/Blue";
import PageCard from "./components/PageCard";
import i from "./images/i.jpg"
import ii from "./images/ii.jpg"
import iii from "./images/iii.jpg"
import iv from "./images/iv.jpg"
import v from "./images/v.jpg"
import vi from "./images/vi.jpg"
import vii from "./images/vii.jpg"
import viii from "./images/viii.jpg"
import BecomeIns from "./components/PageBecIns";
import Feedback from "./components/PageFeedback";
import Footer from "./components/Footer";







class App extends Component{
    render(){
      return<div>
        <Navbar/>
        <Blue/>
        <Text/>
        <div className="container">
          <div className="row">
            <PageCard Cardimg={i} x="All level" title="Sketch from A to Z- for app designer" text="Proposal indulged no do sociable he throwing settling." time="12h 56m" calender="15 lectures"/>
            <PageCard Cardimg={ii} x="Beginner" title="Graphic Design Masterclass" text="Rooms oh fully taken by worse do Points afraid but may end Rooms" time="9h 56m" calender="65 lectures"/>
            <PageCard Cardimg={iii} x="Beginner" title="Create a Design System in Figma" text="Rooms oh fully taken by worse do. Points afraid but may end afraid but." time="5h 56m" calender="32 lectures"/>
            <PageCard Cardimg={iv} x="Beginner" title="Deep Learning with React-Native" text="Far advanced settling say finished raillery. Offered chiefly farther" time="18h 56m" calender="99 lectures"/>
            <PageCard Cardimg={v} x="All level" title="Build Responsive Websites with HTML" text="Far advanced settling say finished raillery. Offered chiefly farther." time="15h 30m" calender="68 lectures"/>
            <PageCard Cardimg={vi} x="Beginner" title="Build Websites with CSS" text="Far advanced settling say finished raillery. Offered chiefly farther." time="36h 30m" calender="72 lectures"/>
            <PageCard Cardimg={vii} x="All level" title="Learn Invision" text="Arrived off she elderly beloved him Course regard to up he hardly." time="6h 56m" calender="82 lectures"/>
            <PageCard Cardimg={viii} x="All level" title="JavaScript: Full Understanding" text="Far advanced settling say finished raillery. Offered chiefly farther." time="35h 20m" calender="89 lectures"/>
           
          </div>
        </div>
        <BecomeIns/>
        <Feedback/>
        <Footer/>
       
      </div>
      
    }
}
export default App;