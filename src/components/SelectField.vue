<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  value: {
    type: Array,
    default: false,
  },
  description: {
    type: String,
    default: '',
  },
  options: {
    type: Array,
    default: () => [],
  },
  multiple: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['change'])

const newValue = ref(props.value)
watch(newValue, () => {
  emit('change', { value: newValue.value })
})

</script>

<template>
  <div>
    <label>{{ label }}: </label>
    <select v-model="newValue" :multiple="multiple">
      <option v-for="option in options" :value="option" :key="option.id">{{ option.title }}</option>
    </select>
  </div>
</template>
