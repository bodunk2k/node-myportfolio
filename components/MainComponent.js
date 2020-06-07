import React, { Component } from 'react';
import Home from './HomeComponent';
import Experience from './ExperienceComponent';
import PhoneScreen from '../screens/PhoneScreen';
import PhoneHistory from './PhoneHistory';
import PhoneHistoryScreen from '../screens/PhoneHistoryScreen';
import { View, Platform, StyleSheet } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import {store} from '../redux/store';

const ExperienceNavigator = createStackNavigator(
    {
        Experience: { screen: Experience}
    },
    {
        InitialRouteName: 'Experience',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home}
    },
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
)

const PhoneNavigator = createStackNavigator(
    {
        PhoneLookup: { screen: PhoneScreen}
    },
    {
        InitialRouteName: 'Phone Lookup',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
)

const PhoneHistNavigator = createStackNavigator(
    {
        PhoneHistory: { screen: PhoneHistoryScreen }
    },
    {
        InitialRouteName: 'Phone Lookup History',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
)
const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        Experience: {screen: ExperienceNavigator},
        PhoneLookup: {screen: PhoneNavigator},
        PhoneHistory: {screen: PhoneHistNavigator}
    },
    {
        drawerBackgroundColor: '#CEC8FF'
    }
);

class Main extends Component {
        render() {
            return ( 
                <View style={{
                    flex: 1,
                    paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
                    }}>
                      
                    <Provider store={store}>
                        <MainNavigator/>  
                    </Provider>     
                </View>
            );
        }
    
}

export default Main;