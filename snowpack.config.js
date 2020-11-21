/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
        public: "/",
        src: "/_dist_",
    },
    plugins: [
        "@snowpack/plugin-svelte",
        "@snowpack/plugin-dotenv",
        "@snowpack/plugin-optimize",
    ],
    install: [
        /* ... */
    ],
    installOptions: {
        /* ... */
    },
    devOptions: {
        /* ... */
    },
    buildOptions: {
        out: "dist/",
        clean: true,
        baseUrl: "/",
        metaDir: "static/snowpack",
        webModulesUrl: "web",
        sourceMaps: false,
    },
    proxy: {
        /* ... */
    },
    alias: {
        /* ... */
    },
};
