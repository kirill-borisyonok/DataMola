const array = [
    {
        value: 'Пункт 1.',
        children: null,
    },
    {
        value: 'Пункт 2.',
        children: [
            {
                value: 'Подпункт 2.1.',
                children: null,
            },
            {
                value: 'Подпункт 2.2.',
                children: [
                    {
                        value: 'Подпункт 2.2.1.',
                        children: null,
                    },
                    {
                        value: 'Подпункт 2.2.2.',
                        children: null,
                    },
                ],
            },
            {
                value: 'Подпункт 2.3.',
                children: null,
            },
        ],
    },
    {
        value: 'Пункт 3.',
        children: null,
    },
];

function createList(title = '', list = []) {
    const h2 = document.createElement('h2');
    h2.textContent = title;

    const listPage = array => {
        const ul = document.createElement('ul');
        ul.style.fontSize = '0.9em';

        for (let item of array) {
            const li = document.createElement('li');
            li.innerHTML = item.value;
            if (item.children !== null) {
                li.classList.add('isUl');
                li.append(listPage(item.children));
            }
            ul.append(li);
        }

        return ul;
    }

    document.body.append(h2);
    document.body.append(listPage(list));
    document.querySelector('ul').style.fontSize = '1rem';
}

createList('my List', array);

document.querySelector('ul').addEventListener('click', (event) => {
    if (event.target.classList.contains('isUl')) {
        event.target.classList.toggle('hide');
    }
});