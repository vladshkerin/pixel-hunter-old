const createTimer = function (time) {

  let timer = {

  };

  this.tick = function () {
    time -= 1;
    return time > 0;
  };

  return timer;
};
