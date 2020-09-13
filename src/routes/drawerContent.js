import React from 'react';
import { View, StyleSheet } from 'react-native';
import { 
    useTheme, Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch
} from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Auth } from 'aws-amplify';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import * as SettingsActions from '../state/actions/settings';


const DrawerContent = (props) => {
   
    const paperTheme = useTheme();

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
                                <Title style={styles.title}>John Doe</Title>
                                <Caption style={styles.caption}>@j_doe</Caption>
                            </View>
                        </View>
                    </View>
                    
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Inicio"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon 
                                name="alpha-p" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Produtos"
                            onPress={() => {props.navigation.navigate('Products')}}
                        >
                        </DrawerItem>                         
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="archive" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Fornecedores"
                            onPress={() => {props.navigation.navigate('Suppliers')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="information" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Sobre"
                            onPress={() => {props.navigation.navigate('About')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon 
                                name="account" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        >
                        </DrawerItem>
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={handleSetIsDarkTheme}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {
                        props.actions.logout();
                        Auth.signOut();
                    }}
                />
            </Drawer.Section>
        </View>
    );
}

const mapStateToProps = (state, ownProps) => ({ })

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