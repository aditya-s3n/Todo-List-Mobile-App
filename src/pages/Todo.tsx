import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Todo({ navigation }: { navigation: any}) {
    return (
        <View>
            <Text>TODO</Text>

            <TouchableOpacity
                style={styles.floatingPointButton}
                onPress={() => navigation.navigate("NewTask")}
            >
                <FontAwesomeIcon icon={faPlus} color="white" style={styles.floatingPointIcon} />
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    floatingPointButton: {
        borderRadius: 20,
        width: 40,
        height: 40,
        backgroundColor: "black",
        position: "absolute",
        right: 10,
        top: 635
    },
    floatingPointIcon: {
        marginHorizontal: 12,
        marginVertical: 12
    }
})

export default Todo