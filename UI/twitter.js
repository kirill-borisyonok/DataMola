"use strict"

let test = [{
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

(function() {

    
    let user = 'Петров Петр';

    /* Функция для получения массива твитов с сортировкой по дате создания и пагинацией. Возможность фильтрации по имени автора, дате, хештегам и тексту.
    ============================================================================
    ============================================================================*/
    function changeUser(usr) {
        user = usr;
    }

    // changeUser('Kirill Borisyonok');

    // console.log(user);
    

    /* Функция для получения массива твитов с сортировкой по дате создания и пагинацией. Возможность фильтрации по имени автора, дате, хештегам и тексту.
    ============================================================================
    ============================================================================*/
    function getTweets(skip = 0, top = 10, filterConfig) {
        
        let filterTweetsArr = tweets.slice();

        // сработает в случае наличия filterConfig
        if(filterConfig) {
                    
            // фильтрация по имени автора
            if(filterConfig.hasOwnProperty('author')) {
                filterTweetsArr = filterTweetsArr.filter(item => item.author.includes(filterConfig.author));
            }

            // фильтрация по тексту
            if(filterConfig.hasOwnProperty('text')) {
                filterTweetsArr = filterTweetsArr.filter(item => item.text.includes(filterConfig.text));
                
            }

            // фильтрация по дате
            if(filterConfig.hasOwnProperty('dateFrom') && filterConfig.hasOwnProperty('dateTo')) {
                filterTweetsArr = filterTweetsArr.filter(item => (filterConfig.dateFrom <= item.createdAt && item.createdAt <= filterConfig.dateTo));
            } else if(filterConfig.hasOwnProperty('dateFrom')) {
                filterTweetsArr = filterTweetsArr.filter(item => filterConfig.dateFrom <= item.createdAt);
            } else if(filterConfig.hasOwnProperty('dateTo')) {
                filterTweetsArr = filterTweetsArr.filter(item => item.createdAt <= filterConfig.dateTo);
            }
            
            // фильтрация по хештегам
            if(filterConfig.hasOwnProperty('hashtags')) {
                let hashtagsArr = filterConfig.hashtags
                for(let hashtagsItem of hashtagsArr) {
                    filterTweetsArr = filterTweetsArr.filter(item => item.text.includes(hashtagsItem));
                }
            }
        }

        return filterTweetsArr.sort((a, b) => b.createdAt - a.createdAt)
                              .splice(skip, top);
            
    }

    console.log(getTweets(0, 10, {author: 'Kirill'}));


    /* Получить твит из массива tweets с определенным id.
    ============================================================================
    ============================================================================*/
    function getTweet(id) {
        return tweets.find(item => item.id === id) ?? 'Твит с таким id не найден';
    }

    console.log(getTweet('20')); 
    

    /* Функция для проверки соответствия твитов. Возвращает true либо false
    ============================================================================
    ============================================================================*/
    function validateTweet(tw) {

        let tweetsMandatoryKey = ['id', 'text', 'createdAt', 'author', 'comments'];
        
        // проверка на наличие обязательных полей
        let validateKey = function() {
            let trueKey = 0;
                for(let tweetsKey of tweetsMandatoryKey) {
                    if(tw.hasOwnProperty(tweetsKey)) {
                        trueKey += 1;
                    } else {
                        console.log(`Введите ${tweetsKey}`)
                    }
            }
            return trueKey == 5;
        };

        // проверка на соответствие полей необходимым условиям
        let validateId = function() {
            if(typeof tw.id == 'string' && tw.id != '') {
                for(let item of tweets) {
                    if(item.id == tw.id) {
                        console.log('Не уникальный id');
                        return false;
                    }
                }
                return true;
            } 
        }

        let validateText = function() {
            if(typeof tw.text == 'string' && tw.text != '') {
                let numberChar = tw.text.split('').length;
                if(numberChar > 280) {
                    console.log(`Больше 280 символов - ${numberChar}`);
                    return false;
                }
                return true;
            }
            return false;
        }

        // console.log(validateText());


        let validateCreatedAt = function() {
            return tw.createdAt instanceof Date;
        }

        // console.log(validateCreatedAt());

        let validateAuthor = function() {
            return typeof tw.author == 'string' && tw.author != '';
        }

        // console.log(validateAuthor());

        let validateComment = function() {
            return Array.isArray(tw.comments);
        }    

        // console.log(validateComment());
        
        let tweetsValid = validateKey() 
                          && validateId() 
                          && validateText() 
                          && validateCreatedAt() 
                          && validateAuthor() 
                          && validateComment();

        return tweetsValid;
    }

    console.log(validateTweet(test[0]));

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
        

        if(validateTweet(tweet)) {
            tweets.push(tweet);
            return true;
        } else return false;
    }

    addTweet('1 #js');  
    console.log(getTweets(0, 10));

/* Функция для изменения твита. Возвращает true либо false
    ============================================================================
    ============================================================================*/
    function editTweet(idTweet, text) {
        let tweetEdit = tweets.find(item => item.id === idTweet);

            if(tweetEdit.author == user) {
                let validateText = function(text) {
                    if(typeof text == 'string' && text != '') {
                        let numberChar = text.split('').length;
                        if(numberChar > 280) {
                            console.log(`Больше 280 символов - ${numberChar}`);
                            return false;
                        }
                        return true;
                    }
                    return false;
                }
    
                let editTweet = function () {
                    if(validateText(text)) {
                        tweetEdit.text = text;
                        return true;
                    } else return false;
                }
        
                return editTweet();
            } 
            return false;         
    }

    console.log(editTweet('20', 'm'));  
    console.log(getTweets(0, 10)); 
    
    
    /* Функция для удаления твита. Возвращает true либо false
    ============================================================================
    ============================================================================*/
    function removeTweet(idTweetDelete) {
        let tweetDelete = tweets.find(item => item.id === idTweetDelete);
        
        let tweetDeleteIndex = tweets.findIndex(item => item.id === idTweetDelete);

        if(tweetDelete.author == user) {
            tweets.splice(tweetDeleteIndex, 1)
            return true;
        } else return false; 
                
    }

    console.log(removeTweet('6')); 
    console.log(getTweets(0, 30)); 

/* Функция для проверки соответствия комментов. Возвращает true либо false
    ============================================================================
    ============================================================================*/
    function validateComment(com) {

        let commentsMandatoryKey = ['id', 'text', 'createdAt', 'author'];
        
        // проверка на наличие обязательных полей
        let validateKey = function() {
            let trueKey = 0;
                for(let commentsKey of commentsMandatoryKey) {
                    if(com.hasOwnProperty(commentsKey)) {
                        trueKey += 1;
                    } else {
                        console.log(`Введите в комментарий ${commentsKey}`)
                    }
            }
            return trueKey == 4;
        };

        // проверка на соответствие полей необходимым условиям
        let validateId = function() {
            let commentsAll = [];
            if(typeof com.id == 'string' && com.id != '') {
                for(let tweet of tweets) {
                    for(let comment of tweet.comments) {
                        commentsAll.push(comment);
                    }
                }

            for(let item of commentsAll) {
                if(item.id == com.id) {
                    console.log('Не уникальный id');
                    return false;
                } 
            }
             return true;
            } 
            return false;
        }

        let validateText = function() {
            if(typeof com.text == 'string' && com.text != '') {
                let numberChar = com.text.split('').length;
                if(numberChar > 280) {
                    console.log(`Больше 280 символов - ${numberChar}`);
                    return false;
                }
                return true;
            }
            return false;
        }

        // console.log(validateText());


        let validateCreatedAt = function() {
            return com.createdAt instanceof Date;
        }

        // console.log(validateCreatedAt());

        let validateAuthor = function() {
            return typeof com.author == 'string' && com.author != '';
        }

        // console.log(validateAuthor());
        
        let tweetsValid = validateKey() 
                          && validateId() 
                          && validateText() 
                          && validateCreatedAt() 
                          && validateAuthor();


        return tweetsValid;
    }

    console.log(validateComment(test[0].comments[0]));

    /* Функция для добавления коммента. Возвращает true либо false
    ============================================================================
    ============================================================================*/
    function addComment(idTweet, text) {
        
        let tweetAddComment = tweets.find(item => item.id === idTweet);

        let comment = {};

        let id = idGeneration();
        addFields();
    
        function idGeneration() {
            let commentsAll = [];
    
            for(let tweet of tweets) {
                for(let comment of tweet.comments) {
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
    
        if(validateComment(comment)) {
            tweetAddComment.comments.push(comment);
            tweetAddComment.comments.sort((a, b) => b.createdAt - a.createdAt)
            return true;
        } else return false;
        
    }

    // let func = setInterval(() => { console.log(addComment('21', '1')); console.log(getTweets(tweets))}, 1000);
    // setTimeout(() => {clearInterval(func)}, 3000);

}());