'use strict';

const usersArr = [
    {
        name: 'Kirill Borisyonok',
        password: '123'
    },
    {
        name: 'Anna',
        password: '111'
    },
    {
        name: 'Eugen',
        password: '000'
    },
    {
        name: '123',
        password: '123'
    }
];

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
        this._createdAt = new Date(tweet.createdAt);
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

class TweetFeed {
    constructor() {
        this.tweets = TweetFeed.restore().map(tweet => new Tweet(tweet));
    }

    _user = JSON.parse(localStorage.getItem('user'));

    get user() {
        return this._user;
    }

    set user(user) {
        this._user = `${user}`;
        localStorage.setItem('user', JSON.stringify(user));
    }

    static restore() {
        return JSON.parse(localStorage.getItem('tweets'));
    }

    save() {
        const tweet = this.tweets.map(item => item = {
            id: item.id,
            text: item.text,
            createdAt: item.createdAt,
            author: item.author,
            comments: item.comments.map(comment => comment = {
                id: comment.id,
                text: comment.text,
                createdAt: comment.createdAt,
                author: comment.author
            })
        });
        localStorage.setItem('tweets', JSON.stringify(tweet))
    }

    addAll(tws) {
        let twsTweet = tws.map(tweet => new Tweet(tweet));

        let tweetsNotValid = twsTweet.filter(tweet => !Tweet.validate(tweet));
        let tweetsValid = twsTweet.filter(tweet => Tweet.validate(tweet));

        this.tweets = this.tweets.concat(tweetsValid);

        this.save();

        return tweetsNotValid;
    }

    clear() {
        this.tweets = [];

        this.save();
    }

    getPage(skip = 0, top = 10, filterConfig = {}) {
        let filterTweetsArr = this.tweets.slice();

        // сработает в случае наличия filterConfig
        if (Object.keys(filterConfig).length !== 0) {
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

            this.save();

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

            this.save();

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

        this.save();

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

            this.save();

            return true;
        }
        return false;
    }
}

class UserList {
    constructor() {
        this.users = UserList.restore();
    }

    static restore() {
        return JSON.parse(localStorage.getItem('userList'));
    }

    save() {
        localStorage.setItem('userList', JSON.stringify(this.users));
    }

    addUser(name, password) {
        if (!name || typeof name !== 'string') {
            return false;
        }

        if (!password || typeof password !== 'string') {
            return false;
        }

        const usersName = this.users.map(item => item.name);

        if (usersName.includes(name)) {
            return false;
        }

        this.users.push({ name: name, password: password });

        this.save();

        return true;
    }
}

class TweetFeedView {
    constructor(containerId) {
        this.containerId = document.getElementById(containerId);
    }

    _editTweetId = '';

    get editTweetId() {
        return this._editTweetId;
    }

    set editTweetId(editTweetId) {
        this._editTweetId = editTweetId;
    }

    tweetEvent(event) {
        if (event.target.closest('#tweetDelete')) {
            const tweetDelete = event.target.closest('SECTION');
            controller.removeTweet(`${tweetDelete.id}`);
            controller.headerView.display(controller.tweetFeed.user);
            return;
        }

        if (event.target.closest('#tweetEdit')) {
            const tweetEdit = event.target.closest('SECTION');
            const tweetId = tweetEdit.id;
            const tweetEditText = controller.tweetFeed.get(tweetId).text;
            formSet.formSetInput.value = tweetEditText;
            formSet.formSetBtn.classList.add('hide');
            formSet.formEditBtn.classList.remove('hide');
            controller.tweetsFeedView.editTweetId = tweetId;
            return;
        }

        if (event.target.closest('[data-tweets]')) {
            controller.showTweet(event.target.closest('[data-tweets]').id);
            controller.headerView.display(controller.tweetFeed.user);
            const loadMore = document.getElementById('loadMore');

            loadMore.classList.add('hide');
        }
    }

