import { useDispatch, useSelector } from "react-redux"
import { setDescription, setTitle } from "../../redux/actions"

import { tasks } from "../utils/asyncStorageKeys";
import uuid from 'react-native-uuid'

import { View, TextInput, Pressable, Text, StyleSheet, Alert } from "react-native"
import { setTask } from "../../redux/allTasks/allTasksActions";

import AsyncStorage from '@react-native-async-storage/async-storage';

function NewTask({ navigation }: { navigation: any}) {
    const dispatch = useDispatch()
    const { title, description } = useSelector((state: any) => state.newTask)

    async function saveTask() {
        if (title.length > 0) {
            try {
                const newTask = { title: title, description: description, id: uuid.v4()}

                await AsyncStorage.setItem(tasks, JSON.stringify(newTask))
                
                dispatch(setTask(newTask))

                navigation.goBack()
            
            } catch (error) {
                Alert.alert("Saving Error", "There was trouble saving the task")
                console.log(error)
            }
        } else {
            Alert.alert("Please Input a Title")
        }
    }


    return (
        <View style={styles.newTask}>
            <TextInput 
                style={styles.newTaskInput}
                placeholder="Title..."
                value={title}
                onChangeText={(e) => dispatch(setTitle(e))}
            />

            <TextInput
                style={styles.newTaskInput}
                placeholder="Description..."
                value={description}
                onChangeText={(e) => dispatch(setDescription(e))}
                multiline
            />

            <Pressable
                style={styles.newTaskButton}
            >
                <Text 
                    style={styles.newTasksText}
                    onPress={saveTask} 
                >Save</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    newTaskButton: {
        marginTop: 10,
        backgroundColor: "#0FC600",
        borderWidth: 1,
        borderRadius: 7
    },
    newTask: {
        flex: 1,
        alignItems: "center",
    },
    newTaskInput: {
        backgroundColor: "white",
        marginVertical: 20,
        width: "90%",
        height: 50,
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 1,
        fontSize: 20,
        paddingHorizontal: 10
    },
    newTasksText: {
        fontSize: 20,
        marginHorizontal: 10,
        marginVertical: 5
    }
})

export default NewTask