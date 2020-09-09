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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { globalStyles } from '../styles/global';
import * as SessionActions from '../state/actions/session';

const SendCodeToEmail = (props) => {
    const { colors } = useTheme();

    const [data, setData] = React.useState({
        username: ''
    });

    const textInputChange = (val) => {
        setData({username: val});
    }

    const handleValidUser = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }
    
    const redefineHandle = async () => {

        if ( data.username.length == 0) {
            Alert.alert('Wrong Input!', 'The username field is empty', [{text: 'Okay'}]);
            return;
        }
        
        try {
            await Auth.forgotPassword(data.username.trim())
                .then(() => { props.navigation.navigate('RedefinePassword', { username: data.username.trim() }); });
        } catch(error) {
            Alert.alert('Ops!', error.message, [{text: 'Okay'}]);
            return;
        }
    }

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='gold' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Recover your password!</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <ScrollView>
                <Text style={[styles.text_footer, globalStyles.textColor]}>Username</Text>
                <View style={styles.action}>
                    <FontAwesome 
                        name="user-o"
                        color={colors.text}
                        size={20}
                    />
                    <TextInput 
                        placeholder="Your Username"
                        placeholderTextColor="#666666"
                        style={[styles.textInput, globalStyles.textColor]}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange(val)}
                        onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                    />
                    {data.check_textInputChange ? 
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
            </ScrollView>

            <TouchableOpacity onPress={redefineHandle}>
                <LinearGradient
                    colors={['yellow', 'gold']}
                    style={styles.signIn}
                >
                    <Text style={styles.textSign || globalStyles.textColor}>Send me the code</Text>
                </LinearGradient>
            </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(SendCodeToEmail)


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