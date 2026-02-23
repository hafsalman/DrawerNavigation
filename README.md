# 📂 Drawer Navigation App

A mobile application built using **React Native with Expo** that demonstrates the implementation of Drawer Navigation using React Navigation.

The app allows users to navigate between multiple screens using a side drawer menu, similar to many real-world mobile applications.

---

## Tech Stack

- React Native
- Expo
- JavaScript (ES6)
- React Navigation
- Node.js
- Git & GitHub

---

## Dependencies Used

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

Add the following ``` "@react-native-community/cli": "latest", ``` under "devDependencies" in the file "package.json" like this:

```
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

---

## Installation & Setup

### 1️⃣ Clone the Repository
``` bash 
git clone https://github.com/hafsalman/DrawerNavigation
```

### 2️⃣ Initialize Expo Project
``` bash
npx create-expo-app DrawerNav --template expo-template-blank
```

### 3️⃣ Navigate to Project Folder
``` bash
cd DrawerNav
```

(Replace the default App.js with the cloned App.js and add the rest of the folders and ``` babel.config.js ```.)

### 4️⃣ Install Dependencies

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

Add the following ``` "@react-native-community/cli": "latest", ``` under "devDependencies" in the file "package.json" like this:

```
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

### 5️⃣ Start the Development Server
``` bash
npx expo start
```

## Learning Objectives

This project was developed to practice:

- Implementing Drawer Navigation
- Managing multiple screens
- Using NavigationContainer
- Customizing drawer menu items
- Structuring React Native applications
