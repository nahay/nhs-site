import { createRouter as createRouter, createWebHistory } from 'vue-router';
// import { useStore } from 'vuex';

//import views for router to show
import HomeView from '../views/HomeView.vue';
import ContactView from '../views/ContactView.vue';
import AboutView from '../views/AboutView.vue';
import ServicesView from '../views/ServicesView.vue';

/**
 * The Vue Router is used to "direct" the browser to render a specific view component
 * inside of App.vue depending on the URL.
 *
 * It also is used to detect whether or not a route requires the user to have first authenticated.
 * If the user has not yet authenticated (and needs to) they are redirected to /login
 * If they have (or don't need to) they're allowed to go about their way.
 */

//setting the routes array for different views
const routes = [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      // meta: { title: 'Home Page' } trying to change app title
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactView
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
];

// Create the router instance
const router = createRouter({
    history: createWebHistory(),
    routes: routes //this is the routes array
  });




  export default router; //allows me to export the router instance so it can be imported and used in other parts of the app.
  //must EXPORT to be able to IMPORT




