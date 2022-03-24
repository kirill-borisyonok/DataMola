'use strict';

const tweets = [
    {
        id: '1',
        text: 'Привет! #js #datamola',
        createdAt: new Date('2021-12-12T01:00'),
        author: 'Kirill Borisyonok',
        comments: []
    },
    {
        id: '2',
        text: 'Какие дела?',
        createdAt: new Date('2022-03-09T03:00'),
        author: 'Петров Петр',
        comments: [{
            id: '1001',
            text: 'Хорошо, а у тебя?',
            createdAt: new Date('2022-03-09T02:00'),
            author: 'Иванов Иван'
        }]
    },
    {
        id: '3',
        text: 'Привет! #datamola',
        createdAt: new Date('2021-12-12T20:00'),
        author: 'Kirill Borisyonok',
        comments: []
    },
    {
        id: '4',
        text: 'Какие дела?',
        createdAt: new Date('2021-03-09T04:00'),
        author: 'Петров Петр',
        comments: [{
            id: '1002',
            text: 'Хорошо, а у тебя?',
            createdAt: new Date('2022-03-09T19:00'),
            author: 'Иванов Иван'
        }]
    },
    {
        id: '5',
        text: 'Привет! #datamola',
        createdAt: new Date('2021-12-12T18:00'),
        author: 'Kirill Borisyonok',
        comments: []
    },
    {
        id: '6',
        text: 'Какие дела?',
        createdAt: new Date('2021-03-09T17:00'),
        author: 'Петров Петр',
        comments: [{
            id: '1003',
            text: 'Хорошо, а у тебя?',
            createdAt: new Date('2022-03-09T14:00'),
            author: 'Иванов Иван'
        }]
    },
    {
        id: '7',
        text: 'Привет! #datamola',
        createdAt: new Date('2021-12-12T15:00'),
        author: 'Kirill Borisyonok',
        comments: []
    },
    {
        id: '8',
        text: 'Какие дела?',
        createdAt: new Date('2021-03-09T12:00'),
        author: 'Петров Петр',
        comments: [{
            id: '1004',
            text: 'Хорошо, а у тебя?',
            createdAt: new Date('2022-03-09T11:00'),
            author: 'Иванов Иван'
        }]
    },
    {
        id: '9',
        text: 'Привет мир! #js #datamola',
        createdAt: new Date('2021-12-12T10:00'),
        author: 'Kirill Borisyonok',
        comments: []
    },
    {
        id: '10',
        text: 'дела?',
        createdAt: new Date('2021-03-09T08:00'),
        author: 'Петров Петр',
        comments: [{
            id: '1005',
            text: 'Хорошо, а у тебя?',
            createdAt: new Date('2022-03-09T06:00'),
            author: 'Иванов Иван'
        }]
    },
    {
        id: '11',
        text: 'Привет мир! #datamola',
        createdAt: new Date('2021-12-12T19:10'),
        author: 'Kirill Borisyonok',
        comments: []
    },
    {
        id: '12',
        text: 'дела?',
        createdAt: new Date('2021-03-09T23:11'),
        author: 'Петров Петр',
        comments: [{
            id: '1006',
            text: 'Хорошо, а у тебя?',
            createdAt: new Date('2022-03-09T13:13'),
            author: 'Иванов Иван'
        }]
    },
    {
        id: '13',
        text: 'Привет! #js',
        createdAt: new Date('2021-12-12T15:16'),
        author: 'Kirill Borisyonok',
        comments: []
    },
    {
        id: '14',
        text: 'дела?',
        createdAt: new Date('2021-09-09T03:01'),
        author: 'Петров Петр',
        comments: [{
            id: '1007',
            text: 'Хорошо, а у тебя?',
            createdAt: new Date('2022-03-09T23:00'),
            author: 'Иванов Иван'
        }]
    },
    {
        id: '15',
        text: 'Привет! #js #datamola',
        createdAt: new Date('2021-01-12T21:10'),
        author: 'Kirill Borisyonok',
        comments: []
    },
    {
        id: '16',
        text: 'Какие дела? #js #datamola',
        createdAt: new Date('2021-03-09T06:09'),
        author: 'Петров Петр',
        comments: [{
            id: '1008',
            text: 'Хорошо, а у тебя?',
            createdAt: new Date('2022-03-12T23:00'),
            author: 'Иванов Иван'
        }]
    },
    {
        id: '17',
        text: 'Привет! #js #datamola',
        createdAt: new Date('2021-12-12T12:59'),
        author: 'Kirill Borisyonok',
        comments: []
    },
    {
        id: '18',
        text: '#js дела? #datamola ',
        createdAt: new Date('2021-03-09T14:44'),
        author: 'Петров Петр',
        comments: [{
            id: '1009',
            text: 'Хорошо, а у тебя?',
            createdAt: new Date('2022-03-09T23:00'),
            author: 'Иванов Иван'
        }]
    },
    {
        id: '19',
        text: 'Привет мир! #js',
        createdAt: new Date('2021-03-09T19:29'),
        author: 'Kirill Borisyonok',
        comments: []
    },
    {
        id: '20',
        text: 'дела?',
        createdAt: new Date('2021-12-12T16:17'),
        author: 'Петров Петр',
        comments: [{
            id: '1010',
            text: 'Хорошо, а у тебя?',
            createdAt: new Date('2022-03-09T23:00'),
            author: 'Иванов Иван'
        }]
    }
];

