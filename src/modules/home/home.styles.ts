import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
  },
  resetButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  resetButtonText: {
    fontSize: 16,
  },
  card: {
    width: 120,
    height: 120,
    backgroundColor: '#6c757d',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:1,
    borderColor:'#495057',
  },
  cardVisible: {
    backgroundColor: 'white',
  },
  cardImg: {
    flex:1,
    width:'100%',
    backgroundColor:'white'
  },
  resetView:{ marginBottom: 24, width: "30%" }
});
