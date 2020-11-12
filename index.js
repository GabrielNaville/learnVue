let app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

let app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'Você carregou esta página em ' + new Date().toLocaleString()
    }
});

let app3 = new Vue({
  el: '#app-3',
  data: {
    seen: false
  }
});

let app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      {text: new Date()},
      {text: new Date()},
      {text: new Date()},
    ]
  }
});


let app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Olá Navillão'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('');
    }
  }
});

let app6 = new Vue({
  el: '#app-6',
  data: {
    message: ""
  }
});

//Componente em vue, definindo: 
//Esse componente renderiza o mesmo texto toda vez que é chamado, no item 8 trataremos isso
Vue.component('todo-item2', {
  template: '<li> Isso é um item</li>'
});

let app7 = new Vue({
  el: '#app-7'
});

//componente com prop

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{todo.text}}</li>'
});

let app8 = new Vue({
  el: '#app-8',
  data: {
    groceryList: [
      {id: 3, text: 'Vegetais'},
      {id: 4, text: 'Queijo'},
      {id: 5, text: 'Carne'},
    ]
  }
});
