"use strict"

const test = [{
    id: '21',
    text: '1',
    createdAt: new Date('2021-03-09T23:00'),
    author: 'c',
    comments: [{
        id: '1011',
        text: 'DataMola is cool',
        createdAt: new Date('2022-03-09T02:00'),
        author: 'Kirill',
    },
    {
        id: '1002',
        text: 'Хорошо, а у тебя?',
        createdAt: new Date('2022-03-09T02:00'),
        author: 'Иванов Иван',
    }],
}]

// for(let i = 0; i < 281; i++) {
//     test[0].comments[0].text += `${1}`
// }

const tweets = [
    {
        id: '1',
        text: 'Привет! #js #datamola',
        createdAt: new Date('2021-12-12T01:00'),
        author: 'Kirill Borisyonok',
        comments: [],
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
            author: 'Иванов Иван',
        }],
    },
    {
        id: '3',
        text: 'Привет! #datamola',
        createdAt: new Date('2021-12-12T20:00'),
        author: 'Kirill Borisyonok',
        comments: [],
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
            author: 'Иванов Иван',
        }],
    },
    {
        id: '5',
        text: 'Привет! #datamola',
        createdAt: new Date('2021-12-12T18:00'),
        author: 'Kirill Borisyonok',
        comments: [],
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
            author: 'Иванов Иван',
        }],
    },
    {
        id: '7',
        text: 'Привет! #datamola',
        createdAt: new Date('2021-12-12T15:00'),
        author: 'Kirill Borisyonok',
        comments: [],
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
            author: 'Иванов Иван',
        }],
    },
    {
        id: '9',
        text: 'Привет мир! #js #datamola',
        createdAt: new Date('2021-12-12T10:00'),
        author: 'Kirill Borisyonok',
        comments: [],
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
            author: 'Иванов Иван',
        }],
    },
    {
        id: '11',
        text: 'Привет мир! #datamola',
        createdAt: new Date('2021-12-12T19:10'),
        author: 'Kirill Borisyonok',
        comments: [],
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
            author: 'Иванов Иван',
        }],
    },
    {
        id: '13',
        text: 'Привет! #js',
        createdAt: new Date('2021-12-12T15:16'),
        author: 'Kirill Borisyonok',
        comments: [],
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
            author: 'Иванов Иван',
        }],
    },
    {
        id: '15',
        text: 'Привет! #js #datamola',
        createdAt: new Date('2021-01-12T21:10'),
        author: 'Kirill Borisyonok',
        comments: [],
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
            author: 'Иванов Иван',
        }],
    },
    {
        id: '17',
        text: 'Привет! #js #datamola',
        createdAt: new Date('2021-12-12T12:59'),
        author: 'Kirill Borisyonok',
        comments: [],
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
            author: 'Иванов Иван',
        }],
    },
    {
        id: '19',
        text: 'Привет мир! #js',
        createdAt: new Date('2021-03-09T19:29'),
        author: 'Kirill Borisyonok',
        comments: [],
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
            author: 'Иванов Иван',
        }],
    },
];

