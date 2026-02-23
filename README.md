``` bash
npm install @react-navigation/native
npm install @react-navigation/drawer
npm install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context
npx expo install react-native-gesture-handler react-native-reanimated
npm install react-native-vector-icons	
npx expo install @expo/vector-icons  
npm install react-native-screens@~4.16.0
npm uninstall react-native-reanimated
npm install react-native-reanimated@~3.6.0
npm install react-native-reanimated@~4.1.1
npm install --save-dev babel-preset-expo  
npm install react-native-worklets@0.7.4  
npm install react-native-reanimated@latest
npx react-native start --reset-cache
```

Add the following ``` bash "@react-native-community/cli": "latest", ``` under "devDependencies" in the file "package.json" like this:

``` bash
  "devDependencies": {
    "@react-native-community/cli": "latest",
  }
```

Continue to run the following commands on terminal:

``` bash
npm install react-native-reanimated@~4.1.1 react-native-worklets@0.5.1
npm uninstall react-native-reanimated react-native-worklets
npm install expo@latest
npx expo install --fix 
```
(I swear I have no clue what magic these commands have but they actually ran in this order. I tried skipping installing packages that were being uninstalled later, but the navigation never worked.)
