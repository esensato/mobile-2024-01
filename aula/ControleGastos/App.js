import { TelaPrincipal } from './componentes/TelaPrincipal';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetalheGasto } from './componentes/DetalheGasto';
import { iniciar } from './componentes/Db';

const Stack = createNativeStackNavigator();
iniciar().then(() => console.log("Banco de dados criado")).catch((err) => console.log(err))

export default function App() {

  return (<NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Lançamento Gastos" component={TelaPrincipal} />
      <Stack.Screen name="Detalhes" component={DetalheGasto} />
    </Stack.Navigator>
  </NavigationContainer>)
}


