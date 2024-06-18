import { reactive } from 'vue';
import type { ActionCard } from '../models/actionCard';

export const useActionsStore = reactive({
  actionCards: <ActionCard[]>[{
    title: 'Sprint 55 - data one',
    actions: ['Test one line', 'Test impediments on the config server', 'Check signing feasibility']
  }],
  addActions(card: ActionCard) {
    this.actionCards.unshift(card);
  }
})
