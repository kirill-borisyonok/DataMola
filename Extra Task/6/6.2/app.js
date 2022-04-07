const list = [
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
                    }
                ],
            },
            {
                value: 'Подпункт 2.3.',
                children: [
                    {
                        value: 'Подпункт 2.3.1.',
                        children: null,
                    },
                    {
                        value: 'Подпункт 2.3.2.',
                        children: null,
                    }
                ],
            }
        ]
    },
    {
        value: 'Пункт 3.',
        children: null,
    }
];

function createList(title, list) {
    let listPage = `<h2>${title}</h2>\n<ul>`;

    for (let item of list) {
        listPage += `<li>${item.value}`
        if (item.children) {
            listPage += '<ul>\n';
            for (let itemChildren of item.children) {
                listPage += `<li>${itemChildren.value}</li>\n`
                if (itemChildren.children) {
                    listPage += '<ul>\n';
                    for (let itemChildrenChildren of itemChildren.children) {
                        listPage += `<li>${itemChildrenChildren.value}</li>\n`
                    }
                    listPage += '</ul>\n';
                }
            }
            listPage += '</ul>\n';
        } else { listPage += '</li>\n' }
    }

    listPage += '</ul>'

    console.log(listPage);

    document.body.innerHTML = listPage;
}

createList('List', list);