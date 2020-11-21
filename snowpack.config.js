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
        out: "docs/",
        baseUrl: "/social-media-dashboard",
        clean: true,
    },
    proxy: {
        /* ... */
    },
    alias: {
        /* ... */
    },
};
