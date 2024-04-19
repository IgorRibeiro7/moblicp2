import {StyleSheet} from 'react-native';
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  btn: {
    borderWidth: 1,
    height: 50,
    width: '100%',
    borderRadius: 15,
    backgroundColor: '#696969',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  itemContainer: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 15,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  btnDelete: {
    backgroundColor: 'grey',
    borderRadius: 12,
    width: 100,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#FFE4E1',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  formBtn: {
    borderWidth: 1,
    height: 50,
    width: '100%',
    borderRadius: 15,
    backgroundColor: '#696969',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  personContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  },
  person: {
    alignItems: 'center',
  },
  personText: {
    fontSize: 15,
    paddingHorizontal: 10,
  },
  personImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 5,
  },
  // Estilo para o botão "Sobre"
  btnAbout: {
    borderWidth: 1,
    height: 50,
    width: '100%',
    borderRadius: 15,
    backgroundColor: '#696969',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});
 
 export default styles;

