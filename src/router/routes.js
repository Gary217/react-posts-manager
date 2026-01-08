import { About } from '../pages/About';
import { Error } from '../pages/Error';
import { PostIdPage } from '../pages/PostIdPage';
import { Posts } from '../pages/Posts';

export const routes = [
  { path: '/about', component: About, linkName: 'About', nav: true },
  { path: '/posts', component: Posts, linkName: 'Posts', nav: true },
  { path: '/posts/:id', component: PostIdPage },
  { path: '/error', component: Error },
];
