import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ElectionResultView from '@/views/ElectionResultView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/voting-results',
      name: 'voting-results',
      component: ElectionResultView,
    },
    {
      path: '/political-party',
      name: 'political-party',
      component: () => import('../views/PoliticalPartyView.vue'),
    },
    {
      path: '/voting',
      name: 'voting',
      component: () => import('../views/VotingView.vue'),
    },
    {
      path: '/manage-candidate',
      name: 'manage-candidate',
      component: () => import('../views/ManageCandidateView.vue'),
    },
    {
      path: '/manage-political-party',
      name: 'manage-political-party',
      component: () => import('../views/ManagePoliticalPartyView.vue'),
    },
    {
      path: '/close-polling',
      name: 'close-polling',
      component: () => import('../views/ClosePollingView.vue'),
    },
    {
      path: '/manage-election-commission',
      name: 'manage-election-commission',
      component: () => import('../views/ManageElectionCommissionView.vue'),
    },
    {
      path: '/manage-electoral-districts',
      name: 'manage-electoral-districts',
      component: () => import('../views/ManageElectoralDistrictsView.vue'),
    },
  ],
})

export default router
