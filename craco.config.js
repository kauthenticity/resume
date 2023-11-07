const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@lib': path.resolve(__dirname, 'src/lib'),
            '@constants': path.resolve(__dirname, 'src/constants'),
            '@types': path.resolve(__dirname, 'src/types'),
            '@styles': path.resolve(__dirname, 'src/styles'),
        },
    },
};
