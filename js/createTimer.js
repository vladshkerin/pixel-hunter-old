const createTimer = (time) => {
  if (typeof time !== `number` || time <= 0 ||
    (time ^ 0) !== time || time === Infinity) {
    throw new Error(`Invalid argument function: 'time'`);
  }

  return {
    time,
    isTimeExpire: false,
    tick() {
      this.time -= 1;
      this.isTimeExpire = (this.time === 0);
    }
  };
};

export {createTimer};
