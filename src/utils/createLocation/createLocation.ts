export const createLocation = () => {
  if (!global.window) {
    global.window = {};
  }

  if (!global.window.location) {
    global.window.location = {
      pathname: 'default',
    };
  }
};
