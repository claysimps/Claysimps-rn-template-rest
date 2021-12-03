# Claysimps RN Template REST
This is a basic template with common libraries and project configurations to help get you up and running quickly! For more Information on the template and how to edit it, search `@Remarks` in the project.

### Libraries installed and configured out the box
* **React Navigation** — Navigation
* **Redux Toolkit — **Global State
*  **React Query — **Server State Management (using Axios)
*  **React Native Magnus UI — **UI Library
*  **React Native Vector Icons — **Icon Library
* **TypeScript Aliases — **for importing files

# Project Structure 
## Folders
### `api`
This folder should contain all queries, mutations, and subscriptions. 
Add your api hooks here like so:
export const useGetSomething = (value: string) =>
  useQuery<Something>({
    queryKey: [QUERY_KEYS.SOMETHING, value],
    queryFn: () => getSomething(value),
  });
For a full example, check out `api/exampleGet/exampleGet.tsx`

### `common`
This folder contains folders that are commonly used across your project
**components**
For all common components
**constants**
For all constants, e.g., endpoints, enums, app theme settings
**helpers**
For all helper/utility functions
**Hooks**
For all common hooks
**types**
For all common types and interfaces

### `screens`
Contains the UI for all screens. Each screen should be composed of features.

### `features`
All logic and api calls for screens should be contained in the particular feature folder. 

# Installed Libraries
## React Navigation
### RootStack:
`RootStack` is the entry point for your app. It contains a preconfigured bottom tabs component and, if needed, an authentication component. 

`<Group>` can be used to group similar screens, e.g., half screen modals.

### `BottomTabStack`:
Contains four tabs with text and icon. To change the name of the tab, edit the title of the corresponding screen title in the `options` prop.
<Screen options={{ title: 'Home' }} name={SCREENS.Home} component={Home} />

To change the icons, edit the corresponding `iconName` in `common/components/BottomTabsBar/iconDetails`

## Redux Toolkit
All preconfigured, just add slices and selectors! For examples, check out `state/counter.slice.ts`, `state/index.ts`, and `selectors/getCount.ts` 

## React Query
To begin using React Query in your project, you need to add your endpoints to `common/constatnts/endpoints.ts` then Open `App.tsx` and uncomment lines:
* 9
* 11
* 36 and
* 38
## React Native Magnus UI
The library theme’s set up and ready to go, just add the apps colours and fonts in `common/constants/theme.ts`.

To add your own custom fonts to the `Text` component, add your fonts to the project and set them in the `Text` component — `common/components/Text`.

## React Native Vector Icons
All set up and good to go with an extendable `Icon` component that can be found in `common/components/Icon.tsx`. The `Icon` component uses MaterialCommunity icons by default. You can extend the switch case with other libraries, just import the library you’d like to use, load the font (`iconName/loadFont()`), and add it to the `iconType` switch case on line 22.

# Config
## TypeScript Aliases
The typescript alias has been set to `@myApp/`. You can change it by searching `@myApp` and changing all instances to your app name. 

To use the alias, you can import from any folder in your project directory, e.g., in `App..tsx`:
import { theme } from '@myApp/common';
import { RootStack } from '@myApp/navigation';
import { store } from '@myApp/state';

## Hermes Engine
Hermes engine is enabled for Android and iOS.
