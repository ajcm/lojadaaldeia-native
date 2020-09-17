import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { 
    Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch
} from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Auth } from 'aws-amplify';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { useTheme } from '@react-navigation/native';

import * as SettingsActions from '../state/actions/settings';


const DrawerContent = (props) => {

    const theme = useTheme();
    
    useEffect(() => {
        checkUser()
    }, [])

    const [user, setUser] = useState({})

    async function checkUser() {
        try {
            const data = await Auth.currentUserPoolUser();
            setUser({ username: data.username, ...data.attributes });
        } catch (err) { 
            Alert.alert('Ops!', 'failed to connect to the server.', [
                {text: 'Okay'}
            ]);
        }
    }
    
    const handleSetIsDarkTheme = () => {
        props.actions.toggleTheme();
    }

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={{
                                    uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>{user && user.username}</Title>
                                <Caption style={styles.caption}>{user && user.email}</Caption>
                            </View>
                        </View>
                    </View>
                    
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (<Icon name="home-outline" color={color} size={size} />)}
                            label="Inicio"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (<Icon name="alpha-p" color={color} size={size} />)}
                            label="Produtos"
                            onPress={() => {props.navigation.navigate('Products')}}
                        >
                        </DrawerItem>                         
                        <DrawerItem 
                            icon={({color, size}) => (<Icon name="view-list" color={color} size={size} />)}
                            label="Fornecedores"
                            onPress={() => {props.navigation.navigate('SuppliersList')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (<Icon name="information" color={color} size={size}/>)}
                            label="Sobre"
                            onPress={() => {props.navigation.navigate('About')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (<Icon name="account" color={color} size={size} />)}
                            label="Perfil"
                            onPress={() => {props.navigation.navigate('Account')}}
                        >
                        </DrawerItem>
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={handleSetIsDarkTheme}>
                            <View style={styles.preference}>
                                <Text style={{ color: theme.colors.text }}>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={props.isDarkTheme} style={{color: theme.colors.background}} />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (<Icon name="exit-to-app" color={color} size={size}/>)}
                    label="Sign Out"
                    onPress={() => { Auth.signOut(); }}
                />
            </Drawer.Section>
        </View>
    );
}

const mapStateToProps = (state, ownProps) => ({
    isDarkTheme: state.settings.isDarkTheme
})

const mapDispatchToProps = dispatch => ({    
    actions: bindActionCreators(SettingsActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent)

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
});