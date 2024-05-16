import _ from 'lodash';
import numRef from '../data/ref.json';

function numToWord(num) {
  return _.reduce(
    numRef,
    (accum, ref) => {
      return ref.num === num ? ref.word : accum;
    },
    ''
  );
}

export default numToWord;