    addTweetsLoad() {
        const tweetsTape = document.getElementById('tweetsTape');
        const newTop = tweetsTape.childElementCount + 10;
        controller.getFeed(0, newTop);
    }

    addTweets(event) {
        event.preventDefault();
        controller.addTweet(`${formSet.formSetInput.value}`);
        formSet.formSetInput.value = '';
    }

    editTweets(event) {
        event.preventDefault();
        controller.editTweet(controller.tweetsFeedView.editTweetId, formSet.formSetInput.value);
        formSet.formSetInput.value = '';
        formSet.formSetBtn.classList.remove('hide');
        formSet.formEditBtn.classList.add('hide');
    }

    filter(event) {
        event.preventDefault();
        const filterInput = {};
        const filterForm = document.forms.formFilter;

        if (filterForm.filterAuthor.value) {
            filterInput.author = filterForm.filterAuthor.value;
        }

        if (filterForm.filterText.value) {
            filterInput.text = filterForm.filterText.value;
        }

        if (filterForm.filterDateFrom.value) {
            filterInput.dateFrom = new Date(filterForm.filterDateFrom.value);
        }

        if (filterForm.filterDateTo.value) {
            filterInput.dateTo = new Date(filterForm.filterDateTo.value);
        }

        if (filterForm.filterTags.value) {
            filterInput.hashtags = filterForm.filterTags.value;
        }

        if (Object.keys(filterInput).length !== 0) {
            controller.getFeed(0, controller.tweetFeed.tweets.length, filterInput, controller.tweetFeed.user);
            const loadMore = document.getElementById('loadMore');
            loadMore.classList.add('hide');
        }
    }

    resetFilter() {
        controller.getFeed(0, 10, {}, controller.tweetFeed.user);
    }

