import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// import PrizeWheel from "prize-wheel";
import Winwheel from 'winwheel';

const WheelName = (props) => {
  // let theWheel = new Winwheel({
  //   numSegments: 8, // Number of segments
  //   outerRadius: 212, // The size of the wheel.
  //   centerX: 217, // Used to position on the background correctly.
  //   centerY: 219,
  //   textFontSize: 28, // Font size.
  //   // Definition of all the segments.
  //   segments: [
  //     { fillStyle: '#eae56f', text: 'Prize 1' },
  //     { fillStyle: '#89f26e', text: 'Prize 2' },
  //     { fillStyle: '#7de6ef', text: 'Prize 3' },
  //     { fillStyle: '#e7706f', text: 'Prize 4' },
  //     { fillStyle: '#eae56f', text: 'Prize 5' },
  //     { fillStyle: '#89f26e', text: 'Prize 6' },
  //     { fillStyle: '#7de6ef', text: 'Prize 7' },
  //     { fillStyle: '#e7706f', text: 'Prize 8' },
  //   ],
  //   // Definition of the animation
  //   animation: {
  //     type: 'spinToStop',
  //     duration: 5,
  //     spins: 8,
  //     callbackFinished: alertPrize,
  //   },
  // });

  // function alertPrize(indicatedSegment) {
  //   // Do basic alert of the segment text.
  //   alert('You have won ' + indicatedSegment.text);
  // }

  return <canvas id='canvas'></canvas>;
};

WheelName.propTypes = {};

export default WheelName;
