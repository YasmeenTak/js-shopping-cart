const app = require('./app');
const Cards = require('./services/Cards');

function row(item) {
  let card = document.querySelector('#');
}

Cards.list().then((response) => {
  let data = response.data;
  app.items = data;
  app.render();
});

let form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  let input = document.querySelector('input[name=title]');
  let data = {
    title: input.value,
    completed: true,
    userId: 5,
  };
  Cards.create(data).then((response) => {
    app.items.push(response.data);
    app.render();
  });
});
