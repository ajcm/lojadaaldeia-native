import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { ScrollView, Text, View, StyleSheet } from 'react-native';

class SideMenu extends Component {
  constructor() {
    super();    
    this.options = [
      {
        mainHeading: 'Inicio',
        navigationPath: 'Home',
        subOptions: []
      },
      {
        mainHeading: 'Selecao',
        navigationPath: 'Selection',
        subOptions: []
      },
      {
        mainHeading: 'Produtos',
        navigationPath: 'Products',
        subOptions: [
          { secondaryHeading: 'Vinhos', navigationPath: 'Wines' },
          { secondaryHeading: 'Queijos', navigationPath: 'Cheeses' },
          { secondaryHeading: 'Fumeiro', navigationPath: 'Smokes' }
        ],
      },
      {
        mainHeading: 'Casas',
        navigationPath: 'Providers',
        subOptions: []
      },
      {
        mainHeading: 'Regiao',
        navigationPath: 'Region',
        subOptions: []
      },
      {
        mainHeading: 'Sobre',
        navigationPath: 'About',
        subOptions: []
      }
    ];
  }

  navigateToScreen = route => () => {
      console.log(route);
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            {this.options.map((option, key) => (
              <View key={key}>
                <Text style={styles.mainHeading} onPress={this.navigateToScreen(option.navigationPath)}>
                    {option.mainHeading}
                </Text>
                {option.subOptions.map((item, key) => (
                  <View style={styles.secondaryHeading} key={key}>
                    <Text onPress={this.navigateToScreen(item.navigationPath)}>
                      {item.secondaryHeading}
                    </Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <MaterialCommunityIcons name="logout" size={20} style={styles.exitIcon} />
          <Text>Logout</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
  },
  secondaryHeading: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 30
  },
  mainHeading: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: 'lightgrey',
  },
  footerContainer: {
    padding: 20,
    backgroundColor: 'lightgrey',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center'
  },
  exitIcon: {
    paddingRight: 5
  }
});

export default SideMenu;