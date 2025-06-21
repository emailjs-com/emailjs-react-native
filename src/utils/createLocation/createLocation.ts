export const createLocation = () => {
  // @ts-expect-error: allow non-read
  window.location = window.location || {
    pathname: 'default',
  };
};
