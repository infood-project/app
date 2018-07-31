import React from 'react';
import { SocialIcon, Input, Button, Divider } from 'react-native-elements';
import { Dimensions, View, Image, StyleSheet } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class Login extends React.Component {
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
                />
            </View>

            <View style={styles.socialIcon}>
                <SocialIcon
                    title='Logga in med Facebook'
                    button
                    type='facebook'
                    style={styles.socialBtn}
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
        marginTop: SCREEN_HEIGHT - 700,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: SCREEN_WIDTH - 205, 
        height: SCREEN_HEIGHT - 642
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
        borderRadius: 3,
    }
  });