import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },

  containerMenu: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dcdde1',
    padding: 20

  },

  container2: {
    flex: 1, 
    backgroundColor: '#dcdde1',
  },

  content: {
    justifyContent: 'center',
    alignSelf: 'stretch',
    paddingHorizontal: 15,
    alignItems: 'center',
    marginTop: 50,
  },
  contentbt: {
    justifyContent: 'center',
    alignSelf: 'stretch',
    paddingHorizontal: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },

  version: {
    color: '#121212',
    fontSize: 18,
    marginBottom: 100
  },

  label: {
    color: '#121212',
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    alignSelf: 'stretch',
    marginTop: 20,
    marginLeft: 15,
    marginRight: 70
  },

  labelcad: {
    color: '#121212',
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    alignSelf: 'stretch',
    marginTop: 20,
    marginLeft: 15,
    marginRight: 120
  },

  labelcad2: {
    color: '#121212',
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    alignSelf: 'stretch',
    marginTop: 20,
    marginLeft: 15,
    marginRight: 67
  },

  label2: {
    color: '#121212',
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginTop: 25
  },

  icons:{
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignSelf: 'center'
  },

  input: {
    borderWidth: 1,
    borderBottomColor: '#000',
    borderColor: "transparent",
    borderRadius: 4,
    height: 30,
    paddingHorizontal: 25,
    alignSelf: 'stretch',
    marginLeft: 5,
    marginRight: 5,
    width: 165,
    fontSize: 17,
    fontFamily: 'monospace'
  },

  inputfirs: {
    borderWidth: 1,
    borderBottomColor: '#000',
    borderColor: "transparent",
    borderRadius: 4,
    height: 40,
    paddingHorizontal: 25,
    alignSelf: 'stretch',
    marginLeft: 5,
    marginRight: 5,
    width: 165,
    fontSize: 17,
    fontFamily: 'monospace'
  },

  inputc: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderBottomColor: '#000',
    borderColor: "transparent",
    borderRadius: 4,
    height: 35,
    paddingHorizontal: 25,
    alignSelf: 'stretch',
    fontSize: 17,
    fontFamily: 'monospace'
  },

  
  buttonlog: {
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222',
    borderRadius: 10,
    alignSelf: 'stretch',
    marginHorizontal: 10,
    marginTop: 10,
  },

  button: {
    marginTop: 60,
    height: 44,
    width: 170,
    marginLeft: 5,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222',
    borderRadius: 10,
    alignSelf: 'stretch',
    marginBottom: 25,
  },

  buttonhome: {
    height: 43,
    width: "25%",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    alignSelf: 'stretch',
    borderColor: '#000',
    borderRadius: 1,
    elevation: 10,
    shadowColor: '#000',
  },

  buttonCad: {
    marginTop: 20,
    height: 42,
    width: 170,
    marginLeft: 5,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222',
    borderRadius: 8,
    alignSelf: 'stretch',
    marginBottom: 25,
  },

  buttonText: {
    color: '#FFF',
    fontSize: 20,
  },

  buttonText2: {
    color: '#FFF',
    fontSize: 15,
    bottom: 3.5
  },

  pd:{
    marginTop: 20
  },
  pd2:{
    marginTop: 120
  },
  TxtEs:{
    color: '#999',
    fontSize: 15
  },
  header:{
    backgroundColor: '#FFF', 
    height: 30,  
    marginHorizontal: 10, 
    alignItems: 'center', 
    padding: 5, 
    flexDirection: 'row',  
    elevation: 1, 
    borderRadius: 15
  },
  textheader:{
    fontSize: 15, 
    marginLeft: 15, 
    width: 300
  },
  PerfImg:{
        borderRadius: 300, 
        borderColor: "#000", 
        borderWidth: 2.5, 
        width: 150, 
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 100
  }
});


//*css melhorado por Pedro Ramos*
// thanks. Ass: Pedro Ramos
export default styles;
