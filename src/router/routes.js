import { About } from '../pages/About';
import { Error } from '../pages/Error';
import { Login } from '../pages/Login';
import { PostIdPage } from '../pages/PostIdPage/PostIdPage';
import { Posts } from '../pages/Posts';

export const privateRoutes = [
  { path: '/about', component: About, linkName: 'About', nav: true },
  { path: '/posts', component: Posts, linkName: 'Posts', nav: true },
  { path: '/posts/:id', component: PostIdPage },
  { path: '/error', component: Error },
];

export const publicRoutes = [{ path: '/login', component: Login }];
