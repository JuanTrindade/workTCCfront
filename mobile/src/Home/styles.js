import { StyleSheet } from 'react-native';

const stylesHome = StyleSheet.create({
    desc:{
        margin: 0,
        backgroundColor: '#FFF',
        borderRadius: 15,
        padding: 7,
        elevation: 0.5,
        marginBottom: 200,
        height: 150,
        alignItems: 'center',
        flexDirection: 'row',
        top: 120
    },
    textPerf:{
        justifyContent: 'center', 
        color: '#000', 
        fontSize: 15, 
        marginLeft: 15,
    },
    PerfImg:{
        borderRadius: 300, 
        borderWidth: 2.5, 
        width: 100, 
        height: 100,
        top: '35%',
        justifyContent: 'center',
    },
    button:{
        flexDirection: 'row',
        width: "150%",
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        height: 46,
        borderColor: "#222",
        top: "50%",
        elevation: 5,
    },
    button2:{
        flexDirection: 'row',
        width: "150%",
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
        height: 46,
        borderColor: "#222",
        top: '8%',
        elevation: 5,
    },
    label: {
        color: '#121212',
        fontSize: 14,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        bottom: "20%"
      },
      txtButton:{
        fontSize: 18, 
        fontWeight: 'bold'
      },
      buttonIcon:{
        left: 10, 
        justifyContent: 'center',
        top: '0.5%'
      },
      buttonlog: {
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#222',
        borderRadius: 10,
        alignSelf: 'stretch',
        marginHorizontal: 10,
        bottom: 50
      },
      notificationButton:{ 
        flexDirection: 'row',
        backgroundColor: '#FFF', 
        alignSelf: 'stretch', 
        height: 55, 
        elevation: 5, 
        borderWidth: 0.6, 
        borderColor: '#dcdde1'
      },
      notificationImage:{
        width: 45, 
        height: 45, 
        borderRadius: 100, 
        margin: 5 
      }
})

export default stylesHome;