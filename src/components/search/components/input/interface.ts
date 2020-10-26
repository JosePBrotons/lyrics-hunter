import { ColorValue } from 'react-native';

export interface IInputProps {
    placeholder: string;
    value: string;
    placeholderTextColor: ColorValue;
    onChangeText: (value: React.SetStateAction<string>) => void;
    secureTextEntry?: boolean;
    iconName?: string;
}
