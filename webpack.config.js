var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    context: __dirname,
    plugins: [
        new BundleTracker({ path: __dirname, filename: './webpack-stats.json' })
    ]
};