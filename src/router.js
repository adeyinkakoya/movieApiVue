import Vue from 'vue'
import Router from 'vue-router'
import LatestMovies from './views/LatestMovies.vue'
import Movie from './views/Movie.vue'
import Test from './views/test.vue'
import Search from './views/Search.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'latestMovies',
            component: LatestMovies
        },
        {
            path: '/movie/:id',
            name: 'movie',
            props: true,
            component: Movie
        },
        {
            path: '/search/:term',
            name: 'search',
            props: true,
            component: Search
        },
        {
            path: '/test',
            name: 'test',
            component: Test
        }
    ],
    mode: 'history'
})