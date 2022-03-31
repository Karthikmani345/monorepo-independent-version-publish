// const { pckName } = require('@lerna-monorepo/libs');


module.exports = function getDate(
  locale = 'en-US',
  options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
) {
  return new Date().toLocaleDateString(locale, options);
};


function name() {
  // console.log(pckName);
  console.log('namex');

}

