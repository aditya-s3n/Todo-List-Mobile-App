import { useEffect } from "react"
import { View, StyleSheet, Image, Text } from "react-native";

function Splash({ navigation }: { navigation: any}) {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace("Todo")
        }, 2000)
    }, [])

    return (
        <View style={styles.splashContainer}>

            <Image 
                source={require("../../assets/checklist.png")}
                style={styles.splashImg}
            />

            <Text style={styles.splashText}>A. Sen ToDo List!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    splashContainer: {
        backgroundColor: "blue",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    splashText: {
        color: "white",
        fontSize: 20
    },
    splashImg: {
        width: 80,
        height: 80,
        marginBottom: 10
    }
})

export default Splash