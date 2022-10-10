import ReactViewRouter from 'react-view-router';
import Home from './pages/public/home/Home';
import Musique from './pages/public/musique/Musique';
import Beats from './pages/public/beats/Beats';
import Contact from './pages/public/contact/Contact';


const router = new ReactViewRouter({
  base: '/',     // the base URL of the app. For example, if the entire single page application is served under /app/, then base should use the value "/app/"
  mode: 'hash', // or browser|memory|hash, default:hash
  routes: [
    {
        path: '/home',
        name: 'home',
        components: Home
    },
    {
        path: '/musique',
        name: 'musique',
        components: Musique

    }
  ]    // also can be passed by router.use method
});
   
export default router;