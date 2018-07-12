function errorLoading(err) {
  console.log('Page failed to load. ', err); // eslint-disable-line
}

function loadRoute(cb) {
  return ({ default: module }) => cb(null, module);
}

export default {
  path: '*',
  getComponent(location, cb) {
    System.import('./NotFoundPage')
      .then(loadRoute(cb))
      .catch(errorLoading);
  }
};
