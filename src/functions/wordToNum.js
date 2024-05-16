import _ from 'lodash';
import numRef from '../data/ref.json';

function wordToNum(word) {
  return _.reduce(
    numRef,
    (accum, ref) => {
      return ref.word === word && word.toLowerCase() ? ref.num : accum;
    },
    -1
  );
}

export default wordToNum;
