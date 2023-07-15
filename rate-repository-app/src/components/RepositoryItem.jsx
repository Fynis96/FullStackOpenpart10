import Text from './Text';
import {  View, StyleSheet, Image } from "react-native"


const styles = StyleSheet.create({
  flexContainer: {
    padding: 15,
    backgroundColor: 'white',
    
  },
  topFlexContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  topTextFlexContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 1,
  },
  textItem:{
    paddingBottom: 5,
  },
  bottomFlexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 20,
  },
  language: {
    backgroundColor: '#0366d6',
    color: 'white',
    padding: 5,
    borderRadius: 5,
  },
});

const AmountItemComponent = ({text, amount}) => {
  const styles = StyleSheet.create({
    bold: {
      fontWeight: '700',
    },
    align: {
      alignItems: 'center'
    }
  }) 
  
  if (amount >= 1000){
    const est = (amount / 1000).toFixed(1);

    
    return (
      <View style={styles.align}>
        <Text style={styles.bold}>{est}k</Text>
        <Text>{text}</Text>
      </View>
    )
  }
  return (
    <View style={styles.align}>
      <Text style={styles.bold}>{amount}</Text>
      <Text>{text}</Text>
    </View>
  )
}

const RepositoryItem = ({item}) => {
  const url = item.ownerAvatarUrl
  return (
    <View style={styles.flexContainer}>
      <View style={styles.topFlexContainer}>
        <Image source={{uri: url}} style={styles.avatar}/>
        <View style={styles.topTextFlexContainer}>
          <Text style={styles.textItem}fontWeight='bold' fontSize="subheading">{item.fullName}</Text>
          <Text style={styles.textItem}>{item.description}</Text>
            <View style={styles.textItem}>
              <Text style={styles.language}>{item.language}</Text>
            </View>
        </View>
      </View>
      <View style={styles.bottomFlexContainer}>
        <AmountItemComponent text="Stars" amount={item.stargazersCount} />
        <AmountItemComponent text="Forks" amount={item.forksCount} />
        <AmountItemComponent text="Reviews" amount={item.reviewCount} />
        <AmountItemComponent text="Rating" amount={item.ratingAverage} />
      </View>
    </View>
  )
}

export default RepositoryItem