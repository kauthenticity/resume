const path = require('path');

module.exports = {
    // '**/*.{scss, sass}': ['stylelint --fix'],
    '**/*.{js,jsx,ts,tsx,json,yaml,md,scss,sass,eslintrc}': ['prettier --write'],
    '**/*.{js,jsx,ts,tsx}': ['eslint --fix'],
};
