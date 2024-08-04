import * as yup from 'yup'

export const pluginConfigSchema = yup.object().shape({
    cacheDir: yup.string(),
    maxAge: yup.number().moreThan(0),
    paths: yup.array().of(yup.string()),
})
