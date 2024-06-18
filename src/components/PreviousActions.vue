<script setup lang="ts">
import {useActionsStore} from '../stores/actions';
import TileCard from './TileCard.vue';

 const actions = useActionsStore.actionCards;

</script>

<template>
  <h1>Pending Actions!</h1>
  <div>
    <TileCard v-for="(actionCard, index) in actions" :key="actionCard.title" :actionIndex="index" :actionCard="actionCard"/>
  </div>
  
</template>
