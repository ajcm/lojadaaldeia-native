import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Platform,
    StyleSheet ,
    ScrollView,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from 'react-native-paper';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as AccountActions from '../../state/actions/account';
import { globalStyles } from '../../styles/global';
import CustomTextInput from '../../components/textInput';


function AddAddress(props) {

  const [data, setData] = React.useState({
    contactName: '', isValidName: false,
    phone: '', isValidPhone: false,
    address1: '', isValidAddress1: false,
    address2: '', isValidAddress2: false,
    city: '', isValidCity: false,
    zipCode: '', isValidZipCode: false,
  });

  const { colors } = useTheme();

  const addHandle = () => {
    if (isFormValid()) {
      props.actions.addAddress({contactName: data.contactName, phone: data.phone, address1: data.address1, address2: data.address2, city: data.city, zipCode: data.zipCode});
      props.navigation.goBack(null);
    }
  }

  const isFormValid = () => {
    return data.isValidName && data.isValidPhone && data.isValidAddress1 && data.isValidAddress2 && data.isValidCity && data.isValidZipCode;
  }

  const nameChangeHandle = (val, isValid) => { setData({...data, contactName: val, isValidName: isValid}); }
  const phoneChangeHandle = (val, isValid) => { setData({...data, phone: val, isValidPhone: isValid}); }
  const address1ChangeHandle = (val, isValid) => { setData({...data, address1: val, isValidAddress1: isValid}); }
  const address2ChangeHandle = (val, isValid) => { setData({...data, address2: val, isValidAddress2: isValid}); }
  const cityChangeHandle = (val, isValid) => { setData({...data, city: val, isValidCity: isValid}); }
  const zipCodeChangeHandle = (val, isValid) => { setData({...data, zipCode: val, isValidZipCode: isValid}); }

  return  (
    <View style={styles.container}>    
      <Animatable.View 
        animation="fadeInUpBig"
        style={[styles.footer, { backgroundColor: colors.background }]}
      >
        <ScrollView>
          <CustomTextInput icon="user-o" label="Nome" placeholder="nome de contacto" regex="^[a-z,A-Z]{2,10}$" errorMsg="min 2 caracteres max 10." onChange={nameChangeHandle}/>
          <CustomTextInput icon="phone" label="Telefone" placeholder="num. telefone" regex="^\d{5,10}$" errorMsg="min 5 dígitos max 10." keyboardType="numeric" onChange={phoneChangeHandle}/>
          <CustomTextInput icon="address-card-o" label="Endereço" placeholder="primeira linha endereço" regex="^[a-z,A-Z]{5,20}$" errorMsg="min 5 caracteres max 20." onChange={address1ChangeHandle}/>
          <CustomTextInput icon="address-card-o" label="Endereço" placeholder="continuação endereço" errorMsg="" onChange={address2ChangeHandle}/>
          <CustomTextInput icon="address-card-o" label="Cidade" placeholder="cidade" regex="^[a-z,A-Z]{2,20}$" errorMsg="o nome da cidade é obrigatório" onChange={cityChangeHandle}/>
          <CustomTextInput icon="address-card-o" label="CodigoPostal" placeholder="código postal" regex="^[a-z,A-Z, 0-9]{2,10}$" errorMsg="o código postal é obrigatório" onChange={zipCodeChangeHandle}/>
        
          <View style={styles.button}>
            <TouchableOpacity disabled={!isFormValid()}
              style={styles.signIn}
              onPress={addHandle}
            >
              <LinearGradient
                colors={isFormValid() ? ['yellow', 'gold'] : ['white', 'gray']}
                style={styles.signIn}
              >
                <Text style={[styles.textSign, {
                  color:'#fff'
                }]}>Add</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
}

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
      flex: 3,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
  },
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
  },
  actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
  },
  errorMsg: {
      color: '#FF0000',
      fontSize: 14,
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
  }
});

const mapStateToProps = (state, ownProps) => ({
  addresses: state.account.addresses
})

const mapDispatchToProps = dispatch => ({    
  actions: bindActionCreators(AccountActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(AddAddress)