import type { Strapi } from '@strapi/strapi'
import { PluginConfig } from './config'
import pluginId from './pluginId'

import Router from '@koa/router'
import { createIPX, ipxFSStorage, ipxHttpStorage } from 'ipx'
import { resolve } from 'path'
import { existsSync, mkdirSync } from 'fs'
import createMiddleware from './middlewares'

const register = ({ strapi }: { strapi: Strapi }) => {
    // register phase
    const config = strapi.config.get('plugin.' + pluginId) as PluginConfig
    config.srcDir = strapi.dirs?.static?.public ?? strapi.dirs?.public

    strapi.log.info(`Using MagicTM ipx plugin`)
    strapi.log.info(`- Source directory: ${config.srcDir}`)

    if (config.cacheDir) {
        const cwd = process.cwd()
        config.cacheDir = resolve(cwd, config.cacheDir)

        // prevent cache directory from being in source directory
        if (config.cacheDir.startsWith(config.srcDir)) {
            throw new Error('Cache directory cannot be inside source directory')
        }

        // check if directory exists
        if (!existsSync(config.cacheDir)) {
            mkdirSync(config.cacheDir, { recursive: true })
        }

        strapi.log.info(`- Cache directory: ${config.cacheDir}`)
    }

    const router = new Router()

    config.paths.forEach((path) => {

        const ipx = createIPX({
            storage: ipxFSStorage({
                dir: config.srcDir + path,
            }),
        })

        router.get(`${path}/(.*)`, createMiddleware(ipx))
    })

    strapi.server.use(router.routes())
}

export default register
