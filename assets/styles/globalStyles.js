import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
  },
  title: {
    fontFamily: 'Amiri',
    fontSize: 26,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  wrapper: {
    flex: 1,
    borderRadius: 10,
  },
  item: {
    backgroundColor: "#c7c7c7",
    padding: 15,
    marginVertical: 10,
    borderColor: "#000",
    borderWidth: 1,
    fontFamily: "Amiri",
    fontSize: 20,
    borderRadius: 10,
  },
});
