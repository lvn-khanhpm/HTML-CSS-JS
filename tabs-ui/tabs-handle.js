let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

let tabItems = $$('.tab-item');
let tabPanes = $$('.tab-pane');
let tabItemNum = tabItems.length;
let line = $('.tabs .line');

const getLineTabItemActive = (line, tabItemActive) => {
    line.style.left = tabItemActive.offsetLeft + 'px';
    line.style.width = tabItemActive.offsetWidth + 'px';
}

getLineTabItemActive(line, $('.tab-item.active'));

for (let i = 0; i < tabItemNum; i++) {
    let tabItem = tabItems[i];
    let tabPane = tabPanes[i];

    tabItem.onclick = () => {
        $('.tab-item.active').classList.remove('active');
        $('.tab-pane.active').classList.remove('active');

        getLineTabItemActive(line, tabItem);
        tabItem.classList.add('active');
        tabPane.classList.add('active');
    }
}