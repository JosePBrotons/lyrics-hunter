import 'react-native-gesture-handler/jestSetup';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest';
import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock.js';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock('react-native-reanimated', () =>
    require('react-native-reanimated/mock')
);

jest.mock('react-native-localize', () =>
    require('react-native-localize/mock')
);

jest.mock('react-native-config', () => ({ __esModule: true, default: {} }));

jest.mock('@react-native-community/netinfo', () => mockRNCNetInfo);
