import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import Contatos from '../views/Contacts'
import TelaInicial from '../views/Home'

const Stack = createNativeStackNavigator()

const container = (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="TelaInicial"
            screenOptions={{
                headerStyle: { backgroundColor: 'black' },
                headerTintColor: 'white',
            }}
        >
            <Stack.Screen name="Contatos" component={Contatos}></Stack.Screen>
            <Stack.Screen
                name="TelaInicial"
                component={TelaInicial}
                options={(props) => ({
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={HeaderButton}>
                            <Item
                                title="adicionar"
                                onPress={() => {
                                    props.navigation.navigate('Contatos')
                                }}
                            />
                        </HeaderButtons>
                    ),
                })}
            ></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
)

export default container
