# Mobile Auth & Push Notification App

This is a React Native cross-platform mobile app for Android and iOS that supports user login via Firebase Authentication and push notifications via Firebase Cloud Messaging (FCM).

## Setup Instructions

1. Clone the repository and navigate to the project directory.

2. Install dependencies:

```bash
npm install
```

3. Firebase Setup:

- Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
- Enable Email/Password Authentication in Firebase Authentication.
- Set up Firebase Cloud Messaging.
- Download the `google-services.json` file for Android and place it in `android/app/`.
- Download the `GoogleService-Info.plist` file for iOS and place it in `ios/` directory.

4. Update Firebase config in `src/firebase.js` with your Firebase project credentials.

5. Run the app:

- For Android:

```bash
npm run android
```

- For iOS:

```bash
npm run ios
```

## Features

- User login with email and password.
- Push notifications using Firebase Cloud Messaging.
- Cross-platform support for Android and iOS.

## Notes

- Make sure to configure your Firebase project correctly for push notifications.
- For iOS, additional setup with APNs and capabilities is required.
