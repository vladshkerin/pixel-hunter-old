import {assert} from 'chai';
import {countingScores} from "./countingScores";

const dataProvider = [
  {
    scores: -1,
    lives: 0,
    answers: [
      {
        isSuccess: false,
        time: 0
      }
    ]
  },
  {
    scores: 0,
    lives: 0,
    answers: [
      {
        isSuccess: false,
        time: 3
      },
      {
        isSuccess: false,
        time: 6
      }
    ]
  },
  {
    scores: 100,
    lives: 0,
    answers: [
      {
        isSuccess: true,
        time: 3
      },
      {
        isSuccess: false,
        time: 6
      }
    ]
  },
  {
    scores: 250,
    lives: 1,
    answers: [
      {
        isSuccess: true,
        time: 3
      },
      {
        isSuccess: true,
        time: 6
      }
    ]
  },
  {
    scores: 300,
    lives: 2,
    answers: [
      {
        isSuccess: true,
        time: 1
      },
      {
        isSuccess: true,
        time: 5
      }
    ]
  },
  {
    scores: 450,
    lives: 3,
    answers: [
      {
        isSuccess: true,
        time: 2
      },
      {
        isSuccess: true,
        time: 3
      }
    ]
  }
];

// const dataProviderError = [
//   {
//     lives: ``,
//     answers: [
//       {
//         isSuccess: null,
//         time: null
//       },
//       {
//         isSuccess: ``,
//         time: ``
//       }
//     ]
//   },
//   {
//     lives: 3,
//     answers: [
//       {
//         isSuccess: true,
//         time: null
//       },
//       {
//         isSuccess: ``,
//         time: 1
//       }
//     ]
//   }
// ];

describe(`Check counting scores`, () => {

  it(`Check number of scores on a success response`, () => {
    for (let data of dataProvider) {
      const actual = countingScores(data.answers, data.lives);
      const expected = data.scores;
      assert.equal(actual, expected);
    }
  });

  // it(`Check error in data`, () => {
  //   for (let data of dataProviderError) {
  //     assert.throw(countingScores(data.answers, data.lives));
  //   }
  // });
});
