import {Text} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabBar} from '@react-navigation/bottom-tabs';
import Experience from '../screens/Experience';
import HomePage from '../screens/HomePage';
import SettingScreen from '../screens/SettingScreen';
import Icon from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ProfileSetting from '../screens/ProfileSetting';
import Colors from '../assets/theme/Colors';

const BottomTab = createBottomTabNavigator();

const CustomTabBar = props => (
  <BottomTabBar
    {...props}
    style={{
      height: 60,
    
    
    }}
  />
);

const BottomTabScreen = () => {
  return (
    <>
    <BottomTab.Navigator
      tabBar={CustomTabBar}
      initialRouteName="Mis pacientes"
      
      screenOptions={{
        headerShown: false,
       tabBarActiveTintColor:'#002060',
        tabBarInactiveTintColor:'white',
       
        tabBarStyle:{
          backgroundColor:Colors.white,
          borderTopStartRadius:30,
          borderTopEndRadius:30,
          
          
        }
    
      }}
   
      >
      <BottomTab.Screen
        options={{
          tabBarLabel: ({color}) =>(<Text style={{borderBottomWidth:3 ,borderBottomColor:color ,marginVertical:3,
            paddingBottom:2,color:'black',fontWeight:'bold',fontSize:13}}>Mis pacientes</Text>),
          tabBarIcon: ({color, size}) => (
            <Icon name="user" color={'black'} size={30} />
          ),
        }}
        name="Mis pacientes"
        component={HomePage}
      />
      <BottomTab.Screen 
       options={{
        tabBarLabel: ({color}) =>(<Text style={{borderBottomWidth:3 ,borderBottomColor:color ,marginVertical:3,
          paddingBottom:2,color:'black',fontWeight:'bold',fontSize:13}}>Expediente médico</Text>),
        tabBarIcon: ({color, size}) => (
          <Ionicons name="medkit-outline" color={'black'} size={30} />
        ),
      }}
      name="Expediente médico" component={Experience} />
      <BottomTab.Screen 
       options={{
        tabBarLabel: ({color}) =>(<Text style={{borderBottomWidth:3 ,borderBottomColor:color ,marginVertical:3,
          paddingBottom:2,color:'black',fontWeight:'bold',fontSize:13}}>Ajustes</Text>),
        tabBarIcon: ({color, size}) => (
          <Icon name="setting" color={'black'} size={30} />
        ),
      }}
      name="Ajustes" component={ProfileSetting} />
    </BottomTab.Navigator>
      </>
  );
};

export default BottomTabScreen;
