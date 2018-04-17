import {assert} from 'chai';
import {createTimer} from './createTimer';

describe(`Check create timer`, () => {

  it(`Check return object`, () => {
    const timer = createTimer(1);
    assert.typeOf(timer, `object`);
  });

  it(`Check for validation input number`, () => {
    const errorData = [1.3, -32.1, -9, 0, `str`, true, null, Infinity, -Infinity];
    errorData.forEach((data) => {
      const fn = () => createTimer(data);
      assert.throws(fn, /Invalid argument/);
    });
  });

  it(`Check output value`, () => {
    [1, 39, 157].forEach((data) => {
      const timer = createTimer(data);

      assert.equal(timer.time, data);
      assert.isFalse(timer.isTimeExpire);
    });
  });

  it(`Check reducing the time per unit`, () => {
    [468, 42, 2].forEach((data) => {
      const timer = createTimer(data);
      const expected = data - 1;

      timer.tick();

      assert.equal(expected, timer.time);
    });
  });

  it(`Check reducing the time per two`, () => {
    [24685, 94, 973].forEach((data) => {
      const timer = createTimer(data);
      const expected = data - 2;

      timer.tick();
      timer.tick();

      assert.equal(timer.time, expected);
    });
  });

  it(`Check time expire`, () => {
    const timer = createTimer(1);

    timer.tick();

    assert.isTrue(timer.isTimeExpire);
  });
});
