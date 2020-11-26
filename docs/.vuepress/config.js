module.exports = {

    markdown: {
        anchor: { level: [2, 3] },
        extendMarkdown(md) {
            let markup = require("vuepress-theme-craftdocs/markup");
            md.use(markup);
        },
    },

    base: '/google-maps/',
    title: 'Google Maps plugin for Craft CMS',
    plugins: [
        [
            'vuepress-plugin-clean-urls',
            {
                normalSuffix: '/',
                indexSuffix: '/',
                notFoundPath: '/404.html',
            },
        ],
    ],
    theme: "craftdocs",
    themeConfig: {
        codeLanguages: {
            php: "PHP",
            twig: "Twig",
            js: "JavaScript",
        },
        logo: '/images/icon.png',
        searchMaxSuggestions: 10,
        nav: [
            {text: 'Getting Started️', link: '/getting-started/'},
            {
                text: 'Features',
                items: [
                    {text: 'Address Field', link: '/address-field/'},
                    {text: 'Dynamic Maps', link: '/dynamic-maps/'},
                    {text: 'Static Maps', link: '/static-maps/'},
                    {text: 'Proximity Search', link: '/proximity-search/'},
                    {text: 'Geocoding (Address Lookups)', link: '/geocoding/'},
                    {text: 'Visitor Geolocation', link: '/geolocation/'},
                ]
            },
            {
                text: 'Architecture',
                items: [
                    {text: 'Twig/PHP', link: '/helper/'},
                    {text: 'JavaScript', link: '/javascript/'},
                    {text: 'Models', link: '/models/'},
                    {text: 'Services', link: '/services/'},
                    {text: 'Events', link: '/events/'},
                ]
            },
            {
                text: 'Guides',
                items: [
                    {text: 'Linking to a Map', link: '/guides/linking-to-a-map/'},
                    {text: 'Setting Marker Icons', link: '/guides/setting-marker-icons/'},
                    {text: 'Styling a Map', link: '/guides/styling-a-map/'},
                    {text: 'KML Layers', link: '/guides/kml-layers/'},
                    {text: 'Region Biasing', link: '/guides/region-biasing/'},
                    {text: 'Filter by Subfields', link: '/guides/filter-by-subfields/'},
                    // {text: 'Address in a Matrix Field', link: '/guides/address-in-a-matrix-field/'}, // TODO: Make live before launch
                    {text: 'Prevent Zoom When Scrolling', link: '/guides/prevent-zoom-when-scrolling/'},
                    // {text: 'Internationalization Support', link: '/guides/internationalization-support/'}, // TODO: Make live before launch
                    {text: 'Bermuda Triangle', link: '/guides/bermuda-triangle/'},
                    {text: 'Updating from Smart Map', link: '/guides/updating-from-smart-map/'},
                    // {text: 'Importing Addresses', link: '/guides/importing-addresses/'}, // TODO: Integrate with Feed Me
                ]
            },
        ],
        sidebar: {
            // Getting Started
            '/getting-started/': [
                '',
                'api-keys',
                'settings',
                'config',
                // 'diagnostics', // TODO: Add diagnostics tools
            ],

            // Features
            '/address-field/': [
                '',
                'how-it-works',
                'settings',
                'in-twig',
                'front-end-form',
            ],
            '/dynamic-maps/': [
                '',
                'api',
                'chaining',
                'map-management',
                'universal-methods',
                'javascript-methods',
                'twig-php-methods',
                'info-windows',
                'locations',
            ],
            '/static-maps/': [
                '',
                'api',
                'chaining',
            ],
            '/proximity-search/': [
                '',
                'query-parameters',
                'options',
                // 'in-javascript', // TODO: Support JS methods
                // 'in-graphql', // TODO: Support GraphQL
            ],
            '/geolocation/': [
                '',
                'advanced',
                'service-providers',
                // 'html5', // TODO: Add HTML5 geolocation (?)
                // 'cookie', // TODO: Refine cookie & cache implementation
                // 'diagnostics', // TODO: Add diagnostics tools
            ],
            '/geocoding/': [
                '',
                'parameters',
                'methods',
                // 'via-ajax', // TODO: Support AJAX endpoints
            ],

            // Architecture
            '/helper/': [
                '',
            ],
            '/javascript/': [
                '',
                'googlemaps.js',
                'dynamicmap.js',
            ],
            '/models/': [
                '',
                'address-model',
                'visitor-model',
                'location-model',
                'lookup-model',
                'ipstack-model',
                'maxmind-model',
                'settings-model',
                'dynamic-map-model',
                'static-map-model',
                'coordinates',
            ],
            '/services/': [
                '',
                'api-service',
                'geocoding-service',
                'geolocation-service',
            ],
            '/events/': [
                '',
                'geocoding-event',
                'geolocation-event',
            ],

            // Guides
            '/guides/': [
                '',
                'linking-to-a-map',
                'setting-marker-icons',
                'styling-a-map',
                'kml-layers',
                'region-biasing',
                'filter-by-subfields',
                // 'address-in-a-matrix-field', // TODO: Make live before launch
                'prevent-zoom-when-scrolling',
                // 'internationalization-support', // TODO: Make live before launch
                'bermuda-triangle',
                'updating-from-smart-map',
                // 'importing-addresses',
            ],

            // // fallback
            // '/': [
            //     '',        /* / */
            //     'contact', /* /contact.html */
            //     'about',   /* /about.html */
            // ]
        }
    }
};