const twitterModule = (function () {

    let user = 'Петров Петр';

    /* Функция для получения массива твитов с сортировкой по дате создания и пагинацией. Возможность фильтрации по имени автора, дате, хештегам и тексту.
    ============================================================================
    ============================================================================*/
    function changeUser(usr) {
        user = usr;
    }

    /* Функция для получения массива твитов с сортировкой по дате создания и пагинацией. Возможность фильтрации по имени автора, дате, хештегам и тексту.
    ============================================================================
    ============================================================================*/
    function getTweets(skip = 0, top = 10, filterConfig) {

        let filterTweetsArr = tweets.slice();

        let count = 0;
        // сработает в случае наличия filterConfig
        if (filterConfig) {

            // фильтрация по имени автора
            if (filterConfig.hasOwnProperty('author')) {
                count += 1;
                filterTweetsArr = filterTweetsArr.filter(item => item.author.toLowerCase().includes(filterConfig.author.toLowerCase()));
            }

            // фильтрация по тексту
            if (filterConfig.hasOwnProperty('text')) {
                count += 1;
                filterTweetsArr = filterTweetsArr.filter(item => item.text.toLowerCase().includes(filterConfig.text.toLowerCase()));

            }

            // фильтрация по дате
            if (filterConfig.hasOwnProperty('dateFrom') && filterConfig.hasOwnProperty('dateTo')) {
                count += 1;
                filterTweetsArr = filterTweetsArr.filter(item => (filterConfig.dateFrom <= item.createdAt && item.createdAt <= filterConfig.dateTo));
            } else if (filterConfig.hasOwnProperty('dateFrom')) {
                count += 1;
                filterTweetsArr = filterTweetsArr.filter(item => filterConfig.dateFrom <= item.createdAt);
            } else if (filterConfig.hasOwnProperty('dateTo')) {
                count += 1;
                filterTweetsArr = filterTweetsArr.filter(item => item.createdAt <= filterConfig.dateTo);
            }

            // фильтрация по хештегам
            if (filterConfig.hasOwnProperty('hashtags')) {
                count += 1;
                let hashtagsArr = filterConfig.hashtags
                for (let hashtagsItem of hashtagsArr) {
                    filterTweetsArr = filterTweetsArr.filter(item => item.text.toLowerCase().includes(hashtagsItem.toLowerCase()));
                }
            }

            if (count == 0) {
                return [];
            }
        }

        return filterTweetsArr.sort((a, b) => b.createdAt - a.createdAt)
            .splice(skip, top);

    }

    /* Получить твит из массива tweets с определенным id.
    ============================================================================
    ============================================================================*/
    function getTweet(id) {
        return tweets.find(item => item.id === id) ?? 'Твит с таким id не найден';
    }

    /* Функция для проверки соответствия твитов. Возвращает true либо false
    ============================================================================
    ============================================================================*/
    function validateTweet(tw) {

        const tweetsMandatoryKey = ['id', 'text', 'createdAt', 'author', 'comments'];

        // проверка на наличие обязательных полей
        const validateKey = function () {
            let trueKey = 0;
            for (let tweetsKey of tweetsMandatoryKey) {
                if (tw.hasOwnProperty(tweetsKey)) {
                    trueKey += 1;
                } else {
                    console.log(`Введите ${tweetsKey}`)
                }
            }
            return trueKey == 5;
        };

        // проверка на соответствие полей необходимым условиям
        const validateId = function () {
            if (typeof tw.id === 'string' && tw.id != '') {
                for (let item of tweets) {
                    if (item.id == tw.id) {
                        console.log('Не уникальный id');
                        return false;
                    }
                }
                return true;
            }
        }

        const validateText = function () {
            if (typeof tw.text === 'string' && tw.text != '') {
                let numberChar = tw.text.split('').length;
                if (numberChar > 280) {
                    console.log(`Больше 280 символов - ${numberChar}`);
                    return false;
                }
                return true;
            }
            return false;
        }

        const validateCreatedAt = function () {
            return tw.createdAt instanceof Date;
        }

        const validateAuthor = function () {
            return typeof tw.author === 'string' && tw.author != '';
        }

        const validateComment = function () {
            return Array.isArray(tw.comments);
        }

        const tweetsValid = validateKey()
            && validateId()
            && validateText()
            && validateCreatedAt()
            && validateAuthor()
            && validateComment();

        return tweetsValid;
    }

    /* Функция для добавления твита. Возвращает true либо false
    ============================================================================
    ============================================================================*/
    function addTweet(text) {
        let tweet = {};
        let id = idGeneration();
        addFields();

        function idGeneration() {
            let idAll = [];
            for (let item of tweets) {
                idAll.push(item.id);
            }
            let idGen = idAll.length + 1
            return idGen;
        }

        function addFields() {
            tweet.id = `${id}`;
            tweet.text = text;
            tweet.createdAt = new Date();
            tweet.author = user;
            tweet.comments = [];
        }

        if (validateTweet(tweet)) {
            tweets.push(tweet);
            return true;
        }
        return false;
    }

    /* Функция для изменения твита. Возвращает true либо false
        ============================================================================
        ============================================================================*/
    function editTweet(idTweet, text) {
        let tweetEdit = getTweet(idTweet);

        if (tweetEdit.author == user) {
            let validateText = function (text) {
                if (typeof text == 'string' && text != '') {
                    let numberChar = text.split('').length;
                    if (numberChar > 280) {
                        console.log(`Больше 280 символов - ${numberChar}`);
                        return false;
                    }
                    return true;
                }
                return false;
            }

            if (validateText(text)) {
                tweetEdit.text = text;
                return true;
            } else return false;

        }
        return false;
    }

    /* Функция для удаления твита. Возвращает true либо false
    ============================================================================
    ============================================================================*/
    function removeTweet(idTweetDelete) {
        let tweetDelete = getTweet(idTweetDelete);

        let tweetDeleteIndex = tweets.findIndex(item => item.id === idTweetDelete);

        if (tweetDelete.author == user) {
            tweets.splice(tweetDeleteIndex, 1)
            return true;
        } else return false;

    }

    /* Функция для проверки соответствия комментов. Возвращает true либо false
        ============================================================================
        ============================================================================*/
    function validateComment(com) {

        const commentsMandatoryKey = ['id', 'text', 'createdAt', 'author'];

        // проверка на наличие обязательных полей
        const validateKey = function () {
            let trueKey = 0;
            for (let commentsKey of commentsMandatoryKey) {
                if (com.hasOwnProperty(commentsKey)) {
                    trueKey += 1;
                } else {
                    console.log(`Введите в комментарий ${commentsKey}`)
                }
            }
            return trueKey == 4;
        };

        // проверка на соответствие полей необходимым условиям
        const validateId = function () {
            let commentsAll = [];
            if (typeof com.id === 'string' && com.id != '') {
                for (let tweet of tweets) {
                    for (let comment of tweet.comments) {
                        commentsAll.push(comment);
                    }
                }

                for (let item of commentsAll) {
                    if (item.id == com.id) {
                        console.log('Не уникальный id');
                        return false;
                    }
                }
                return true;
            }
            return false;
        }

        const validateText = function () {
            if (typeof com.text === 'string' && com.text != '') {
                let numberChar = com.text.split('').length;
                if (numberChar > 280) {
                    console.log(`Больше 280 символов - ${numberChar}`);
                    return false;
                }
                return true;
            }
            return false;
        }

        // console.log(validateText());


        const validateCreatedAt = function () {
            return com.createdAt instanceof Date;
        }

        // console.log(validateCreatedAt());

        const validateAuthor = function () {
            return typeof com.author === 'string' && com.author != '';
        }

        // console.log(validateAuthor());

        const tweetsValid = validateKey()
            && validateId()
            && validateText()
            && validateCreatedAt()
            && validateAuthor();

        return tweetsValid;
    }

    /* Функция для добавления коммента. Возвращает true либо false
    ============================================================================
    ============================================================================*/
    function addComment(idTweet, text) {

        let tweetAddComment = getTweet(idTweet);

        let comment = {};

        let id = idGeneration();
        addFields();

        function idGeneration() {
            let commentsAll = [];

            for (let tweet of tweets) {
                for (let comment of tweet.comments) {
                    commentsAll.push(comment);
                }
            }

            let idCommentsAll = [];

            for (let item of commentsAll) {
                idCommentsAll.push(item.id);
            }

            let idCommentsGen = `${Math.max.apply(null, idCommentsAll) + 1}`;

            return idCommentsGen;
        }

        function addFields() {
            comment.id = `${id}`;
            comment.text = text;
            comment.createdAt = new Date();
            comment.author = user;
        }

        if (validateComment(comment)) {
            tweetAddComment.comments.push(comment);
            tweetAddComment.comments.sort((a, b) => b.createdAt - a.createdAt)
            return true;
        } else return false;

    }

    return {
        changeUser,
        getTweets,
        getTweet,
        validateTweet,
        addTweet,
        editTweet,
        removeTweet,
        validateComment,
        addComment
    }
}());


// console.log(twitterModule.getTweet('1'));
// console.log(twitterModule.getTweets(0, 10, { hashtags: ['#JS'] }));
// console.log(twitterModule.addTweet('sad'));
// console.log(twitterModule.editTweet('21', 'life'))
// console.log(twitterModule.removeTweet('21'));
// console.log(twitterModule.addComment('20', '123'));
// console.log(tweets);