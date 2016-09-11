import React, { Component } from 'react'
import { TextInput, StyleSheet } from 'react-native'


class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''}
    }

    handleSubmit(){
        this.props.addTodo(this.state.text)
        this.setState({text: ''})
    }
    
    render() {
        return (
                <TextInput
                    style = {styles.input}
                    placeholder = "Add ToDo"
                    value={this.state.text}
                    onChangeText={(text) => this.setState({text})}
                    onSubmitEditing = {this.handleSubmit.bind(this)}
                />
        )
    }
}
const styles = StyleSheet.create({
    input: {
        fontSize: 20,
        margin: 10
    }
})

export default Input