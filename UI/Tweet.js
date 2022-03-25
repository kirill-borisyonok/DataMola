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
        const validateKey = () => {
            return commentsMandatoryKey.filter(item => item in com).length === 4;
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
        const tweetsMandatoryKey = ['id', 'text', 'createdAt', 'author', 'comments'];

        // проверка на наличие обязательных полей
        const validateKey = () => {
            return tweetsMandatoryKey.filter(item => item in tw).length === 5;
        };

        // проверка на соответствие полей необходимым условиям
        const validateId = () => {
            return typeof tw.id === 'string' && tw.id !== '';
        };

        const validateText = () => {
            return typeof tw.text === 'string' && tw.text !== '' && tw.text.length < Tweet.maxTextTweetLength;
        };

        const validateCreatedAt = () => {
            return tw.createdAt instanceof Date;
        };

        const validateAuthor = () => {
            return typeof tw.author === 'string' && tw.author !== '';
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

class TweetFeed {
    constructor() {
        this.tweets = [];
    }

    _user = 'guest';

    get user() {
        return this._user;
    }

    set user(user) {
        this._user = user;
    }

    addAll(tws) {
        let twsTweet = tws.map(tweet => new Tweet(tweet));

        let tweetsNotValid = twsTweet.filter(tweet => !Tweet.validate(tweet));
        let tweetsValid = twsTweet.filter(tweet => Tweet.validate(tweet));

        this.tweets = this.tweets.concat(tweetsValid);

        return tweetsNotValid;
    }

    clear() {
        this.tweets = [];
    }

    getPage(skip = 0, top = 10, filterConfig = {}) {
        let filterTweetsArr = this.tweets.slice();

        // сработает в случае наличия filterConfig
        if (filterConfig) {
            let count = 0;
            // фильтрация по имени автора
            if ('author' in filterConfig) {
                count += 1;
                filterTweetsArr = filterTweetsArr.filter(item => item.author.toLowerCase().includes(filterConfig.author.toLowerCase()));
            }

            // фильтрация по тексту
            if ('text' in filterConfig) {
                count += 1;
                filterTweetsArr = filterTweetsArr.filter(item => item.text.toLowerCase().includes(filterConfig.text.toLowerCase()));
            }

            // фильтрация по дате
            if ('dateFrom' in filterConfig && 'dateTo' in filterConfig) {
                count += 1;
                filterTweetsArr = filterTweetsArr.filter(item => (filterConfig.dateFrom <= item.createdAt && item.createdAt <= filterConfig.dateTo));
            } else if ('dateFrom' in filterConfig) {
                count += 1;
                filterTweetsArr = filterTweetsArr.filter(item => filterConfig.dateFrom <= item.createdAt);
            } else if ('dateTo' in filterConfig) {
                count += 1;
                filterTweetsArr = filterTweetsArr.filter(item => item.createdAt <= filterConfig.dateTo);
            }

            // фильтрация по хештегам
            if ('hashtags' in filterConfig) {
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
        return this.tweets.find(item => item.id === id);
    }

    add(text) {
        if (!this.user || this.user === 'guest') {
            return false;
        }
        let tweet = {};
        let id = `${Math.round(0 + Math.random() * (10000000000000 - 0))}`;

        tweet.id = id;
        tweet.text = text;
        tweet.createdAt = new Date();
        tweet.author = this.user;
        tweet.comments = [];

        if (Tweet.validate(new Tweet(tweet))) {
            this.tweets.push(new Tweet(tweet));
            return true;
        }
        return false;
    }

    edit(idTweet, text) {
        let tweetEdit = this.get(idTweet);

        if (!tweetEdit || tweetEdit.author !== this.user) {
            return false;
        }

        if (typeof text === 'string' && text !== '' && text.length < Tweet.maxTextTweetLength) {
            tweetEdit.text = text;
            return true;
        }
        return false;
    }

    remove(idTweetDelete) {
        let tweetDelete = this.get(idTweetDelete);

        if (!tweetDelete || tweetDelete.author !== this.user) {
            return false;
        }

        let tweetDeleteIndex = this.tweets.findIndex(item => item.id === idTweetDelete);

        this.tweets.splice(tweetDeleteIndex, 1);
        return true;
    }

    addComment(idTweet, text) {
        if (!this.user || this.user === 'guest') {
            return false;
        }
        let tweetAddComment = this.get(idTweet);
        let comment = {};

        let idCommentsGen = `${Math.round(0 + Math.random() * (100000000000 - 0))}`;

        comment.id = idCommentsGen;
        comment.text = text;
        comment.createdAt = new Date();
        comment.author = this.user;

        if (Comment.validate(comment)) {
            tweetAddComment.comments.push(new Comment(comment));
            return true;
        }
        return false;
    }
}

let tweetFeed = new TweetFeed();

tweetFeed.user = 'Kirill Borisyonok';
tweetFeed.addAll(tweets);
// console.log(tweetFeed.add('asd'));

// console.log(tweetFeed.edit('5', '123'));
// console.log(tweetFeed.remove('3'));

// console.log(tweetFeed.addComment('2', '1'));

// console.log(tweetFeed.getPage(0, 10, { hashtags: ['#js'] }));
// console.log(tweetFeed.getPage(0, 10, { text: 'Привет' }));

// tweetFeed.clear();

// console.log(tweetFeed.get('20'));

// console.log(tweetFeed);
