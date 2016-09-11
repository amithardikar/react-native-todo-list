import  React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Button from 'react-native-button'

class TodoItem extends Component {

    handleDelete(){
        this.props.actions.deleteTodo(this.props.todo.id)
    }
    
    render() {
        return (
            <View style={styles.item}>
                <View style={styles.row}>
                    <View style={styles.textWrapper}>
                        <Text style={styles.text}>{this.props.todo.text}</Text>
                    </View>
                    <Button style={styles.button}
                        onPress={this.handleDelete.bind(this)}>Delete</Button>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    item: {
        padding: 5,
        borderBottomColor: '#878A81',
        borderBottomWidth: 2
    },
    textWrapper: {
        flex: 1,
        margin: 5
    },
    row: {
        flex: 1,
        flexDirection: 'row'
    },
    text:{
        fontSize: 16
    },
    button:{
        color: '#3E403B'
    }
})

export default TodoItem