# Expo App with Custom Template and Tailwind CSS

This project is a customized [Expo](https://expo.dev) application where the default template has been removed and Tailwind CSS has been integrated using NativeWind. All initial configuration has been completed, allowing you to start development immediately.

## Getting Started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

After starting the app, you'll see options to open it in:

- [Development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go)

This project uses [file-based routing](https://docs.expo.dev/router/introduction). You can start developing by editing files in the **app** directory.

## Tailwind CSS with NativeWind

This project has been configured with Tailwind CSS using NativeWind, which allows you to use Tailwind's utility classes in React Native. All necessary configuration has been set up, so you can immediately use Tailwind classes in your components.

## Setting up iOS Simulator for Mac Users

For proper iOS testing, follow these steps:

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

## Setting up Android Environment

**Important:** To properly view Tailwind CSS styles in Expo Go on Android devices, you must install Android SDK through Android Studio:

1. Download and install [Android Studio](https://developer.android.com/studio)
2. During installation, ensure the "Android SDK" option is selected
3. After installation, open Android Studio and navigate to SDK Manager to install the necessary SDK packages
4. Create and configure an Android Virtual Device (AVD) using the AVD Manager

Without proper Android SDK installation, Tailwind CSS styles may not render correctly in Expo Go.

## Starting Fresh

If you want to reset to a clean starting point:

```bash
npm start -c
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory for fresh development.

## Learn More

To deepen your knowledge about developing with Expo:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals or explore advanced topics with [guides](https://docs.expo.dev/guides)
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Step-by-step project creation for Android, iOS, and web

## Join the Community

Connect with other developers creating universal apps:

- [Expo on GitHub](https://github.com/expo/expo): View the open source platform and contribute
- [Discord community](https://chat.expo.dev): Chat with Expo users and get support
