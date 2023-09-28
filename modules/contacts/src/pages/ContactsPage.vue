<script setup>
import CreateForm from '@gorn/components/CreateForm'
import { createFormFromResponse } from '@gorn/app/forms'
import response from '../response.json'

console.log(response)

const form = createFormFromResponse(response)

const onSubmit = (values) => {
  console.log(values)
  alert('Данные сохранены')
}

</script>

<template>
  <h1>Contacts</h1>
  <p>hello@example.com</p>
  <create-form :form="form" />
</template>
