import AsyncStorage from '@react-native-async-storage/async-storage';

// Get userData in local storage
export const getUserData = async () => {
    try {
        const value = await AsyncStorage.getItem('Data');
        if(value){
            
            return JSON.parse(value)
        }
        
    } catch (error) {
        console.error(error);
    }
}

// Get userId in local storage
export const getUserId = async () => {
    try {
        const value = await AsyncStorage.getItem('UserId');
        if(value){
            return JSON.parse(value)
        }
        
    } catch (error) {
        console.error(error);
    }
}