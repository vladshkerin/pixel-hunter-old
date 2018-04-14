const INITIAL_GAMES = {
  numberQuestions: 2,
  minLives: 0,
  maxLives: 3,
  fastTime: 0,
  slowTime: 5
};

const SCORE_ANSWER = {
  failedAnswer: -1,
  successAnswer: 100,
  fastAnswer: 50,
  slowAnswer: -50,
  remainLives: 50
};

const countingScores = (answers, lives) => {
  if (typeof answers !== `object` || typeof lives !== `number`) {
    throw new Error(`Invalid arguments function 'countingScores'`);
  }

  let scores = 0;

  if (answers.length < INITIAL_GAMES.numberQuestions) {
    scores = SCORE_ANSWER.failedAnswer;
  } else {
    answers.forEach((answer) => {
      if (answer.isSuccess) {
        scores += SCORE_ANSWER.successAnswer;
      }

      if (answer.time < INITIAL_GAMES.slowTime) {
        scores += SCORE_ANSWER.fastAnswer;
      } else {
        scores += SCORE_ANSWER.slowAnswer;
      }
    });

    if (lives > INITIAL_GAMES.minLives) {
      scores += lives * SCORE_ANSWER.remainLives;
    }
  }

  return scores;
};

export {countingScores};
