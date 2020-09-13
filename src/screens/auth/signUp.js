import React from 'react';
import { 
    View, 
    Text, 
    Alert, 
    TouchableOpacity, 
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Auth } from 'aws-amplify';

import { globalStyles } from '../../styles/global';
import * as SessionActions from '../../state/actions/session';

const SignUp = (props) => {

    const InputType = {
        PHONE: 'phone',
        EMAIL: 'email'
    }

    const [data, setData] = React.useState({
        email: '',
        phone_number: '',
        password: '',
        confirm_password: '',
        check_emailInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });

    const textInputChange = (val, inputType) => {
        switch(inputType) {
            case InputType.PHONE:
                setData({
                    ...data,
                    phone_number: val,
                    check_phoneInputChange: val.length !== 0
                });
                break;
            case InputType.EMAIL:
                setData({
                    ...data,
                    email: val,
                    check_emailInputChange: val.length !== 0
                });
                break;
        }        
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }

    
    const registerHandle = async () => {

        if ( data.email.length == 0 || data.phone_number.length == 0 || data.password.length == 0) {
            Alert.alert('Wrong Input!', 'Make sure you filled out all fields.', [
                {text: 'Okay'}
            ]);
            return;
        }

        try {
            await Auth.signUp({ username: data.email, password: data.password, attributes: { phone_number: data.phone_number } })
                .then(() => { props.navigation.navigate('ConfirmSignUp', { username: data.email.trim() }); });
        } catch(error) {
            Alert.alert('Ops', error.message, [{text: 'Okay'}]);
            return;
        }
    }

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='gold' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Register Now!</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <ScrollView>
            <Text style={[styles.text_footer, globalStyles.textColor]}>Email</Text>
            <View style={styles.action}>
                <TextInput 
                    placeholder="Your email"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val, InputType.EMAIL)}
                />
                {data.check_usernameInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>

            <Text style={[styles.text_footer, globalStyles.textColor]}>Phone</Text>
            <View style={styles.action}>
                <TextInput 
                    placeholder="Your Phone number"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val, InputType.PHONE)}
                />
                {data.check_nameInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>

            <Text style={[styles.text_footer, { marginTop: 35 }, globalStyles.textColor]}>Password</Text>
            <View style={styles.action}>
                <TextInput 
                    placeholder="Your Password"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => handlePasswordChange(val)}
                />
                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>

            <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Confirm Password</Text>
            <View style={styles.action}>
                <TextInput 
                    placeholder="Confirm Your Password"
                    secureTextEntry={data.confirm_secureTextEntry ? true : false}
                    style={[styles.textInput, globalStyles.textColor]}
                    autoCapitalize="none"
                    onChangeText={(val) => handleConfirmPasswordChange(val)}
                />
                <TouchableOpacity
                    onPress={updateConfirmSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>
            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                    By signing up you agree to our
                </Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Terms of service</Text>
                <Text style={styles.color_textPrivate}>{" "}and</Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Privacy policy</Text>
            </View>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => {registerHandle( data.username, data.password )}}
                >
                <LinearGradient
                    colors={['yellow', 'gold']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Sign Up</Text>
                </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => props.navigation.goBack()}
                    style={[styles.signIn, {
                        borderColor: 'gold',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: 'gold'
                    }]}>Sign In</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </Animatable.View>
      </View>
    );
};

const mapStateToProps = state => {
    return { }
}

const mapDispatchToProps = dispatch => ({
    actions: {
        session: bindActionCreators(SessionActions, dispatch)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)


const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: 'gold'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    }
  });