import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputError: {
    borderColor: '#d73a4a',
  }  
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style, error && styles.inputError];

  return (
    <NativeTextInput style={textInputStyle} {...props} />
  );
};

export default TextInput;