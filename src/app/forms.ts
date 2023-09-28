class Option {
    id: number;
    title: string;
}

class FormField {
    type: string;
    label: string;
    value: any;
    description: string|null;
    options: Option[];
    multiple: boolean;

    constructor() {
        this.options = []
        this.multiple = false
    }
}

class Form {
    fields: FormField[]

    constructor() {
        this.fields = []
    }
}

const createStringFormField = (f) => {
    const field = new FormField()
    field.type = 'string'
    field.label = f.Title
    field.value = f.Value
    field.description = f.Description
    return field
}

const createEmailFormField = (f) => {
    const field = new FormField()
    field.type = 'email'
    field.label = f.Title
    field.value = f.Value
    field.description = f.Description
    return field
}

const createBooleanFormField = (f) => {
    const field = new FormField()
    field.type = 'boolean'
    field.label = f.Title
    field.value = f.Value
    field.description = f.Description
    return field
}

const createSelectFormField = (f) => {
    const field = new FormField()
    field.type = 'select'
    field.label = f.Title
    field.value = (Object.values(f.Value) ?? []).map((v): Option => {
        return {
            id: v.Id,
            title: v.Title,
        }
    })
    field.description = f.Description
    field.multiple = f.MultipleValues
    field.options = (Object.values(f.PossibleValues) ?? []).map((v): Option => {
        return {
            id: v.Id,
            title: v.Title,
        }
    })
    return field
}

function createFormFromResponse(response): Form {
    const form = new Form()
    Object.values(response.fields).forEach((f: any) => {
        switch (f.Type) {
            case 'string':
                form.fields.push(createStringFormField(f))
                break
            case 'email':
                form.fields.push(createEmailFormField(f))
                break
            case 'bool':
                form.fields.push(createBooleanFormField(f))
                break
            case 'list':
                form.fields.push(createSelectFormField(f))
                break
            default:
                console.log(f.Type)
        }
    })
    return form
}

export {
    Form,
    FormField,
    createFormFromResponse,
}
