import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Image, StatusBar, Platform } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { globalStyles } from '../styles/global';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'react-native-paper';


export default function CustomTextInput({ label, placeholder, icon, errorMsg, onChange, regex, keyboardType }) {

    const { colors } = useTheme();

    const [data, setData] = React.useState({
        inputText: '',
        isValidText: true,
    });
    
    const textInputChange = (val) => {
        if (!regex) {
            setData({...data, inputText: val, isValidText: true});
            onChange(val, true);
            return;
        }

        if(val.match(regex)) {
            setData({
                ...data,
                inputText: val,
                isValidText: true
            });
            onChange(val, true);
        } else {
            setData({
                ...data,
                inputText: val,
                isValidText: false
            });
            onChange(val, false);
        }
    }

    return (     
        <>
            <Text style={[styles.text_footer, globalStyles.textColor]}>{label}</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name={icon}
                    color={colors.text}
                    size={20}
                />
                <TextInput 
                    placeholder={placeholder}
                    placeholderTextColor="#666666"
                    style={[styles.textInput, globalStyles.textColor]}
                    autoCapitalize="none"
                    keyboardType={keyboardType ? keyboardType : 'default'}
                    onChangeText={(val) => textInputChange(val)}
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
            { data.isValidText ? null : 
                <Animatable.View animation="fadeInLeft" duration={500}>
                    <Text style={styles.errorMsg}>{errorMsg}</Text>
                </Animatable.View>
            }
        </>
    );
}

const styles = StyleSheet.create({
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        color: '#05375a',
    },
    action: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        backgroundColor: 'white'        
    }
});
  