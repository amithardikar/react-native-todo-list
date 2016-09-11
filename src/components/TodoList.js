import React, { Component } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import TodoItem from './TodoItem'

class TodoList extends Component {

    render() {
        return (
            <ScrollView style={styles.list}>
                {this.props.todos.map((todo)=>{
                    return <TodoItem
                        key = {todo.id}
                        todo = {todo}
                        actions = {this.props.actions}/>
                })}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        alignSelf: 'stretch',
    }
})

export default TodoList