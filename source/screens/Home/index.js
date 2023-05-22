import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigationComponentDidAppear } from 'react-native-navigation-hooks/dist';
import Icon from 'react-native-vector-icons/FontAwesome';

import PushNotification from "react-native-push-notification";
import PushNotificationIOS from "@react-native-community/push-notification-ios";

//import { withNamespaces, useTranslation } from 'react-i18next';

const Home = ({ componentId }) => {

    //const { t, i18n } = useTranslation();

    // Selectors
    const state = useSelector(s => s);
    console.log(state);
    
    // Actions
    const dispatch = useDispatch();

    // ComponentDidMount
    useEffect(() => {
        // PushNotification.localNotification({
        //   /* Android Only Properties */
        //   id: 0, // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
        //   ticker: "My Notification Ticker", // (optional)
        //   autoCancel: true, // (optional) default: true
        //   largeIcon: "ic_launcher", // (optional) default: "ic_launcher"
        //   smallIcon: "ic_notification", // (optional) default: "ic_notification" with fallback for "ic_launcher"
        //   bigText: "My big text that will be shown when notification is expanded", // (optional) default: "message" prop
        //   subText: "This is a subText", // (optional) default: none
        //   color: "red", // (optional) default: system default
        //   vibrate: true, // (optional) default: true
        //   vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
        //   tag: "some_tag", // (optional) add tag to message
        //   group: "group", // (optional) add group to message
        //   ongoing: false, // (optional) set whether this is an "ongoing" notification
        //   priority: "high", // (optional) set notification priority, default: high
        //   visibility: "private", // (optional) set notification visibility, default: private
        //   importance: "high", // (optional) set notification importance, default: high
        //   allowWhileIdle: false, // (optional) set notification to work while on doze, default: false
        //   ignoreInForeground: false, // (optional) if true, the notification will not be visible when the app is in the foreground (useful for parity with how iOS notifications appear)
        
        //   /* iOS only properties */
        //   alertAction: "view", // (optional) default: view
        //   category: "", // (optional) default: empty string
        //   userInfo: {}, // (optional) default: {} (using null throws a JSON value '<null>' error)
        
        //   /* iOS and Android properties */
        //   title: "My Notification Title", // (optional)
        //   message: "My Notification Message", // (required)
        //   playSound: false, // (optional) default: true
        //   soundName: "default", // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
        //   number: 10, // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
        //   repeatType: "day", // (optional) Repeating interval. Check 'Repeating Notifications' section for more info.
        //   actions: '["Yes", "No"]', // (Android only) See the doc for notification actions to know more
        // });
        // PushNotification.localNotificationSchedule({
        //   //... You can use all the options from localNotifications
        //   title: 'hello',
        //   message: "My Notification Message", // (required)
        //   date: new Date(Date.now() + 60 * 1000), // in 60 secs
        // });
        PushNotification.configure({
          // (optional) Called when Token is generated (iOS and Android)
          onRegister: function (token) {
            console.log("TOKEN:", token);
          },
        
          // (required) Called when a remote is received or opened, or local notification is opened
          onNotification: function (notification) {
            console.log("NOTIFICATION:", notification);
        
            // process the notification
        
            // (required) Called when a remote is received or opened, or local notification is opened
            notification.finish(PushNotificationIOS.FetchResult.NoData);
          },
        
          // IOS ONLY (optional): default: all - Permissions to register.
          permissions: {
            alert: true,
            badge: true,
            sound: true,
          },
        
          // Should the initial notification be popped automatically
          // default: true
          popInitialNotification: true,
        
          /**
           * (optional) default: true
           * - Specified if permissions (ios) and token (android and ios) will requested or not,
           * - if not, you must call PushNotificationsHandler.requestPermissions() later
           * - if you are not using remote notification or do not have Firebase installed, use this:
           *     requestPermissions: Platform.OS === 'ios'
           */
          requestPermissions: true,
        });
        PushNotification.cancelAllLocalNotifications();
      });

    // ComponentDidAppear
    useNavigationComponentDidAppear((e) => {
        console.log(e);
        console.log('ComponentDidAppear');
    });
    
    return (
        <ScrollView>
          <View style={styles.container}>
              <Text>Home</Text>
              <Text>
                  <Icon name="rocket" size={30} color="#900" />;
              </Text>
          </View>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    map: {
      //...StyleSheet.absoluteFillObject,
      width: '100%',
      height: 200,
      alignSelf: 'flex-end'
    },
});

