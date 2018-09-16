/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Text,
  View
} from 'react-native';
import CodePush from 'react-native-code-push'
var CodePushDemo=React.createClass({
  async sync() {
    let self = this;
    try {
      return await CodePush.sync(
        {
          installMode: CodePush.InstallMode.IMMEDIATE,
        },
        (syncStatus) => {
          switch(syncStatus) {
            case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
              self.setState({
                syncMessage: "Checking for update."
              });
              break;
            case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
              self.setState({
                syncMessage: "Downloading package."
              });
              break;
            case CodePush.SyncStatus.AWAITING_USER_ACTION:
              self.setState({
                syncMessage: "Awaiting user action."
              });
              break;
            case CodePush.SyncStatus.INSTALLING_UPDATE:
              self.setState({
                syncMessage: "Installing update."
              });
              break;
            case CodePush.SyncStatus.UP_TO_DATE:
              self.setState({
                syncMessage: "App up to date.",
                progress: false
              });
              break;
            case CodePush.SyncStatus.UPDATE_IGNORED:
              self.setState({
                syncMessage: "Update cancelled by user.",
                progress: false
              });
              break;
            case CodePush.SyncStatus.UPDATE_INSTALLED:
              self.setState({
                syncMessage: "Update installed.",
                progress: false
              });
              break;
            case CodePush.SyncStatus.UNKNOWN_ERROR:
              self.setState({
                syncMessage: "An unknown error occurred.",
                progress: false
              });
              break;
          }
        },
        (progress) => {
          self.setState({
            progress: progress
          });
        }
      );
    } catch (error) {
      CodePush.log(error);
    }
  },

  componentDidMount() {
      CodePush.notifyApplicationReady();
  },

  getInitialState() {
    return { restartAllowed: true };
  },

  toggleAllowRestart() {
    if (this.state.restartAllowed) {
      CodePush.disallowRestart();
    } else {
      CodePush.allowRestart();
    }
    this.setState({restartAllowed: !this.state.restartAllowed});
  },

  render() {
    let syncView, syncButton, progressView;

    if (this.state.syncMessage) {
      syncView = (
        <Text style={styles.messages}>{this.state.syncMessage}</Text>
      );
    } else {
      syncButton = (
        <TouchableOpacity onPress={this.sync}>
          <Text style={{color: 'green', fontSize: 17}}>Start Sync!</Text>
        </TouchableOpacity>
      );
    }

    if (this.state.progress) {
      progressView = (
        <Text style={styles.messages}>{this.state.progress.receivedBytes} of {this.state.progress.totalBytes} bytes received</Text>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to CodePush!
        </Text>
        {syncButton}
        {syncView}
        {progressView}
        {/*<Image style={styles.image} resizeMode={Image.resizeMode.contain} source={require('./images/laptop_phone_howitworks.png')}/>*/}
        <TouchableOpacity onPress={this.toggleAllowRestart}>
          <Text style={{color: 'blue', fontSize: 17}}>Restart { this.state.restartAllowed ? "allowed" : "forbidden"}</Text>
        </TouchableOpacity>
      </View>
    );
  }
});

let styles = StyleSheet.create({
  image: {
    marginTop: 50,
    width: Dimensions.get('window').width - 100,
    height: 365 * (Dimensions.get('window').width - 100) / 651,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 50
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  messages: {
    textAlign: 'center',
  },
});

AppRegistry.registerComponent('CodePushDemo', () => CodePushDemo);
