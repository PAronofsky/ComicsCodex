'use strict';

var React = require('react-native');
var {
    Navigator,
    AsyncStorage,
    Alert
} = React;

var LedgexHome = require('../views/Home');
var LedgexLogin = require('../views/Login');
var LedgexProfileScreen = require('../views/Profile');
var LedgexSearch = require('../views/Search');
var LedgexSearchChooseEntity = require('../views/SearchChooseEntity');
var LedgexSettingsScreen = require('../views/Settings');
var LedgexTenantChooser = require('../views/TenantChooser');
var LedgexForgotPassword = require('../views/ForgotPassword');

var LedgexNavigator = React.createClass({
  renderScene: function(route, nav) {

    AsyncStorage.setItem('last_screen', route.id);

    switch (route.id) {
        case 'home':
            return (
                <LedgexHome navigator={nav} auth_headers={route.auth_headers}/>
            );
        case 'tenantChooser':
            return (
                <LedgexTenantChooser navigator={nav} data={route.data} auth_headers={route.auth_headers}/>
            );
        case 'profile':
            return (
                <LedgexProfileScreen navigator={nav} list={route.list} listName={route.listName} data={route.data} auth_headers={route.auth_headers}/>
            );
        case 'settings':
            return (
                <LedgexSettingsScreen navigator={nav} />
            );
        case 'search':
            return (
                <LedgexSearch navigator={nav} auth_headers={route.auth_headers} list={route.list} listName={route.listName} />
            );
        case 'searchChooseEntity':
            return (
                <LedgexSearchChooseEntity navigator={nav} auth_headers={route.auth_headers} />
            );
        case 'forgotPassword':
            return (
                <LedgexForgotPassword navigator={nav} />
            );
        default:
            return (
                <LedgexLogin navigator={nav}/>
            );
      }
    },

    render: function() {
        return (
            <Navigator
                ref={this._setNavigatorRef}
                style={{flex: 1}}
                initialRoute={{  }}
                renderScene={this.renderScene}
                configureScene={(route) => {
                if (route.sceneConfig) {
                  return route.sceneConfig;
                }
                  // May need something specific for IOS
                  return Navigator.SceneConfigs.FloatFromBottomAndroid;
                }} />
        );
    },
    _setNavigatorRef: function(navigator) {
        if (navigator !== this._navigator) {
            this._navigator = navigator;
        }
    },
});

module.exports = LedgexNavigator;
