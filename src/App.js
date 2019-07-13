import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Timeline from './components/timeline'
import MySkills from './components/myskills';
import Connect from './components/contact';

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				<div id="colorlib-main">
					<Introduction></Introduction>
					<About></About>
          <MySkills></MySkills>
					<Timeline></Timeline>
          <Connect></Connect>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