class Tweet {
    constructor(tweet) {
        this._id = tweet.id;
        this.text = tweet.text;
        this._createdAt = tweet.createdAt;
        this._author = tweet.author;
        this.comments = tweet.comments.map(item => new Comment(item));
    }

    get id() {
        return this._id;
    }

    get createdAt() {
        return this._createdAt;
    }

    get author() {
        return this._author;
    }

    static maxTextTweetLength = 280;

    static validate(tw) {
        const tweetsMandatoryKey = ['_id', 'text', '_createdAt', '_author', 'comments'];

        // проверка на наличие обязательных полей
        const validateKey = () => {
            let trueKey = 0;
            for (let tweetsKey of tweetsMandatoryKey) {
                if (tw.hasOwnProperty(tweetsKey)) {
                    trueKey += 1;
                } else {
                    console.log(`Введите ${tweetsKey}`);
                }
            }
            return trueKey === 5;
        };

        // проверка на соответствие полей необходимым условиям
        const validateId = () => {
            return typeof tw._id === 'string' && tw._id !== '';
        };

        const validateText = () => {
            return typeof tw.text === 'string' && tw.text !== '' && tw.text.length < Tweet.maxTextTweetLength;
        };

        const validateCreatedAt = () => {
            return tw._createdAt instanceof Date;
        };

        const validateAuthor = () => {
            return typeof tw._author === 'string' && tw._author !== '';
        };

        const validateComment = () => {
            return Array.isArray(tw.comments);
        };

        const tweetsValid = validateKey()
            && validateId()
            && validateText()
            && validateCreatedAt()
            && validateAuthor()
            && validateComment();

        return tweetsValid;
    }
}

// const tweet1 = new Tweet(tweets[0]);

// console.log(Tweet.validate(tweet1));
// console.log(tweet1);

class Comment {
    constructor(commentFields) {
        this._id = commentFields.id;
        this.text = commentFields.text;
        this._createdAt = commentFields.createdAt;
        this._author = commentFields.author;
    }

    get id() {
        return this._id;
    }

    get createdAt() {
        return this._createdAt;
    }

    get author() {
        return this._author;
    }

    static maxTextCommentLength = 280;

    static validate(com) {
        const commentsMandatoryKey = ['id', 'text', 'createdAt', 'author'];

        // проверка на наличие обязательных полей
        const validateKey = function () {
            let trueKey = 0;
            for (let commentsKey of commentsMandatoryKey) {
                if (com.hasOwnProperty(commentsKey)) {
                    trueKey += 1;
                } else {
                    console.log(`Введите в комментарий ${commentsKey}`);
                }
            }
            return trueKey === 4;
        };

        // проверка на соответствие полей необходимым условиям
        const validateId = () => {
            return typeof com.id === 'string' && com.id !== '';
        };

        const validateText = () => {
            return typeof com.text === 'string' && com.text !== '' && com.text.length < Comment.maxTextCommentLength;
        };

        const validateCreatedAt = () => {
            return com.createdAt instanceof Date;
        };

        const validateAuthor = () => {
            return typeof com.author === 'string' && com.author !== '';
        };

        const commentValid = validateKey()
            && validateId()
            && validateText()
            && validateCreatedAt()
            && validateAuthor();

        return commentValid;
    }
}

class TweetFeed {
    constructor() {
        this.tweets = [];
    }

    _user = 'Kirill Borisyonok';

    get user() {
        return this._user;
    }

    addAll(tws) {
        let twsTweet = [];
        for (let tweet of tws) {
            twsTweet.push(new Tweet(tweet));
        }

        let tweetsNotValid = twsTweet.filter(tweet => !Tweet.validate(tweet));
        let tweetsValid = twsTweet.filter(tweet => Tweet.validate(tweet));

        for (let item of tweetsValid) {
            let tweet = new Tweet(item);
            this.tweets.push(tweet);
        }

        return tweetsNotValid;
    }