    display(tweetsArr, user) {
        const tweetsMain = document.getElementById('tweetsMain');
        const tweetsContainer = document.getElementById('tweetsContainer');
        const tweetsSet = document.getElementById('tweetsSet');
        const tweetsRight = document.getElementById('tweetsRight');

        if (tweetsRight) {
            tweetsRight.classList.remove('hide');
        }

        if (!tweetsContainer) {
            tweetsMain.innerHTML = `<div id="tweetsContainer" class="container">
            <div class="tweets__inner">
                <div class="tweets__left">
                    <div id="tweetsSet" class="tweets__set">
                        <div class="tweets__set-inner">
                            <img class="tweets__set-photo" src="images/my_photo.png" alt="user photo">
                            <form name="formSet" class="tweets__set-form" action="/" method="post">
                                <textarea id="formSetInput" class="tweets__set-form-input" type="text" maxlength="280"
                                    placeholder="What's happening?"></textarea>
                                <div class="tweets__set-form-button">
                                    <input id="formSetBtn" type="submit" class="btn--submit" href="#" value="Tell">
                                    <input id="formEditBtn" type="submit" class="btn--submit hide" href="#" value="Edit">
                                </div>
                            </form>
                        </div>
                    </div> <!-- /.tweets__set -->
                    <div id="tweetsTape" class="tweets__tape">
                    </div> <!-- /.tweets__tape -->
                    <div class="button__tweets-footer">
                        <button id="loadMore" class="btn btn--load hide">load more</button>
                    </div>
                </div> <!-- /.tweets__left -->
                <div id="tweetsRight" class="tweets__right">
                    <div class="tweets__filter">
                        <div class="tweets__filter-inner">
                            <h2 class="tweets__filter-title">Filter</h2>
                            <form name="formFilter" class="filter__form" action="/" method="post">
                                <div class="filter__form-item">
                                    <label class="filter__input-title" for="filterAuthor">Search tweets by author
                                        name</label>
                                    <input class="filter__input" id="filterAuthor" list="dataLIst" type="text"
                                        placeholder="Select author">
                                </div>
                                <div class="filter__form-item">
                                    <label class="filter__input-title" for="filterDate">Search tweets by date and
                                        time</label>
                                    <div class="filter__input-date-elem">
                                        <div class="filter__input-text">from</div>
                                        <div class="filter__input-datetime">
                                            <input id="filterDateFrom" class="filter__input-date" id="filterDate" type="datetime-local">
                                        </div>
                                    </div>
                                    <div class="filter__input-date-elem">
                                        <div class="filter__input-text">to</div>
                                        <div class="filter__input-datetime">
                                            <input id="filterDateTo" class="filter__input-date" type="datetime-local">
                                        </div>
                                    </div>
                                </div>
                                <div class="filter__form-item">
                                    <label class="filter__input-title" for="filterText">Search tweets by text</label>
                                    <input class="filter__input" id="filterText" type="text" placeholder="Select text">
                                </div>
                                <div class="filter__form-item">
                                    <label class="filter__input-title" for="filterTags">Search tweets by #tags</label>
                                    <input class="filter__input" id="filterTags" type="text" placeholder="Select #tags">
                                </div>
                                <div class="filter__footer">
                                    <input id="resetForm" class="btn btn--white btn--filter" type="reset" value="clear"></button>
                                    <input id="searchForm" class="btn btn--filter" type="submit" value="search"></button>
                                </div>
                            </form>
                        </div>
                    </div> <!-- /.tweets__filter  -->
                </div> <!-- /.tweets__rigth  -->
            </div> <!-- /.tweets__inner  -->
        </div> <!-- /.container  -->`;

            this.containerId = document.getElementById('tweetsTape');
        }

        if (user !== 'guest') {
            if (tweetsSet) {
                tweetsSet.classList.remove('hide');
            }
        }

        if (user === 'guest') {
            if (tweetsSet) {
                tweetsSet.classList.add('hide');
            }
        }

        const date = (date) => {
            const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            let dateGood = `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`;
            return dateGood;
        };

        const time = (time) => {
            let hoursGood = `${time.getHours()}`;
            if (hoursGood.length === 1) {
                hoursGood = `0${hoursGood}`;
            }

            let minutesGood = `${time.getMinutes()}`;
            if (minutesGood.length === 1) {
                minutesGood = `0${minutesGood}`;
            }

            let timeGood = `${hoursGood}:${minutesGood}`;
            return timeGood;
        };

        const textGood = (text) => {
            text = text.split(' ')
                .map(item => {
                    if (item[0] === '#') return `<span class="tweets__tags">${item}</span>`;
                    return item;
                })
                .join(' ');
            return text;
        };

        const tweetsItems = tweetsArr.map(item => {
            if (item.author === user) {
                return `<section id="${item.id}" data-tweets="tweet" class="tweets__item">
                <div class="tweets__item-inner">  
                    <img class="tweets__item-img" src="images/my_photo.png" alt="user photo">
                    
                    <div class="tweets__item-content">
                        <div class="tweets__item-title">
                            <a class="tweets__item-author" href="#">${item.author}</a>
                            <time pubdate class="tweets__item-date"><span class="dot">&#149</span> ${date(item.createdAt)} <b>${time(item.createdAt)}</b></time>
                        </div>
                        <div class="tweets__text">${textGood(item.text)}</div>
                    </div> 
                </div>
                <div class="tweets__item-footer">
                    <div class="comments">
                        <svg class="comments__img">
                            <use xlink:href="#message"></use>
                        </svg>
                        <div class="comments__text">${item.comments.length}</div>
                    </div>
                    <div class="tweets__item-footer-button">
                        <button id="tweetDelete" class="btn--sml btn--white" type="button">Delete</button>
                        <button id="tweetEdit" class="btn btn--sml" type="button">Edit</button>
                    </div>
                </div>
            </section>`;
            } else {
                return `<section id="${item.id}" data-tweets="tweet" class="tweets__item">
                            <div class="tweets__item-inner">  
                                <img class="tweets__item-img" src="images/my_photo.png" alt="user photo">
                                
                                <div class="tweets__item-content">
                                    <div class="tweets__item-title">
                                        <a class="tweets__item-author" href="#">${item.author}</a>
                                        <time pubdate class="tweets__item-date"><span class="dot">&#149</span> ${date(item.createdAt)} <b>${time(item.createdAt)}</b></time>
                                    </div>
                                    <div class="tweets__text">${textGood(item.text)}</div>
                                </div> 
                            </div>
                            <div class="tweets__item-footer">
                                <div class="comments">
                                    <svg class="comments__img">
                                        <use xlink:href="#message"></use>
                                    </svg>
                                    <div class="comments__text">${item.comments.length}</div>
                                </div>
                            </div>
                        </section>`
            }
        }).join('\n');

        this.containerId.innerHTML = `${tweetsItems}`;

        const loadMore = document.getElementById('loadMore');

        if (this.containerId.childElementCount < controller.tweetFeed.tweets.length) {
            loadMore.classList.remove('hide');
        } else {
            loadMore.classList.add('hide');
        }

        this.containerId.removeEventListener('click', this.tweetEvent);
        this.containerId.addEventListener('click', this.tweetEvent);

        loadMore.removeEventListener('click', this.addTweetsLoad);
        loadMore.addEventListener('click', this.addTweetsLoad);

        // Добавление твита
        const formSet = document.forms.formSet;

        formSet.formSetBtn.removeEventListener('click', this.addTweets);
        formSet.formSetBtn.addEventListener('click', this.addTweets);

        formSet.formEditBtn.removeEventListener('click', this.editTweets);
        formSet.formEditBtn.addEventListener('click', this.editTweets);

        const filterForm = document.forms.formFilter;

        filterForm.searchForm.removeEventListener('click', this.filter);
        filterForm.searchForm.addEventListener('click', this.filter);

        filterForm.resetForm.removeEventListener('click', this.resetFilter);
        filterForm.resetForm.addEventListener('click', this.resetFilter);
    }
}
class TweetView {
    constructor(containerId) {
        this.containerId = document.getElementById(containerId);
    }

