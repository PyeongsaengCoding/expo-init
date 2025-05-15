# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Setting up iOS Simulator for Mac users

For macOS users, follow these steps to properly set up the iOS simulator:

```bash
# Register Xcode path
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
# Accept developer license agreement
sudo xcodebuild -license
# Launch iOS Simulator
open -a Simulator
```

To add new simulator devices:

1. Open Xcode
2. Navigate to Window > Devices and Simulators
3. Click the + button at the bottom to add a new device

## Setting up Android environment

To properly view Tailwind CSS styles in Expo Go on Android devices, you must install Android SDK through Android Studio:

1. Download and install [Android Studio](https://developer.android.com/studio)
2. During installation, ensure the "Android SDK" option is selected
3. After installation, open Android Studio and navigate to SDK Manager to install the necessary SDK packages
4. Create and configure an Android Virtual Device (AVD) using the AVD Manager

Without proper Android SDK installation, Tailwind CSS styles may not render correctly in Expo Go.

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
