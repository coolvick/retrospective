<script setup lang="ts">
defineProps<{
  label: string
  index: string
}>()

const emit = defineEmits(['removed'])

function removeActionItem() {
  emit('removed')
}
</script>

<template>
  <div>
    <div class="checkbox-wrapper">
      <label :for="index" class="item" @click="removeActionItem">
        <input
          type="checkbox"
          :id="index"
          class="hidden"
        />
        <label :for="index" class="cbx">
          <svg width="14px" height="12px" viewBox="0 0 14 12">
            <polyline points="1 7.6 5 11 13 1"></polyline>
          </svg>
        </label>
        <label :for="index" class="cbx-lbl">{{ label }}</label>
      </label>
    </div>
  </div>
</template>

<style scoped>
.checkbox-wrapper {
    margin: 1rem auto;
}
.checkbox-wrapper input[type='checkbox'] {
  visibility: hidden;
  display: none;
}

.checkbox-wrapper label {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  line-height: 1;
}

.checkbox-wrapper *,
.checkbox-wrapper ::after,
.checkbox-wrapper ::before {
  box-sizing: border-box;
}

.checkbox-wrapper .item .cbx {
  position: relative;
  top: 1px;
  display: inline-block;
  width: 14px;
  height: 14px;
  margin-right: 6px;
  border: 1px solid #c8ccd4;
  border-radius: 3px;
  cursor: pointer;
}
.checkbox-wrapper .item .cbx svg {
  position: relative;
  top: -1px;
  transform: scale(0);
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.checkbox-wrapper .item .cbx svg polyline {
  stroke-width: 2;
  stroke: #18cda6;
}
.checkbox-wrapper .item .cbx:before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -10px 0 0 -10px;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background: #18cda6;
  transform: scale(0);
}
.checkbox-wrapper .item .cbx:after {
  content: '';
  position: absolute;
  top: 5px;
  left: 5px;
  width: 2px;
  height: 2px;
  border-radius: 2px;
  box-shadow:
    0 -18px 0 #18cda6,
    12px -12px 0 #18cda6,
    18px 0 0 #18cda6,
    12px 12px 0 #18cda6,
    0 18px 0 #18cda6,
    -12px 12px 0 #18cda6,
    -18px 0 0 #18cda6,
    -12px -12px 0 #18cda6;
  transform: scale(0);
}
.checkbox-wrapper .item .cbx-lbl {
  position: relative;
  cursor: pointer;
  transition: color 0.3s ease;
}
.checkbox-wrapper .item .cbx-lbl:after {
  content: '';
  position: absolute;
  top: 60%;
  left: 0;
  width: 0;
  height: 1px;
  background: #9098a9;
}
.checkbox-wrapper .item input {
  display: none;
}
.checkbox-wrapper .item input:checked + .cbx {
  border-color: transparent;
}
.checkbox-wrapper .item input:checked + .cbx svg {
  transform: scale(1);
  transition: all 0.4s ease;
  transition-delay: 0.1s;
}
.checkbox-wrapper .item input:checked + .cbx:before {
  transform: scale(1);
  opacity: 0;
  transition: all 0.3s ease;
}
.checkbox-wrapper .item input:checked + .cbx:after {
  transform: scale(1);
  opacity: 0;
  transition: all 0.6s ease;
}
.checkbox-wrapper .item input:checked ~ .cbx-lbl {
  color: #9098a9;
}
.checkbox-wrapper .item input:checked ~ .cbx-lbl:after {
  width: 100%;
  transition: all 0.4s ease;
}
</style>
