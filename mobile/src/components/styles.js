import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin: 0,
        flexDirection: 'row',
        backgroundColor: '#FFF',
        borderRadius: 15,
        padding: 7,
        elevation: 0.5,
        marginHorizontal: 25,
        marginBottom: 20,
        height: 150,
    },
    job:{
        color: '#121212',
        fontSize: 15,
        paddingLeft: 130,
        paddingRight: 20,
        bottom: 110
    },
    title:{
        color: '#121212',
        fontSize: 15,
        paddingLeft: 130,
        paddingRight: 20,
        bottom: 115,
    },
    cityuf:{
        color: '#121212',
        fontSize: 15,
        paddingLeft: 130,
        bottom: "65%"
    },
    imgsize:{
        width: 150,
        height: 150,
        marginTop: 20,
        right: 35,
        bottom: 27,
        borderBottomLeftRadius: 15,
        borderTopLeftRadius: 15
    },
    img:{
        width: "100%",
        height: 230,
        justifyContent: 'center', 
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#222',
        marginTop: 5
    },
    imgin:{
      width: "85%",
      height: "85%",
      justifyContent: 'center', 
      alignItems: 'center',
      borderRadius: 5,
      borderWidth: 2,
  },
  icon:{
        left: 250,
        marginTop: 5
    },
    buttonrow: {
        height: 46,
        width: 170,
        marginLeft: 5,
        marginRight: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2ecc71',
        borderRadius: 10,
        alignSelf: 'stretch',
        marginBottom: 26,
      },
      buttonrow2: {
        height: 46,
        width: 170,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#222',
        borderRadius: 10,
        alignSelf: 'stretch',
        marginBottom: 26,
      },
      flxrow: {
        justifyContent: 'center',
        alignSelf: 'stretch',
        paddingHorizontal: 15,
        alignItems: 'center',
        flexDirection: 'row',
      },
      ButtonText:{
        alignItems: 'center', 
        textAlign: 'center', 
        alignSelf: 'stretch', 
        fontSize: 18, 
        color: "#fff"
      },
      desc:{
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 7,
        elevation: 0.5,
        marginBottom: 20,
        height: 140,
        marginTop: 150,
        bottom: 12,
        alignItems: 'center',
        flexDirection: 'row',
      },
      txtdesc:{
        justifyContent: 'center',
        color: '#000', 
        fontSize: 15, 
        marginLeft: 15,
      },
      titulo:{
        alignItems: 'center', 
        textAlign: 'center', 
        alignSelf: 'stretch', 
        fontSize: 25, 
        bottom: 10, 
        marginTop: 25,
        fontWeight: 'bold',
      },
      btdesc:{
        flex: 1,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
      },
      sfview:{
        flex: 1,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'flex-end'
      }
})

export default styles;