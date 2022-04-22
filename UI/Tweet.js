'use strict';

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
            controller.removeTweet(`${tweetDelete.id}`)
                .then(result => controller.headerView.display(localStorage.getItem('user')));
            return;
        }

        if (event.target.closest('#tweetEdit')) {
            const tweetEdit = event.target.closest('SECTION');
            const tweetId = tweetEdit.id;
            controller.serv.getTweets(0, 100000)
                .then(result => result.find(item => item.id === tweetId))
                .then(result => {
                    formSet.formSetInput.value = result.text;
                    formSet.formSetBtn.classList.add('hide');
                    formSet.formEditBtn.classList.remove('hide');
                    controller.tweetsFeedView.editTweetId = result.id;
                });

            // const tweetEditText = controller.tweetFeed.get(tweetId).text;
            // formSet.formSetInput.value = tweetEditText;
            // formSet.formSetBtn.classList.add('hide');
            // formSet.formEditBtn.classList.remove('hide');
            // controller.tweetsFeedView.editTweetId = tweetId;
            return;
        }

        if (event.target.closest('[data-tweets]')) {
            controller.showTweet(event.target.closest('[data-tweets]').id)
                .then(result => {
                    controller.headerView.display(localStorage.getItem('user'));
                    const loadMore = document.getElementById('loadMore');
                    loadMore.classList.add('hide');
                });
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
            controller.getFeed(0, 10, filterInput, localStorage.getItem('user'))
                .then(result => {
                    const loadMore = document.getElementById('loadMore');
                    if (result.length % 10 === 0) {
                        loadMore.classList.remove('hide');
                    } else {
                        loadMore.classList.add('hide');
                    }
                });
        }
    }

    resetFilter() {
        controller.getFeed(0, 10, {}, localStorage.getItem('user'))
            .then(result => {
                const loadMore = document.getElementById('loadMore');
                if (result.length % 10 === 0) {
                    loadMore.classList.remove('hide');
                } else {
                    loadMore.classList.add('hide');
                }
            });
    }

    display(tweetsArr, user) {
        const goodtweetsArr = tweetsArr.map(item => item = {
            id: item.id,
            author: item.author,
            text: item.text,
            createdAt: new Date(item.createdAt),
            comments: item.comments
        });

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
                        <button id="loadMore" class="btn btn--load">load more</button>
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

        const tweetsItems = goodtweetsArr.map(item => {
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

        if (this.containerId.childElementCount % 10 === 0) {
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
        controller.serv.getTweets(0, 10000)
            .then(result => result.find(item => item.id === document.querySelector('SECTION').id))
            .then(result => {
                controller.serv.addComment(result.id, setComment.setCommentInput.value);
                return result;
            })
            .then(result => {
                controller.showTweet(result.id, localStorage.getItem('user'));
                controller.showTweet(result.id, localStorage.getItem('user'));
            });
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
            if (formSignUp.formSignUpName.value && formSignUp.formSignUpName.value && formSignUp.formSignUpPassword.value && formSignUp.formSignUpPassword.value === formSignUp.formSignUpPasswordAgain.value) {
                controller.registration(formSignUp.formSignUpName.value, formSignUp.formSignUpPassword.value)
                    .then(result => {
                        if (result === 'registration') {
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
                    });
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
            controller.headerView.display(localStorage.getItem('user'));
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

            if (formLogIn.formLogInName.value && formLogIn.formLogInPassword.value) {
                controller.logIn(formLogIn.formLogInName.value, formLogIn.formLogInPassword.value)
                    .then(result => {
                        if (result === 'login') {
                            controller.getFeed(0, 10, {}, localStorage.getItem('user'));
                            formLogIn.remove();
                            controller.headerView.display(localStorage.getItem('user'));
                        } else {
                            formLogIn.formLogInName.value = '';
                            formLogIn.formLogInPassword.value = '';
                            formLogIn.formLogInName.classList.add('red');
                            formLogIn.formLogInPassword.classList.add('red');
                            formLogIn.formLogInName.placeholder = 'incorrect username or password';
                            formLogIn.formLogInPassword.placeholder = 'incorrect username or password';
                        }
                    });
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
            controller.headerView.display(localStorage.getItem('user'));
        });
    }
}

class ErrorView {
    constructor(containerId) {
        this.containerId = document.getElementById(containerId);
    }

    display() {
        this.containerId.innerHTML = `<div id="error" class="error">
        <div class="error__title">Error 404</div>
        <div class="error__text">Something seems to have gone wrong! The page you requested does not exist. It may be out of date, have been deleted or the address in the address bar may be wrong.</div>
    </div>`;
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
        localStorage.setItem('user', 'guest');
        localStorage.setItem('token', '');
        controller.getFeed();
        controller.headerView.display(localStorage.getItem('user'));
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
        const error = document.getElementById('error');

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

        if (error) {
            if (headerArrow) {
                headerArrow.remove();
                headerTextPage.remove();
            }

            if (buttonHeader) {
                buttonHeader.classList.add('hide');
            }

            headerText.insertAdjacentHTML('afterend', `
                <img id="headerArrow" class="header__arrow" src="images/Arrow.svg" alt="">
                <div id="headerTextPage" class="header__text--page-name">Error</div>`);

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

class TweetFeedApiService {
    constructor(server) {
        this.server = server;
    }

    token = '';

    static header() {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        return myHeaders;
    }

    async registrationApi(name, password) {
        const raw = JSON.stringify({
            "login": name,
            "password": password
        });

        const requestOptions = {
            method: 'POST',
            headers: TweetFeedApiService.header(),
            body: raw,
            redirect: 'follow'
        };

        return fetch(`${this.server}/registration`, requestOptions)
            .then(response => response.text())
            .then(result => JSON.parse(result))
            .catch(error => console.log('error', error));
    }

    login(name, password) {
        const raw = JSON.stringify({
            "login": name,
            "password": password
        });

        const requestOptions = {
            method: 'POST',
            headers: TweetFeedApiService.header(),
            body: raw,
            redirect: 'follow'
        };

        return fetch(`${this.server}/login`, requestOptions)
            .then(response => response.text())
            .then(result => JSON.parse(result))
            .then(result => {
                localStorage.setItem('token', JSON.stringify(result.token));
                return result;
            })
            .catch(error => console.log('error', error));
    }

    async getTweets(from = 0, count = 10, filterConfig = {}) {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        let url = `${this.server}/tweet?from=${from}&count=${count}`;

        let filter = '';

        if (Object.keys(filterConfig).length !== 0) {
            if ('author' in filterConfig) {
                filter += `&author=${filterConfig.author}`;
            }

            if ('text' in filterConfig) {
                filter += `&text=${filterConfig.text}`;
            }

            if ('dateFrom' in filterConfig) {
                filter += `&dateFrom=${filterConfig.dateFrom}`;
            }

            if ('dateTo' in filterConfig) {
                filter += `&dateTo=${filterConfig.dateTo}`;
            }

            if ('hashtags' in filterConfig) {
                filter += `&hashtags=${filterConfig.hashtags}`;
            }

            url += filter;
        }

        return fetch(url, requestOptions)
            .then(response => response.text())
            .then(result => JSON.parse(result))
            .catch(error => console.log('error', error));
    }

    addTweet(text) {
        const myHeaders = TweetFeedApiService.header();
        myHeaders.append("Authorization", `Bearer ${JSON.parse(localStorage.getItem('token'))}`);

        const raw = JSON.stringify({
            "text": `${text}`
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        return fetch(`${this.server}/tweet`, requestOptions)
            .then(response => response.text())
            .then(result => JSON.parse(result))
            .catch(error => console.log('error', error));
    }

    deleteTweet(id) {
        const myHeaders = TweetFeedApiService.header();
        myHeaders.append("Authorization", `Bearer ${JSON.parse(localStorage.getItem('token'))}`);

        const requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };

        return fetch(`${this.server}/tweet/${id}`, requestOptions)
            .then(response => response.text())
            .catch(error => console.log('error', error));
    }

    editTweet(id, text) {
        const myHeaders = TweetFeedApiService.header();
        myHeaders.append("Authorization", `Bearer ${JSON.parse(localStorage.getItem('token'))}`);

        const raw = JSON.stringify({
            'text': `${text}`
        });

        const requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        return fetch(`${this.server}/tweet/${id}`, requestOptions)
            .then(response => response.text())
            .catch(error => console.log('error', error));
    }

    addComment(id, text) {
        const myHeaders = TweetFeedApiService.header();
        myHeaders.append("Authorization", `Bearer ${JSON.parse(localStorage.getItem('token'))}`);

        const raw = JSON.stringify({
            "text": `${text}`
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        return fetch(`${this.server}/tweet/${id}/comment`, requestOptions)
            .then(response => response.text())
            .then(result => JSON.parse(result))
            .catch(error => console.log('error', error));
    }
}
class TweetsController {
    constructor() {
        this.headerView = new HeaderView('headerInner');
        this.tweetsFeedView = new TweetFeedView('tweetsTape');
        this.tweetView = new TweetView('tweetsTape');
        this.registr = new RegistrationView('tweetsMain');
        this.logInViewClass = new LogInView('tweetsMain');
        this.error = new ErrorView('tweetsMain');
        this.serv = new TweetFeedApiService('https://jslabapi.datamola.com');
    }

    setCurrentUser(user) {
        if (user && typeof user === 'string') {
            this.tweetFeed.user = user;
            this.headerView.display(user);
        }
    }

    addTweet(text) {
        this.serv.addTweet(text)
            .then(result => this.getFeed(0, 10, {}));
    }

    editTweet(id, text) {
        this.serv.editTweet(id, text)
            .then(result => this.getFeed(0, 10, {}));
    }

    removeTweet(id) {
        return this.serv.deleteTweet(id)
            .then(result => this.getFeed(0, 10, {}));
    }

    getFeed(skip = 0, top = 10, filterConfig = {}) {
        return this.serv.getTweets(skip, top, filterConfig)
            .then(result => {
                this.tweetsFeedView.display(result, localStorage.getItem('user'));
                return result;
            });
    }

    showTweet(id) {
        return this.serv.getTweets(0, 100000)
            .then(result => result.find(item => item.id === id))
            .then(result => this.tweetView.display(result, localStorage.getItem('user')));
    }

    registration(name, password) {
        return this.serv.registrationApi(name, password)
            .then(result => {
                if (result.statusCode < 205 || result.id) {
                    return 'registration';
                } else {
                    throw new Error('not registration');
                }
            });
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

        return this.serv.login(name, password)
            .then(result => {
                if (result.statusCode < 205 || result.token) {
                    localStorage.setItem('user', name);
                    return 'login';
                } else {
                    throw new Error('not login');
                }
            })
            .catch(error => console.error(error));
    }

    logInView() {
        if (!localStorage.getItem('user') || localStorage.getItem('user') === 'guest') {
            this.logInViewClass.display();
            this.headerView.display(localStorage.getItem('user'));
        }
    }

    errorView() {
        this.error.display();
    }
}

function local() {
    if (localStorage.getItem('user')) {
        return;
    }
    localStorage.setItem('user', 'guest');
}

local();

const controller = new TweetsController();
controller.getFeed();
controller.headerView.display(localStorage.getItem('user'));