    addCommentView(event) {
        event.preventDefault();
        const setComment = document.forms.setComment;
        const tweetNow = controller.tweetFeed.tweets.find(item => item.id === document.querySelector('SECTION').id);
        controller.tweetFeed.addComment(tweetNow.id, setComment.setCommentInput.value);
        controller.tweetView.display(tweetNow, controller.tweetFeed.user);
        controller.headerView.display(controller.tweetFeed.user);
    }

    display(tweet, user) {
        const tweetsSet = document.getElementById('tweetsSet');
        const tweetsRight = document.getElementById('tweetsRight');
        const buttonHeader = document.getElementById('buttonHeader');

        tweetsSet.classList.add('hide');
        tweetsRight.classList.add('hide');

        let date = (date) => {
            const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            let dateGood = `${new Date(date).getDate()} ${month[new Date(date).getMonth()]} ${new Date(date).getFullYear()}`;
            return dateGood;
        };

        let time = (time) => {
            let hoursGood = `${new Date(time).getHours()}`;
            if (hoursGood.length === 1) {
                hoursGood = `0${hoursGood}`;
            }

            let minutesGood = `${new Date(time).getMinutes()}`;
            if (minutesGood.length === 1) {
                minutesGood = `0${minutesGood}`;
            }

            let timeGood = `${hoursGood}:${minutesGood}`;
            return timeGood;
        };

        let textGood = (text) => {
            text = text.split(' ')
                .map(item => {
                    if (item[0] === '#') return `<span class="tweets__tags">${item}</span>`;
                    return item;
                })
                .join(' ');
            return text;
        };

        let tweetItem = '';

        if (tweet.author === user) {
            tweetItem = `<section id="${tweet.id}" class="tweets__item tweets__item--page">
                <div class="tweets__item-inner">  
                <img class="tweets__item-img" src="images/my_photo.png" alt="user photo">
            
                <div class="tweets__tape-item-content">
                    <div class="tweets__item-title">
                        <a class="tweets__item-author" href="#">${tweet.author}</a>
                        <time pubdate class="tweets__item-date"><span class="dot">&#149</span> ${date(tweet.createdAt)} <b>${time(tweet.createdAt)}</b></time>
                    </div>
                    <div class="tweets__text">${textGood(tweet.text)}</div>
                </div> 
                </div>
                <div class="tweets__item-footer">
                    <div class="comments">
                        <svg class="comments__img">
                            <use xlink:href="#message"></use>
                        </svg>
                        <div class="comments__text">${tweet.comments.length}</div>
                    </div>
                    <div class="tweets__item-footer-button">
                        <button id="tweetDelete" class="btn--sml btn--white" type="button">Delete</button>
                        <button id="tweetEdit" class="btn btn--sml" type="button">Edit</button>
                    </div>
                </div>
            </section>`;
        } else {
            tweetItem = `<section id="${tweet.id}" class="tweets__item tweets__item--page">
            <div class="tweets__item-inner">  
            <img class="tweets__item-img" src="images/my_photo.png" alt="user photo">
        
            <div class="tweets__tape-item-content">
                <div class="tweets__item-title">
                    <a class="tweets__item-author" href="#">${tweet.author}</a>
                    <time pubdate class="tweets__item-date"><span class="dot">&#149</span> ${date(tweet.createdAt)} <b>${time(tweet.createdAt)}</b></time>
                </div>
                <div class="tweets__text">${textGood(tweet.text)}</div>
            </div> 
            </div>
            <div class="tweets__item-footer">
                <div class="comments">
                    <svg class="comments__img">
                        <use xlink:href="#message"></use>
                    </svg>
                    <div class="comments__text">${tweet.comments.length}</div>
                </div>
            </div>
        </section>`;
        }

        const comments = tweet.comments.map(comment => `<div id="${comment.id}" class="comment__item">
                <div class="comment__item-inner">  
                    <img class="comment__item-img" src="images/my_photo.png" alt="user photo">
                        
                    <div class="comment__item-content">
                        <div class="comment__item-title">
                            <a class="comment__item-author" href="#">${comment.author}</a>
                            <time pubdate class="comment__item-date">${date(comment.createdAt)} <b>${time(comment.createdAt)}</b></time>
                        </div>
                        <div class="comment__text">${textGood(comment.text)}</div>
                    </div> 
                </div>
            </div>`).join('\n');

        this.containerId = document.getElementById('tweetsTape');

        this.containerId.innerHTML = `${tweetItem}\n
                <div class="comment-title">Comments</div>\n
                ${comments}\n
                <div id="commentMainSet" class="comment__set">
                <div class="comment__set-inner">
                    <img class="comment__set-photo" src="images/my_photo.png" alt="user photo">
                    <form name="setComment" class="comment__set-form">
                        <textarea id="setCommentInput" class="comment__set-form-input" type="text" maxlength="280" placeholder="Enter your comment"></textarea>
                        <div class="comment__set-form-button">
                            <button id="setCommentBtn" type="submit" class="btn--submit" href="#">Add</button>
                        </div> 
                    </form>
                </div> <!-- /.comment__set -->
            </div> `;

        const commentMainSet = document.getElementById('commentMainSet');
        const setComment = document.forms.setComment;

        if (user !== 'guest') {
            if (commentMainSet) {
                commentMainSet.classList.remove('hide');
            }
        }

        if (user === 'guest') {
            if (commentMainSet) {
                commentMainSet.classList.add('hide');
            }
        }

        setComment.setCommentBtn.removeEventListener('click', this.addCommentView);
        setComment.setCommentBtn.addEventListener('click', this.addCommentView);
    }
}

