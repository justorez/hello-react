module.exports = {
    semi: false,
    singleQuote: true,
    tabWidth: 2,
    useTabs: false,
    trailingComma: 'none',
    singleAttributePerLine: true,
    htmlWhitespaceSensitivity: 'ignore',
    overrides: [
        {
            files: ['*.json', '*.yaml', '*.yml'],
            options: {
                tabWidth: 2
            }
        }
    ]
}
