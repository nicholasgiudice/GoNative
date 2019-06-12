import Reactotron from 'reactotron-react-native';

Reactotron.configure({ host: '192.168.0.9' })
  .useReactNative()
  .connect();
