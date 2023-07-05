import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native"
import { useEffect } from "react"

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { tasks } from "../utils/asyncStorageKeys";

import { useDispatch, useSelector } from "react-redux";
import { setTask } from "../../redux/allTasks/allTasksActions";

function Todo({ navigation }: { navigation: any }) {
    const { allTasks } = useSelector((state: any) => state.allTasks)
    const dispatch = useDispatch()
    
    async function getTasks() {

        let allTasks = await AsyncStorage.getItem(tasks)

        if (allTasks) {
            allTasks = JSON.parse(allTasks)

            if (allTasks) {
                dispatch(setTask(allTasks))
            }

        }
    }

    useEffect(() => {
        getTasks()
    }, [])

    return (
        <View>
            <FlatList 
                data={allTasks}
                renderItem={({ item }) => (
                    <View key={item.id} style={styles.task}>
                        <Text style={styles.taskTitle}>{item.title}</Text>
                        <Text style={styles.taskDescription}>{item.description}</Text>
                    </View>
                )}
                keyExtractor={item => item.id}
            />

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
    },
    task: {
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "black",
        marginVertical: 5,
        marginHorizontal: 5,
        borderRadius: 10
    },
    taskTitle: {
        fontSize: 25,
        fontWeight: "bold",
        margin: 5
    },
    taskDescription: {
        fontSize: 15,
        margin: 5
    }
})

export default Todo