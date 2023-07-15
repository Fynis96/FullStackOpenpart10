import Text from "./Text";
import { Pressable, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  flexItem: {
    flexGrow: 1,
    paddingLeft: 10,
    paddingBottom: 10
  },
});

const AppBarTab = ({text}) => {
  return (
    <Pressable style={styles.flexItem}>
      <Text color="white" fontSize="subheading" fontWeight="bold" >
        {text}
      </Text>
    </Pressable>
  );
};

export default AppBarTab;