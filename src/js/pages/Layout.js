import React from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle"
import BarChart from "../components/BarTest";
import NavBar from "../components/Header/NavBar";


export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Testing testing",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  getData(){
    return  [];
  }

  render() {
    return (
      
      <div className="container myContainer text-center">
        <NavBar />  
        <PageTitle title={"Search a wiki article to generate connection graph"}/>
      <BarChart data={[5,10,1,3]} size={[500,500]} />
      <Footer />
      </div>
    );
  }
}
