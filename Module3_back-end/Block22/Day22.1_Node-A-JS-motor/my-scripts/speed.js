const { questionFloat } = require('readline-sync');

const calcSpeed = () => {
  const speed = (distance, time) => (distance/time).toFixed(2);

  const dis = questionFloat('What distance did you cover (in meters)? ');
  const ti = questionFloat('What was your time (in seconds)? ');

  console.log(`Your speed was ${speed(dis, ti)} m/s²`);
}

calcSpeed();

module.exports = calcSpeed;
