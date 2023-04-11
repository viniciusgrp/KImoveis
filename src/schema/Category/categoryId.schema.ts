import * as yup from 'yup'

export const categoryIdSchema = yup.object().shape({
    id: yup.string().uuid()
})
