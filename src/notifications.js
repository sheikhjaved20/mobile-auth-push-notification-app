import { Platform, Alert } from 'react-native';
import messaging from '@react-native-firebase/messaging';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}

export async function getFcmToken() {
  let fcmToken = await messaging().getToken();
  if (fcmToken) {
    console.log('Your Firebase Cloud Messaging Token:', fcmToken);
  } else {
    console.log('Failed to get FCM token');
  }
  return fcmToken;
}

export function notificationListener() {
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
    Alert.alert('Notification', remoteMessage.notification?.title || '');
  });

  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
        Alert.alert('Notification', remoteMessage.notification?.title || '');
      }
    });

  messaging().onMessage(async remoteMessage => {
    console.log('Received in foreground:', remoteMessage);
    Alert.alert('Notification', remoteMessage.notification?.title || '');
  });
}
