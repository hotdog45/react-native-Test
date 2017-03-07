/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import Navigation from './js/config/setup';

export default class test2RN extends Component {
  render() {
    return (
      <Navigation/>
    );
  }
}
AppRegistry.registerComponent('test2RN', () => test2RN);
