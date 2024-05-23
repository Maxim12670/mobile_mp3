import {DEFAULT_TITLE} from '@shared/config';
import {RouteRecordRaw} from 'vue-router';
import {IndexPage} from '@pages/indexPage';
import {ErrorNotFound} from 'src/pages/notFoundPage';
import MainLayout from '../layouts/MainLayout.vue';


const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainLayout
    ,
    children: [
      {
        path: '', component: IndexPage,
        meta: {title: `${DEFAULT_TITLE}: index page`}
      }
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: ErrorNotFound,
  },
];

export default routes;
