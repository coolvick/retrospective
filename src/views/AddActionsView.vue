<script setup lang="ts">
import ActionItems from '@/components/ActionItems.vue';

</script>
<template>
  <div class="notes">
    <h1>Add your sprint actions here!</h1>
    <section class="actions">
      <ActionItems/>
    </section>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .notes {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
}
</style>
