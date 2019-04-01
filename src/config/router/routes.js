// Import views
import NotFound from '../../views/NotFound';
import Home from '../../views/Home';
import About from '../../views/About';
import AboutDetail from '../../views/AboutDetail';
import GitHub from '../../views/GitHub';

const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
        pageTitle: 'Broodt'
    },
    {
        path: '/about',
        component: About,
        pageTitle: 'About || Broodt',
        routes: [
            {
                path: '/about/:id',
                component: AboutDetail
            }
        ]
    },
    {
        path: '/gh/:user',
        component: GitHub,
        pageTitle: 'GitHub || Broodt'
    },
    {
        component: NotFound,
        pageTitle: '404 || Broodt'
    }
];

export default routes;
