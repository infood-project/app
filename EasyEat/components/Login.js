import React from 'react';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dimensions, View, Image, StyleSheet } from 'react-native';

import Authorization from '../cloud/Authorization';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class Login extends React.Component {
  constructor(props) {
      super(props);
      this.onSocialLogin = this.onSocialLogin.bind(this);
  }

  onSocialLogin() {
    Authorization.signIn();
  }

  render() {
    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <Image
                    style={styles.logo}
                    source={require('../assets/images/infood-blue.png')}
                />
            </View>

            <View style={styles.loginInput}>
                <Input
                    placeholder="Email"
                    containerStyle={{marginVertical: 10}}
                    inputStyle={{marginLeft: 10, color: 'white'}}
                    leftIcon={{ type: 'font-awesome', name: 'envelope-o' }}
                />
                 <Input
                    placeholder="Lösenord"
                    secureTextEntry={true}
                    containerStyle={{marginVertical: 10}}
                    inputStyle={{marginLeft: 10, color: 'white'}}
                    leftIcon={{ type: 'simple-line-icon', name: 'lock' }}
                />

                <Button
                    title="Logga in"
                    loading={false}
                    loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
                    activeOpacity={0.8}
                    titleStyle={{ fontWeight: "700" }}
                    buttonStyle={styles.loginBtn}
                    containerStyle={{ marginTop: 20 }}
                    linearGradientProps={{
                        colors: ['#2089dc', '#53a4e4'],
                        start: [1, 0],
                        end: [0.2, 0],
                    }}
                    onPress={this.onSocialLogin}
                />
                <Button
                    title='Logga in med Facebook'
                    titleStyle={{ fontSize: 14, fontWeight: "700" }}
                    icon={
                        <Icon
                            name='facebook'
                            color='#fff'
                            size={15}
                        />
                      }
                    activeOpacity={0.8}
                    buttonStyle={styles.socialBtn}
                    containerStyle={{ marginTop: 10 }}
                    onPress={this.onSocialLogin}
                />
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        marginTop: SCREEN_HEIGHT - 600,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: SCREEN_WIDTH - 205, 
        height: SCREEN_HEIGHT - 542
    },
    loginInput: {
        backgroundColor: 'white',
        borderRadius: 10,
        paddingTop: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginBtn: {
        width: 300,
        height: 52,
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 3
    },
    socialIcon: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    socialBtn: {
        width: 300,
        height: 52,
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 3,
        backgroundColor: '#3b5998'
    }
  });