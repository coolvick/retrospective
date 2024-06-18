<script setup lang="ts">
import { onUnmounted } from 'vue'
import { useActionsStore } from '../stores/actions'
let title: string
let wholeContent = ''
let actions: string[] = [];
console.log('this has rendered');

function onInput(event: any) {
  const text = event.target.textContent
  const notesWithoutLineBreaks = wholeContent.replace(/(\n)/g, '')
  if (text.length >= notesWithoutLineBreaks.length) {
    wholeContent = wholeContent + text.replace(notesWithoutLineBreaks, '\n')
  } else {
    const deletedLength = notesWithoutLineBreaks.length - text.length
    for (let i = 1; i < deletedLength; i++) {
      if (wholeContent.slice(-2) === '\n') {
        wholeContent.replace('\n', '')
      }
      wholeContent = wholeContent.slice(0, -1)
    }
  }
}

onUnmounted(() => {
  actions = wholeContent.split('\n')
  if (actions.length && wholeContent) {
    actions = actions.filter((action) => action !== '')
    useActionsStore.addActions({
      title: title,
      actions: actions
    })
  }
})
</script>

<template>
  <div class="action-note">
    <input
      class="title"
      v-model="title"
      placeholder="Add title"
    />
    <div
      class="text-area"
      placeholder="Add your actions here!"
      contenteditable="true"
      @keyup.enter="onInput"
      @blur="onInput"
    ></div>
  </div>
</template>

<style>
[contenteditable='true']:empty:before {
  content: attr(placeholder);
  pointer-events: none;
  opacity: 0.5;
  display: block; /* For Firefox */
}

.text-area {
  display: list-item;
  margin-left: 1em;
  outline: none;
}

.text-area div {
  display: list-item;
  margin-top: 10px;
}

.title:focus-visible {
  border: none;
  outline: none;
}

.text:focus-visible {
  border: none;
  outline: none;
}
</style>
