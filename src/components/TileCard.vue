<script setup lang="ts">
import type { ActionCard } from '@/models/actionCard'
import CheckItems from './CheckItems.vue'

defineProps<{
  actionCard: ActionCard,
  actionIndex: number
}>()

function removeActionItem() {
  console.log('removed')
}
</script>

<template>
  <div class="action-note">
    <div class="title" placeholder="Title">{{ actionCard.title }}</div>
    <CheckItems
      v-for="(action, index) in actionCard.actions"
      :key="index"
      :label="action"
      :index="actionIndex.toString()+index"
      @removed="removeActionItem"
    />
  </div>
</template>
