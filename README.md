# bcc-icons
Icons used in the BCC design system, adapted from Material Symbols.

[![version](https://img.shields.io/npm/v/@bcc-code/icons)](https://github.com/bcc-code/bcc-icons/releases) [![license](https://img.shields.io/npm/l/@bcc-code/icons)](https://github.com/bcc-code/bcc-icons/blob/main/LICENSE) [![install size](https://packagephobia.com/badge?p=@bcc-code/icons)](https://packagephobia.com/result?p=@bcc-code/icons)

The basis of this package are the [outlined SVG icons](https://github.com/marella/material-design-icons/tree/main/svg/outlined) from [Material Symbols](https://fonts.google.com/icons?icon.style=Outlined). Some icons might be redesigned by the design team and replace the default icons.

## Usage
The `@bcc-code/icons` package contains raw SVG icons. You can install it from npm:
```sh
npm install @bcc-code/icons
```

But in most cases, you should install a framework-specific package.

### Vue
First, install `@bcc-code/icons-vue` from npm:

```sh
npm install @bcc-code/icons-vue
```

Now each icon can be imported individually as a Vue component:

```vue
<template>
  <div>
    <SearchIcon class="h-6 w-6 text-blue-500"/>
    <p>...</p>
  </div>
</template>

<script setup>
import { SearchIcon } from '@bcc-code/icons-vue'
</script>
```

Icons use an upper camel case naming convention and are always suffixed with the word `Icon`.

[Browse the full list of icon names on UNPKG &rarr;](https://unpkg.com/browse/@bcc-code/icons-vue)

## Release a new version of this package
First, create a Git tag and update the `package.json` files for both the top-level package and the Vue package. The easiest way is to use `npm version`:
```sh
npm version 0.1.0
```

Then push this tag to GitHub:
```sh
git push --follow-tags
```

This will automatically create a [new release](https://github.com/bcc-code/bcc-icons/releases) in GitHub. Publish this release and the packages will automatically be published to npm.

## License
This package is licensed under the [Apache 2.0 license](./LICENSE).
