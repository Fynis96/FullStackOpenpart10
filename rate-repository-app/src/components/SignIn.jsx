import { View, Pressable, StyleSheet } from "react-native";
import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import { Formik } from "formik";
import * as yup from "yup";

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

const validationSchema = yup.object().shape({
  username: yup.string().min(3, 'username must be three letters or more').required('username required'),
  password: yup.string().min(3, 'password must be three letters or more').required('password required'),
})

const SignIn = () => {

  const onSubmit = (values) => {
    console.log(values);
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => onSubmit(values)}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, handleChange, values, errors, touched }) => (
    <View>
      <FormikTextInput name="username" placeholder="Username: " value={values.username} onChangeText={handleChange("username")} style={styles.inputField} error={touched.username && errors.username}/>
      <FormikTextInput name="password" placeholder="Password: " value={values.password} onChangeText={handleChange("password")} secureTextEntry={true} style={styles.inputField} error={touched.password && errors.password}/>
      <Pressable onPress={handleSubmit} style={styles.submit}>
        <Text color='white' fontWeight='bold' fontSize='subprimary'>Sign-In</Text>
      </Pressable>
    </View>
    )}
    </Formik>
  );
};

export default SignIn;