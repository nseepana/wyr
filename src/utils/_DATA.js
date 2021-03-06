let users = {
  naresh: {
    id: 'naresh',
    name: 'Naresh S',
    avatarURL: '/assets/images/naresh.jpg',
    answers: {
      '8xf0y6ziyjabvozdd253nd': "optionOne",
      '6ni6ok3ym7mf1p33lnez': "optionTwo",
      "am8ehyc8byjqgar0jgpub9": "optionTwo",
      "loxhs1bqm25b708cmbf3g": "optionTwo"
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9', '5oh9rungfp3wqy9bag6bnh']
  },
  tyler: {
    id: 'tyler',
    name: 'Tyler McGinnis',
    avatarURL: '/assets/images/tyler.jpg',
    answers: {
      "vthrdm985a262al8qx3do": 'optionOne',
      "xj352vofupe1dqz9emx13r": 'optionTwo',
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
  },
  ryan: {
    id: 'ryan',
    name: 'Ryan',
    avatarURL: '/assets/images/ryan.jpg',
    answers: {
      "xj352vofupe1dqz9emx13r": 'optionOne',
      "vthrdm985a262al8qx3do": 'optionTwo',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo'
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
  }
}




let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'naresh',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['naresh'],
      text: 'have horrible short term memory',
    },
    optionTwo: {
      votes: [],
      text: 'have horrible long term memory'
    }
  },

  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'ryan',
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: 'become a superhero',
    },
    optionTwo: {
      votes: ['ryan', 'naresh'],
      text: 'become a supervillian'
    }
  },

  "am8ehyc8byjqgar0jgpub9": {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'naresh',
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: 'be telekinetic',
    },
    optionTwo: {
      votes: ['naresh'],
      text: 'be telepathic'
    }
  },
  "loxhs1bqm25b708cmbf3g": {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'tyler',
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: 'be a front-end developer',
    },
    optionTwo: {
      votes: ['naresh'],
      text: 'be a back-end developer'
    }
  },

  "vthrdm985a262al8qx3do": {
    id: 'vthrdm985a262al8qx3do',
    author: 'tyler',
    timestamp: 1489579767190,
    optionOne: {
      votes: ['tyler'],
      text: 'find $50 yourself',
    },
    optionTwo: {
      votes: ['ryan'],
      text: 'have your best friend find $500'
    }
  },
  "xj352vofupe1dqz9emx13r": {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'ryan',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['ryan'],
      text: 'write JavaScript',
    },
    optionTwo: {
      votes: ['tyler'],
      text: 'write Swift'
    }
  },

  '5oh9rungfp3wqy9bag6bnh': {
    id: '5oh9rungfp3wqy9bag6bnh',
    timestamp: 1582483712811,
    author: 'naresh',
    optionOne: {
      votes: [],
      text: 'like frontend'
    },
    optionTwo: {
      votes: [],
      text: 'like backend'
    }
  }
}

function generateUID() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}



export function _getUsers() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...users }), 1000)
  })
}

export function _getQuestions() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...questions }), 1000)
  })
}

function formatQuestion({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    }
  }
}

export function _saveQuestion(question) {
  return new Promise((res, rej) => {
    const authedUser = question.author;
    const formattedQuestion = formatQuestion(question)

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion
      }

      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: users[authedUser].questions.concat([formattedQuestion.id])
        }
      }

      res(formattedQuestion)
    }, 1000)
  })
}

export function _saveQuestionAnswer({ authedUser, qid, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer
          }
        }
      }

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser])
          }
        }
      }
      res({ user: users[authedUser], question: questions[qid] });
      // res();
    }, 500)
  })
}

export function _getQuestion(qid) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const question = questions[qid];
      res(question);
    }, 500)
  })
}

