import { AsyncStorage } from 'react-native'
export async function getVauleOtherThanString(key) {
   await AsyncStorage.getItem(key, (value) => {
        return JSON.parse(value)
    })


   

}