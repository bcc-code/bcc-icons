/**
 * @see https://github.com/svg/svgo#built-in-plugins
 * @see https://github.com/twbs/icons/blob/main/svgo.config.js
 * @see https://github.com/mui-org/material-ui/blob/next/packages/material-ui-icons/builder.js
 * @see https://github.com/primer/octicons/blob/main/.svgo.yml
 */

const { extendDefaultPlugins } = require('svgo');

module.exports = {
  multipass: true,
  plugins: extendDefaultPlugins([
    'removeDimensions',
    'sortAttrs',
    {
      name: 'removeAttrs',
      params: {
        attrs: '(stroke|fill)',
      },
    },
    {
        name: 'addAttributesToSVGElement',
        params: {
            attributes: [
                { fill: 'currentColor' },
                { 'aria-hidden': 'true' }
            ]
        }
    }
  ]),
};