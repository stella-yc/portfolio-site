import React, { Component } from 'react';
import Scroll from 'react-scroll';
import './About.css';
import SectionHeader from './SectionHeader';
const Element = Scroll.Element;

class About extends Component {
  render() {
    return (
      <Element name="about-element">
        <section className="about-section">
          <SectionHeader
            title="About Me"
          />
          <img src="./images/profile.jpg" className="round-border profile-pic" alt="Stella Chung"/>
          <div className="about-summary">
            <p>After working in database and CRM management in the nonprofit sector, I decided to apply my love of technology and analytical thinking towards becoming a software engineer. I'm currently a full stack web developer specializing in JavaScript.</p>
            <p>Besides coding, I love reading, hiking, painting, and traveling. I also care deeply about environmental issues, diversity in tech, and civic engagement.</p>
            <p>Check out my <a href="https://stackoverflow.com/story/stellachung" target="_blank" rel="noopener noreferrer">Developer Story</a> at Stack Overflow to learn more about what I've been up to.</p>
            <p>If you'd like to get in touch, message me on <a href="https://www.linkedin.com/in/chungstella/">LinkedIn</a> or <a href="https://twitter.com/stellasighs">Twitter</a>. You can find my writing at <a href="https://medium.com/@stll.chung" target="_blank" rel="noopener noreferrer"> Medium</a>, what I've been reading on <a href="https://www.goodreads.com/user_challenges/8551339" target="_blank" rel="noopener noreferrer"> Goodreads</a>, and my drawings/paintings at <a href="https://www.flickr.com/photos/153109735@N08/?" target="_blank" rel="noopener noreferrer">Flickr</a>.
          </p>
            <p>Thanks for visiting!</p>
        </div>
        </section>
      </Element>
    );
  }
}

export default About;
