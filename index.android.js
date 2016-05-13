'use strict';
import React, {
    AppRegistry,
    Component,
} from 'react-native';

var CodexNavigator = require('./app/components/CodexNavigator');

class ComicsCodex extends Component {
    render() {
        return (
            <CodexNavigator/>
        )
    }
}

AppRegistry.registerComponent('ComicsCodex', () => ComicsCodex);