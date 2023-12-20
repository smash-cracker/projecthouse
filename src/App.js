import React from 'react';
import './App.css';
import video from './video1.mp4';
import video2 from './video2.mp4';
import ReactPlayer from 'react-player'
import VideoPlayer from './components/videoplayer';

const videos = [
  {
    url: video,
    description: 'Travel app with traveller🧳, Hotel🛌, Guide, Food🍉 modules. Helps you post your most beautiful memories and connect with other travel maniacs.',
  },
  {
    url: video2,
    description: 'React JS website for finding bus timings.',
  },
  // Add more video objects as needed
];

function App() {
  return (
    <>
      <header>
        <div className="navbar">
          <div className="nav-left">
            Project House
          </div>
          <div className="nav-right"></div>
        </div>
      </header>
      <section>
        <div className="left">
          <h1 className="title">Project House</h1>
          <h3>Find best projects for you.</h3>
          <h4>We have over 100+ projects and reports made for you.</h4>
          <h4>Learn. Buy. Present</h4>
          <button className="button">Give me list</button>
        </div>
        <VideoPlayer videos={videos} />
      </section>
      {/* <section className="sect1">
        <div className="left sect"></div>
        <div className="right sect"></div>
      </section>
      <section className="sect2">
        <div className="wrapper">
          <div className="container">
            <i className="fa fa-mobile"></i>
            <span className="num" data-val="12">000</span>
            <span className="text">Mobile Apps</span>
          </div>

          <div className="container">
            <i className="fa fa-chrome"></i>
            <span className="num" data-val="15">000</span>
            <span className="text">Websites</span>
          </div>

          <div className="container">
            <i className="fa fa-connectdevelop"></i>
            <span className="num" data-val="19">000</span>
            <span className="text">Machine Learning</span>
          </div>

          <div className="container">
            <i className="fa fa-camera-retro"></i>
            <span className="num" data-val="3">0</span>
            <span className="text">OpenCV</span>
          </div>

          <div className="container">
            <i className="fa fa-book"></i>
            <span className="num" data-val="41">000</span>
            <span className="text">Mini Project Topics</span>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default App;
