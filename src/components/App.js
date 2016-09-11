import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from './Header'
import Input from './Input'
import TodoList from './TodoList'
import actions from '../actions/actions'


class App extends Component {
    
    render(){
        return (
            <View style={styles.container}>
                <Header 
                    random = {this.props.random}
                    fetchQuote = {this.props.actions.fetchQuote} />
                <Input addTodo = {this.props.actions.addTodo} />
                <TodoList 
                    todos = {this.props.todos}
                    actions = {this.props.actions} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        backgroundColor: '#F5FCFF'
    }
})

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)