    clear() {
        this.tweets = [];
    }

    getPage(skip = 0, top = 10, filterConfig) {
        let filterTweetsArr = this.tweets.slice();

        // сработает в случае наличия filterConfig
        if (filterConfig) {
            let count = 0;
            // фильтрация по имени автора
            if (filterConfig.hasOwnProperty('author')) {
                count += 1;
                filterTweetsArr = filterTweetsArr.filter(item => item._author.toLowerCase().includes(filterConfig._author.toLowerCase()));
            }

            // фильтрация по тексту
            if (filterConfig.hasOwnProperty('text')) {
                count += 1;
                filterTweetsArr = filterTweetsArr.filter(item => item.text.toLowerCase().includes(filterConfig.text.toLowerCase()));
            }

            // фильтрация по дате
            if (filterConfig.hasOwnProperty('dateFrom') && filterConfig.hasOwnProperty('dateTo')) {
                count += 1;
                filterTweetsArr = filterTweetsArr.filter(item => (filterConfig.dateFrom <= item._createdAt && item._createdAt <= filterConfig.dateTo));
            } else if (filterConfig.hasOwnProperty('dateFrom')) {
                count += 1;
                filterTweetsArr = filterTweetsArr.filter(item => filterConfig.dateFrom <= item._createdAt);
            } else if (filterConfig.hasOwnProperty('dateTo')) {
                count += 1;
                filterTweetsArr = filterTweetsArr.filter(item => item._createdAt <= filterConfig.dateTo);
            }

            // фильтрация по хештегам
            if (filterConfig.hasOwnProperty('hashtags')) {
                count += 1;
                let hashtagsArr = filterConfig.hashtags;
                for (let hashtagsItem of hashtagsArr) {
                    filterTweetsArr = filterTweetsArr.filter(item => item.text.toLowerCase().includes(hashtagsItem.toLowerCase()));
                }
            }

            if (count === 0) {
                return [];
            }
        }

        return filterTweetsArr.sort((a, b) => b.createdAt - a.createdAt)
            .splice(skip, top);
    }

    get(id) {
        return this.tweets.find(item => item._id === id) ?? 'Твит с таким id не найден';
    }

    add(text) {
        if (this._user) {
            let tweet = {};
            let id = `${Math.round(0 + Math.random() * (10000000000000 - 0))}`;

            tweet.id = id;
            tweet.text = text;
            tweet.createdAt = new Date();
            tweet.author = this._user;
            tweet.comments = [];

            if (Tweet.validate(new Tweet(tweet))) {
                this.tweets.push(new Tweet(tweet));
                return true;
            }
            return false;
        }
        return 'Пользователь не определен';
    }

    edit(idTweet, text) {
        let tweetEdit = this.get(idTweet);

        if (tweetEdit._author === this._user) {
            if (typeof text === 'string' && text !== '' && text.length < Tweet.maxTextTweetLength) {
                tweetEdit.text = text;
                return true;
            }
            return false;
        }
        return 'гость либо это не Ваш твит';
    }

    remove(idTweetDelete) {
        let tweetDelete = this.get(idTweetDelete);

        let tweetDeleteIndex = this.tweets.findIndex(item => item._id === idTweetDelete);

        if (tweetDelete._author === this._user) {
            this.tweets.splice(tweetDeleteIndex, 1);
            return true;
        }
        return false;
    }

    addComment(idTweet, text) {
        if (this._user) {
            let tweetAddComment = this.get(idTweet);
            let comment = {};

            let idCommentsGen = `${Math.round(0 + Math.random() * (100000000000 - 0))}`;

            comment.id = idCommentsGen;
            comment.text = text;
            comment.createdAt = new Date();
            comment.author = this._user;

            if (Comment.validate(comment)) {
                tweetAddComment.comments.push(new Comment(comment));
                return true;
            }
            return false;
        }
        return 'Log in';
    }
}

let tweetFeed = new TweetFeed();

tweetFeed.addAll(tweets);
// console.log(tweetFeed.add('asd'));

// console.log(tweetFeed.edit('5', '123'));
// console.log(tweetFeed.remove('3'));

// console.log(tweetFeed.addComment('2', 'asdsadasd'));

// console.log(tweetFeed.getPage(0, 10, { hashtags: ['#js'] }));

// tweetFeed.clear();

// console.log(tweetFeed.get('1'));

console.log(tweetFeed);
