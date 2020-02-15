import React, {Component} from 'react';
import {Appbar, Provider as PaperProvider} from 'react-native-paper';
import {TextInput, ThemeProvider, Button} from 'react-native-paper';
import {connect} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container0: {
    flexDirection: 'column',
    // justifyContent: 'flex-start',
    backgroundColor: '#EFF1F5',
    // position: 'relative',
    height: '100%',
  },
  spinnerTextStyle: {
    color: '#FFF',
    fontSize: 14,
  },
  container1: {
    alignItems: 'center',
    backgroundColor: '#EFF1F5',
  },

  signinbutton: {
    backgroundColor: '#E36E39',
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 8,
  },

  welcome: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 5,
  },
  instructions: {
    marginTop: 9,
    alignSelf: 'center',
    textAlign: 'center',
    width: '80%',
    color: '#333333',
    fontSize: 13,
    bottom: 0,
  },

  usernameInput: {
    fontSize: 35,
    marginTop: 10,
    width: '90%',
    backgroundColor: '#EFF1F5',
  },
  passwordInput: {
    backgroundColor: 'green',
    fontSize: 25,
    marginTop: 10,
    width: '90%',
    backgroundColor: '#EFF1F5',
  },
});

class App extends Component {
  state = {
    username: '',
    password: '',
  };

  render() {
    return (
      <View>
        <Appbar.Header style={{backgroundColor: '#E3904D'}}>
          <Appbar.BackAction onPress={this._goBack} />
          <Appbar.Content title="Login" />
          <Appbar.Content />
        </Appbar.Header>

        <KeyboardAvoidingView
          style={styles.container0}
          behavior="padding"
          enabled>
          <StatusBar barStyle="dark-content" backgroundColor="#EFF1F5" />

          <Spinner
            visible={this.state.spinner}
            textContent={'Loading...'}
            textStyle={styles.spinnerTextStyle}
          />

          <View style={styles.container1}>
            <Text style={styles.welcome}>Sign in to your Account</Text>

            <TextInput
              label="username"
              label="PHONE NUMBER"
              keyboardType="email-address"
              mode="flat"
              autoCapitalize="none"
              value={this.state.username}
              onChangeText={username => this.setState({username})}
              style={styles.usernameInput}
            />

            <View style={styles.passwordInput}>
              <TextInput
                label="password"
                label="Password"
                secureTextEntry={this.state.passwordVisible}
                mode="flat"
                autoCapitalize="none"
                value={this.state.password}
                onChangeText={password => this.setState({password})}
              />
            </View>

            <View style={{flexDirection: 'row', marginTop: 7, width: '90%'}}>
              <TouchableOpacity>
                <Text style={{alignSelf: 'center'}}>{'  '}Remember me </Text>
              </TouchableOpacity>

              <Text
                style={{alignSelf: 'center', color: '#E36E39'}}
                onPress={() =>
                  this.props.navigation.navigate('EmailConfirmation')
                }>
                Forgot Password ?
              </Text>
            </View>

            <Button
              mode="contained"
              onPress={() => signInClick()}
              style={styles.signinbutton}>
              LOGIN
            </Button>

            {/* <Text
            style={{
              // alignSelf: 'center',
              marginTop: 12,
            }}>
            New User?
          </Text> */}
            <Button
              mode="outlined"
              color={'#3f51b5'}
              style={{
                height: 50,
                width: 150,
                borderColor: '#3f51b5',
                justifyContent: 'center',
                //  alignSelf: 'center',
                marginTop: 10,
                elevation: 1,
              }}>
              Get Started
            </Button>
          </View>
          <View
            style={{position: 'absolute', bottom: '1%', alignSelf: 'center'}}>
            <Text style={{textAlign: 'center'}}>
              Your details are secure with 256-bit encription enabled.
            </Text>

            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 5,
              }}>
              <Text style={{fontSize: 13, marginTop: 3}}>Powered by </Text>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

export default App;
