import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { RandomWheelName } from '../../../utils';

import './WheelName.scss';

const colors = ['#3369E8', '#D61026', '#EEB213', '#029926'];

const WheelName = (props) => {
  console.log('RandomWheelName', RandomWheelName);

  const [wheel, setWheel] = useState('');
  const [names, setName] = useState('');
  const [options, setOptions] = useState({
    el: '#wheel', // Canvas ID
    members: [], // Array of members
    colors: [], // Background color of each member
    radius: 250, // wheel radius
  });

  useEffect(() => {
    const random = new RandomWheelName(options);
    random.init();
    setWheel(random);
  }, [options]);

  const convertValue = (value) => {
    if (!value) {
      return setOptions((prev) => ({ ...prev, members: [], colors: [] }));
    }

    const arr = value.split('\n');

    let temp = arr.map((_, index) => colors[index % 4]);

    for (let i = 0; i < arr.length; i++) {
      if (!arr[i]) {
        arr.splice(i, 1);
        --i;
      }
    }

    setOptions((prev) => ({ ...prev, members: arr, colors: temp }));
  };

  const onChange = (e) => {
    const { value } = e.target;
    convertValue(value);
    setName(value);
  };

  const onWheel = () => {
    wheel.spin(function (member) {
      alert(member);
    });
  };

  return (
    <div className='random-wheel'>
      <div>
        <canvas id='wheel'></canvas>
        <button onClick={onWheel}>QUAY</button>
      </div>
      <textarea className='textarea' name={'name'} value={names} onChange={onChange}></textarea>
    </div>
  );
};

WheelName.propTypes = {};

export default WheelName;
