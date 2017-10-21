import React, { Component } from 'react'

const About = ({match}) => (
  <div>
    <h4>about</h4>
    <h4>your url: {match.url}</h4>
    <h4>{JSON.stringify(match, null, 4)}</h4>
  </div>
);

export default About;