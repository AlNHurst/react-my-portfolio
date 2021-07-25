import React, { Component } from 'react';
import About from './aboutme';

function Landing() {
  return (
    <div style={{ width: '100%', margin: 'auto' }}>
      <div className="landing-grid">
        <div col={12}>
          <About></About>
        </div>
      </div>
    </div>
  );
}

export default Landing;