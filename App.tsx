import { Loader } from './src/components/Loader';
import { StatusBar } from 'expo-status-bar';
import {HomeScreen} from './src/screens/home/HomeScreen';

export default function App() {
  return (
    <>
      <StatusBar />
      {<HomeScreen /> ?  <HomeScreen /> : <Loader />}    
    </>
  );
}
