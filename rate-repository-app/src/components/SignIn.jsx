import { View, Pressable, StyleSheet } from "react-native";
import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import { Formik } from "formik";

const styles = StyleSheet.create({
  container: {
    margin: 15
  },
  inputField: {
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    margin: 10
  },
  submit: {
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 3,
    borderWidth: 2,
    margin: 15,
    backgroundColor: '#0366d6'
  }
})

const initialValues = {
  username: "",
  password: ""
};

const SignIn = () => {

  const onSubmit = (values) => {
    console.log(values);
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => onSubmit(values)}
    >
      {({ handleSubmit, values, handleChange }) => (
    <View>
      <FormikTextInput name="username" placeholder="Username: " value={values.username} onChangeText={handleChange("username")} style={styles.inputField}/>
      <FormikTextInput name="password" placeholder="Password: " value={values.password} onChangeText={handleChange("password")} secureTextEntry={true} style={styles.inputField}/>
      <Pressable onPress={handleSubmit} style={styles.submit}>
        <Text color='white' fontWeight='bold' fontSize='subprimary'>Sign-In</Text>
      </Pressable>
    </View>
    )}
    </Formik>
  );
};

export default SignIn;