class FilterView {
    constructor(containerId) {
        this.containerId = document.getElementById(containerId);
    }

    display(tweetsArr) {
        let authorArr = tweetsArr.map(item => item.author);
        authorArr = Array.from(new Set(authorArr));
        this.containerId.insertAdjacentHTML('afterend', `<datalist id="dataLIst">
        ${authorArr.map(item => `<option value="${item}"></option>`).join('\n')}</datalist>`);
    }
}

class RegistrationView {
    constructor(containerId) {
        this.containerId = document.getElementById(containerId);
    }

    display(user) {
        if (user || user === 'guest') {
            return;
        }

        const tweetsSet = document.getElementById('tweetsSet');
        const tweetsRight = document.getElementById('tweetsRight');

        if (tweetsSet) {
            tweetsSet.classList.add('hide');
        }
        if (tweetsRight) {
            tweetsRight.classList.add('hide');
        }

        this.containerId.innerHTML = `<div class="sign-up__left">
        <img src="images/sign up image.png" alt="image">
            </div>
            <div class="sign-up__rigth">
                <div class="sign-up__form">
                    <div class="sign-up__form-title">Tell the world your
                        interesting story</div>
                    <form name="formSignUp" class="sign-up__form-inner" method="post">
                        <input id="formSignUpName" class="sign-up__form-input" type="text" placeholder="Enter your login">
                        <input id="formSignUpPassword" class="sign-up__form-input" type="text" placeholder="Enter your password">
                        <input id="formSignUpPasswordAgain" class="sign-up__form-input" type="text" placeholder="Enter your password again">
                        <input id="formSignUpBtn" class="btn--sign-up" type="submit" value="Sign up">
                    </form>
                    <div class="sign-up__form-footer">
                        <span>Already registered?</span><a id="linkLogIn" class="sign-up__form-footer-link" href="#">Log in</a> 
                    </div>
                </div>
                
            </div>`;

        // Регистрация пользователя
        const formSignUp = document.forms.formSignUp;

        formSignUp.formSignUpBtn.addEventListener('click', (event) => {
            event.preventDefault();
            if (formSignUp.formSignUpPassword.value === formSignUp.formSignUpPasswordAgain.value) {
                if (controller.registration(formSignUp.formSignUpName.value, formSignUp.formSignUpPassword.value)) {
                    controller.logInView();
                } else {
                    formSignUp.formSignUpName.value = '';
                    formSignUp.formSignUpPassword.value = '';
                    formSignUp.formSignUpPasswordAgain.value = '';
                    formSignUp.formSignUpName.classList.add('red');
                    formSignUp.formSignUpPassword.classList.add('red');
                    formSignUp.formSignUpPasswordAgain.classList.add('red');
                    formSignUp.formSignUpName.placeholder = 'incorrect username or password';
                    formSignUp.formSignUpPassword.placeholder = 'incorrect username or password';
                    formSignUp.formSignUpPasswordAgain.placeholder = 'incorrect username or password';
                }
            } else {
                formSignUp.formSignUpName.value = '';
                formSignUp.formSignUpPassword.value = '';
                formSignUp.formSignUpPasswordAgain.value = '';
                formSignUp.formSignUpName.classList.add('red');
                formSignUp.formSignUpPassword.classList.add('red');
                formSignUp.formSignUpPasswordAgain.classList.add('red');
                formSignUp.formSignUpName.placeholder = 'incorrect username or password';
                formSignUp.formSignUpPassword.placeholder = 'incorrect username or password';
                formSignUp.formSignUpPasswordAgain.placeholder = 'incorrect username or password';
            }
        });

        const linkLogIn = document.getElementById('linkLogIn');

        linkLogIn.addEventListener('click', (event) => {
            event.preventDefault();
            controller.logInView();
            controller.headerView.display(controller.tweetFeed.user);
        });
    }
}

