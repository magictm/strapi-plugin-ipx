import type { Strapi } from '@strapi/strapi'
import { PluginConfig } from './config'
import pluginId from './pluginId'

import Router from '@koa/router'
import { existsSync, mkdirSync } from 'fs'
import { createIPX, ipxFSStorage } from 'ipx'
import { resolve } from 'path'
import createMiddleware from './middlewares'


const register = ({ strapi }: { strapi: Strapi }) => {
    // register phase
    const config = strapi.config.get('plugin.' + pluginId) as PluginConfig
    const srcDir = strapi.dirs?.static?.public ?? strapi.dirs?.['public']

    const options = {
        config,
        srcDir
    }

    strapi.log.info(`Using MagicTM ipx plugin`)
    strapi.log.info(`- Source directory: ${srcDir}`)

    if (config.cacheDir) {
        const cwd = process.cwd()
        config.cacheDir = resolve(cwd, config.cacheDir)

        // prevent cache directory from being in source directory
        if (config.cacheDir.startsWith(srcDir)) {
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
                dir: srcDir + path,
            }),
        })

        router.get(`${path}/(.*)`, createMiddleware(ipx, options))
    })

    strapi.server.use(router.routes())
}

export default register
