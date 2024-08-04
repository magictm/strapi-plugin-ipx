<p align="center">
  <a href="https://magictm.com" target="_blank" rel="noopener noreferrer">
    <img width="270" src="assets/logo.svg" alt="Project Logo"> 
  </a>
</p>

<br/>

<p align="center">
<a href='#'>
</a>
<a href="https://www.npmjs.com/package/@magictm/strapi-plugin-ipx" target="__blank"><img alt="NPM version" src="https://img.shields.io/npm/v/@magictm/strapi-plugin-ipx?flat&colorA=0e0a18&colorB=8c67ef"></a>
<a href="https://www.npmjs.com/package/@magictm/strapi-plugin-ipx" target="__blank"><img alt="NPM Downloads" src="https://img.shields.io/npm/dm/@magictm/strapi-plugin-ipx?flat&colorA=0e0a18&colorB=8c67ef"></a>
<a href="https://github.com/magictm/strapi-plugin-ipx" target="__blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/magictm/strapi-plugin-ipx?flat&colorA=0e0a18&colorB=8c67ef"></a>
</p>

<br/>

<h1 align='left'>MagicTM · Ipx · Strapi Plugin</h1>

🚀 The MagicTM Ipx Strapi Plugin simplifies deep population of content structures within your Strapi v4 applications. This plugin streamlines fetching nested data, making your API responses more comprehensive and developer-friendly.

🌐 Follow me: https://stawowczyk.me

## ⛓ Versions

Strapi v4 - (current) - v1.x

Tested on Strapi v4.25.4.

## Motivation

This plugin was originally created in https://github.com/strapi-community/strapi-plugin-local-image-sharp. Due to lack of maintenance, I decided to create a new plugin with the same functionality and more features.

## 📦 Features

- **Image Processing**: Resize, crop, and optimize images on the fly.
- **Cache**: Cache processed images for faster loading times.
- **Custom Paths**: Define custom paths for ipx to listen on.
- **Configuration**: Configure cache directory, cache duration, and more.
- [] **TODO: Debug Mode**: Enable detailed logs for debugging purposes.
- [] **TODO: Delete Cache**: Delete cache files on demand or automatically.

## 💻 Install

### 1. Install the plugin

```bash
npm install @magictm/strapi-plugin-ipx
```

### 2. Enable the plugin

Navigate to your Strapi project's configuration file:
`<strapi app root>/config/plugins.js` or `.ts`

Add the following code snippet:

#### Minimal configuration:

```ts
'magictm-ipx': {
    enabled: true,
}
```

#### Advanced configuration

```ts
'magictm-ipx': {
    enabled: true,
    config: {
        // Enable debug mode for detailed logs
        debug: false,
        // Cache dir
        cacheDir: '.my-cache',
        // Cache duration in seconds
        maxAge: 3600,
        // Paths for ipx to listen on
        paths: ['/uploads'],
    },
}
```

`cacheDir` can also be configured in `.env` file settings `STRAPI_PLUGIN_MAGICTM_IPX_CACHE_DIR`.

#### Full example (typescript)

```ts
export default () => ({
    // other plugins

    'magictm-ipx': {
        enabled: true,
    },
})
```

### 3. (Re)Start Your Application

For the changes to take effect, restart your Strapi application:

```
npm run develop
```

## 🚀 Usage



## 🤝 Contributing

Contributions to the MagicTM Ipx Strapi Plugin are always welcome! To contribute:

-   **Fork** the repository.
-   **Create** a new branch for your feature/bug fix.
-   **Commit** your changes with descriptive messages.
-   **Push** your changes to your forked repository.
-   **Submit** a pull request to the `master` branch.

## ☕️ Help me keep working on this project 💚

If you find this plugin valuable, consider supporting its development. Your contribution helps me maintain and improve this project.

-   Buy me a coffee: https://www.buymeacoffee.com/m7rlin
-   Support via PayPal: https://paypal.me/merlinArtist

## 🎖️ Sponsors

We appreciate all sponsors! Please contact us if you're interested in sponsoring this project.

## 📜 License

LGPL-2.1 License © 2024-PRESENT Marcin Stawowczyk (m7rlin)

Thank you for using the MagicTM Ipx Strapi Plugin! Let me know if you have any other questions.
