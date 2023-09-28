import { h } from 'vue'
import StringField from './StringField.vue'
import EmailField from './EmailField.vue'
import SelectField from './SelectField.vue'
import CheckboxField from './CheckboxField.vue'
import { Form, FormField } from '@/app/forms'

const types = {
    'string': StringField,
    'email': EmailField,
    'select': SelectField,
    'boolean': CheckboxField,
}

export default {
    props: {
        form: Form,
    },
    render(props) {
        const fields: FormField[] = props.form.fields ?? []

        const children = []
        fields.forEach((field: FormField) => {
            children.push(
                h('div', [h(types[field.type], {
                    label: field.label,
                    value: field.value,
                    description: field.description,
                    options: field.options,
                    multiple: field.multiple,
                })])
            )
        })

        return h('form', children)
    }
}
