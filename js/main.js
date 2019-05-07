//const store = new Vuex.Store({
//    state: {
//        count: 0,
//         totalTvCount: 10 // The TV inventory
//    },
//    mutations: {
//        increment: state => state.count++,
//        decrement: state => state.count--,
//        update: state => this.message,
////    }
////})
//Vue.use(Vuex);

//const store = new Vuex.Store({
//    state: {
//        value: ""
//    },
//    actions: {
//        setValue: ({ commit }, value) => {
//            commit("setValue", value);
//            //localStorage.setItem("value", value)
//        }
//    },
//    mutations: {
//        setValue: (state, value) => state.value = value
//    }
//});

//new Vue({
//    el: '#app',
//    store,
//    computed: {
//        input_value: {
//            get() {
//                return this.$store.state.value
//            },
//            set(value) {
//                this.$store.dispatch("setValue", value)
//            }
//        }
//    }
//});
//new Vue({
//    el: '#example-1',
//    computed: {
//        count() {
//            return store.state.count
//        },
//        totalTvCount() {
//            return store.state.totalTvCount
//        }
//    },

//    methods: {
//        increment() {
//            store.commit('increment')
//        },
//        decrement() {
//            store.commit('decrement')
//        },
//        update() {
//            store.commit('update')
//        }
//    }
//});
//new Vue({
//    el: '#app',
//    data: {
//        message:'213'
//    }
//})

Vue.use(Vuex);

const store = new Vuex.Store({

    state: {
        login: 'SomeCollLogin',
        email: 'SomeCool@gmail.com',
        password: '',
        FirstName: 'FirstName',
        LastName: 'LastName'
    },
    mutations: {
        updateLogin(state, login) {
            state.login = login
        },
        updateEmail(state, email) {
            state.email = email
        },
        updatePassword(state, password) {
            state.password = password
        },
        updateFirstName(state, FirstName) {
            state.FirstName = FirstName
        },
        updateLastNamee(state, LastName) {
            state.LastName = LastName
        }
    }
});

new Vue({
    el: '#app3',
    store,
    date: {}
});
new Vue({
    el: '#login',
    store,
    data: {

    },
    computed: {
        message: {
            get() {
                return this.$store.state.login
            },
            set(value) {
                this.$store.commit('updateLogin', value)
            }
        },

        methods: {
            updateLogin(e) {
                this.$store.commit('updateLogin', e.target.value)
            }
        }
    }
});
new Vue({
    el: '#email',
    store,
    data: {

    },
    computed: {
        log: {
            get() {
                return this.$store.state.email
            },
            set(value) {
                this.$store.commit('updateEmail', value)
            }
        },

        methods: {
            updateEmail(e) {
                this.$store.commit('updateEmail', e.target.value)
            }
        }
    }
});
new Vue({
    el: '#password',
    store,
    data: {

    },
    computed: {
        log: {
            get() {
                return this.$store.state.email
            },
            set(value) {
                this.$store.commit('updatePassword', value)
            }
        },

        methods: {
            updatePassword(e) {
                this.$store.commit('updatePassword', e.target.value)
            }
        }
    }
});
new Vue({
    el: '#FirstName',
    store,
    data: {

    },
    computed: {
        log: {
            get() {
                return this.$store.state.email
            },
            set(value) {
                this.$store.commit('updateFirstName', value)
            }
        },

        methods: {
            updateFirstName(e) {
                this.$store.commit('updateFirstName', e.target.value)
            }
        }
    }
});
new Vue({
    el: '#LastName',
    store,
    data: {

    },
    computed: {
        log: {
            get() {
                return this.$store.state.LastName
            },
            set(value) {
                this.$store.commit('updateLastName', value)
            }
        },

        methods: {
            updateLastName(e) {
                this.$store.commit('updateLastName', e.target.value)
            }
        }
    }
});
new Vue({
    el: '#city',
    data: {
        selected: 'select',
        options: [
            { text: 'select', value: 'select' },
            { text: 'City 17', value: 'City 17' },
            { text: 'City 40', value: 'City 40' },
            { text: 'City 49', value: 'City 49' }
        ]
    }
});
new Vue({
    el: 'sender',
   
    data: {
        isActive: true,
        error: null
    },
    computed: {
        classObject: function () {
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal'
            }
        }
    }
})