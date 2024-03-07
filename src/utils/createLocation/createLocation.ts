export const createLocation = () => {
  window.location = window.location || {
    pathname: 'default',
  };
};