class LogInView {
    constructor(containerId) {
        this.containerId = document.getElementById(containerId);
    }

    display() {
        const tweetsSet = document.getElementById('tweetsSet');
        const tweetsRight = document.getElementById('tweetsRight');

        if (tweetsSet) {
            tweetsSet.classList.add('hide');
        }
        if (tweetsRight) {
            tweetsRight.classList.add('hide');
        }

        this.containerId.innerHTML = `<div class="sign-up__left">
        <img src="images/sign up image.png" alt="image">
            </div>
            <div class="sign-up__rigth">
                <div class="sign-up__form">
                    <div class="sign-up__form-title">Tell the world your
                        interesting story</div>
                    <form name="formLogIn" class="sign-up__form-inner" action="/" method="post">
                        <input id="formLogInName" class="sign-up__form-input" type="text" placeholder="Enter your login" name="name">
                        <input id="formLogInPassword" class="sign-up__form-input" type="text" placeholder="Enter your password" name="password">
                        <input id="formLogInBtn" class="btn--sign-up" type="submit" value="Log in">
                    </form>
                    <div class="sign-up__form-footer">
                        <span>Not an account?</span><a id="linkSignUp" class="sign-up__form-footer-link" href="#">Sign up</a> 
                    </div>
                </div>
            </div>`;

        // Вход пользователя
        const formLogIn = document.forms.formLogIn;

        formLogIn.formLogInBtn.addEventListener('click', (event) => {
            event.preventDefault();

            if (controller.logIn(formLogIn.formLogInName.value, formLogIn.formLogInPassword.value)) {
                controller.getFeed(0, 10, {}, controller.tweetFeed.user);
                controller.headerView.display(controller.tweetFeed.user);
            } else {
                formLogIn.formLogInName.value = '';
                formLogIn.formLogInPassword.value = '';
                formLogIn.formLogInName.classList.add('red');
                formLogIn.formLogInPassword.classList.add('red');
                formLogIn.formLogInName.placeholder = 'incorrect username or password';
                formLogIn.formLogInPassword.placeholder = 'incorrect username or password';
            }
        });

        const linkSignUp = document.getElementById('linkSignUp');

        linkSignUp.addEventListener('click', (event) => {
            event.preventDefault();
            controller.registrationView();
            controller.headerView.display(controller.tweetFeed.user);
        });
    }
}

