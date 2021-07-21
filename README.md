# SelectMenuLibrary

## Run Locally 

-  run `nvm use` to get the correct node version 
-  if version `v15.2.1` is absent, please add it or a compatible version 
-  run `yarn` to get dependecies
-  run `yarn storybook` to see different use cases
-  run `yarn test` to run test cases
-  use examples from side menu to see different versions 

## Usage

### Using **published**. version 

There is already a published version on npm, as `ad-test-select` 
- add to your project with `yarn add ad-test-select`
- use as 
import { Select } from 'ad-test-select'

`<Select {...propsHere}/>`

### Publishing your own version 
If you want to publish your own package with some changes you can follow below steps

- change the package name in package.json
- Run `yarn build` 
- Run `yarn publish`
- use your npm credentials to upload the package 

- add to your project with `yarn add ${your_package_name}`
- use as 

import { Select } from ${your_package_name}

`<Select {...propsHere}/>`

### Using **local**. version 

 - to test **local** build version without publising it to npm
   - - cd ad-test-select
   - - yarn build
   - - yarn link
   - - cd node_modules/react
   - - yarn link
   - - cd ../../node_modules/react-dom
   - - yarn link
   - - cd YOUR_PROJECT
   - - yarn link ad-test-select
   - - yarn link react
   - - yarn link react-dom

import { Select } from 'ad-test-select'

`<Select {...propsHere}/>`
## Props

Typescript types are exported, below is the list of props for reference 

| Syntax      | Description | Required |
| ----------- | ----------- | ---------
| menuOptions | menu options for select       | true
| searchable   | boolean (enable search)      | false
| searchPlaceHolder   | string (place holder for search)      | false
| onChange   | function      | true
| selected   | preselcted value      | false
| renderOption | extended function to provide custom menu items | false
| isMenuOpen | boolean | false
| searchPlaceHolder | string | false
| dropDownlabel | string | false


```html
  selected = {
    value: string;
    label?: string; (not required)
  };
```
