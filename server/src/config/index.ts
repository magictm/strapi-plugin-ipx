import { pluginConfigSchema } from './schema'

export default {
    default: ({ env }) => ({
        cacheDir: env('STRAPI_PLUGIN_MAGICTM_IPX_CACHE_DIR', ''),
        maxAge: 3600,
        paths: ['/uploads'],
    }),
    validator(config) {
        pluginConfigSchema.validateSync(config)
    },
}

export interface PluginConfig {
    debug: boolean
    srcDir: string
    cacheDir: string
}