class HeaderView {
    constructor(containerId) {
        this.containerId = document.getElementById(containerId);
    }

    home(event) {
        event.preventDefault();
        const headerArrow = document.getElementById('headerArrow');
        const headerTextPage = document.getElementById('headerTextPage');
        const buttonHeader = document.getElementById('buttonHeader');
        buttonHeader.classList.remove('hide');

        controller.getFeed();

        if (headerArrow) {
            headerArrow.remove();
            headerTextPage.remove();
        }
    }

    logOut(event) {
        event.preventDefault();
        controller.tweetFeed.user = 'guest';
        controller.getFeed();
        controller.headerView.display(controller.tweetFeed.user);
    }

    showLogIn(event) {
        event.preventDefault();
        controller.logInView();
    }

    display(user) {
        const headerText = document.getElementById('headerText');
        const headerArrow = document.getElementById('headerArrow');
        const headerTextPage = document.getElementById('headerTextPage');

        const userName = document.getElementById('userName');
        const buttonHeader = document.getElementById('buttonHeader');

        const formLogIn = document.forms.formLogIn;
        const formSignUp = document.forms.formSignUp;

        // const tweetsSet = document.getElementById('tweetsSet');
        const tweetsRight = document.getElementById('tweetsRight');

        userName.textContent = user;

        buttonHeader.classList.remove('hide');

        if (headerArrow) {
            headerArrow.remove();
            headerTextPage.remove();
        }

        if (user !== 'guest') {
            buttonHeader.innerHTML = `<img class="btn__img" src="images/door.svg" alt="door">
            <span class="btn__text">log out</span>`;

            buttonHeader.removeEventListener('click', this.logOut);
            buttonHeader.addEventListener('click', this.logOut);
        }

        if (user === 'guest') {
            buttonHeader.textContent = 'log in';

            buttonHeader.removeEventListener('click', this.logOut);
            buttonHeader.removeEventListener('click', this.showLogIn);
            buttonHeader.addEventListener('click', this.showLogIn);
        }

        if (formLogIn) {
            if (headerArrow) {
                headerArrow.remove();
                headerTextPage.remove();
            }

            if (buttonHeader) {
                buttonHeader.classList.add('hide');
            }

            headerText.insertAdjacentHTML('afterend', `
                <img id="headerArrow" class="header__arrow" src="images/Arrow.svg" alt="">
                <div id="headerTextPage" class="header__text--page-name">Log in</div>`);

            headerText.removeEventListener('click', this.home);
            headerText.addEventListener('click', this.home);
        }

        if (formSignUp) {
            if (headerArrow) {
                headerArrow.remove();
                headerTextPage.remove();
            }

            if (buttonHeader) {
                buttonHeader.classList.add('hide');
            }

            headerText.insertAdjacentHTML('afterend', `
                <img id="headerArrow" class="header__arrow" src="images/Arrow.svg" alt="">
                <div id="headerTextPage" class="header__text--page-name">Sign up</div>`);

            headerText.removeEventListener('click', this.home);
            headerText.addEventListener('click', this.home);
        }

        if (tweetsRight) {
            if (Array.from(tweetsRight.classList).includes('hide')) {
                headerText.insertAdjacentHTML('afterend', `
                    <img id="headerArrow" class="header__arrow" src="images/Arrow.svg" alt="">
                    <div id="headerTextPage" class="header__text--page-name">Tweet</div>`);

                // buttonHeader.removeEventListener('click', this.showLogIn);

                headerText.removeEventListener('click', this.home);
                headerText.addEventListener('click', this.home);
                return;
            }
            tweetsRight.classList.remove('hide');
        }
    }
}

