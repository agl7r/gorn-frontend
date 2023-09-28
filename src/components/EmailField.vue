<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  value: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
    default: '',
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
    <input type="email" v-model="newValue">
    <div v-if="description">{{ description }}</div>
  </div>
</template>