class TweetsController {
    constructor() {
        this.tweetFeed = new TweetFeed();
        this.headerView = new HeaderView('headerInner');
        this.tweetsFeedView = new TweetFeedView('tweetsTape');
        this.tweetView = new TweetView('tweetsTape');
        this.userList = new UserList(usersArr);
        this.registr = new RegistrationView('tweetsMain');
        this.logInViewClass = new LogInView('tweetsMain');
    }

    setCurrentUser(user) {
        if (user && typeof user === 'string') {
            this.tweetFeed.user = user;
            this.headerView.display(user);
        }
    }

    addTweet(text) {
        this.tweetFeed.add(text);
        this.getFeed(0, 10, {});
    }

    editTweet(id, text) {
        this.tweetFeed.edit(id, text);
        this.getFeed(0, 10, {});
    }

    removeTweet(id) {
        this.tweetFeed.remove(id);
        this.getFeed(0, 10, {});
    }

    getFeed(skip = 0, top = 10, filterConfig = {}) {
        this.tweetsFeedView.display(this.tweetFeed.getPage(skip, top, filterConfig), this.tweetFeed.user);
    }

    showTweet(id) {
        if (id) {
            const tweetGet = this.tweetFeed.get(id);
            if (tweetGet) {
                this.tweetView.display(tweetGet, this.tweetFeed.user);
            }
        }
    }

    registration(name, password) {
        if (this.userList.addUser(name, password)) {
            return true;
        }
        return false;
    }

    registrationView(userName) {
        if (!userName || userName === 'guest') {
            this.registr.display();
        }
    }

    logIn(name, password) {
        if (!name || typeof name !== 'string') {
            return false;
        }

        if (!password || typeof password !== 'string') {
            return false;
        }

        const user = this.userList.users.find(item => item.name === name);

        if (user && user.password === password) {
            this.setCurrentUser(name);
            return true;
        }
    }

    logInView() {
        if (!this.tweetFeed.user || this.tweetFeed.user === 'guest') {
            this.logInViewClass.display();
            this.headerView.display(this.tweetFeed.user);
        }
    }
}

function local(tweets, userList, user) {
    if (localStorage.length === 0) {
        localStorage.setItem('tweets', JSON.stringify(tweets));
        localStorage.setItem('userList', JSON.stringify(userList));
        localStorage.setItem('user', JSON.stringify(user));
    }
}

local(tweets, usersArr, 'guest');

const controller = new TweetsController();
controller.getFeed();
controller.headerView.display(controller.tweetFeed.user);

