import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Button from 'react-native-button'

class Header extends Component {

    handleNew(){
        this.props.fetchQuote()
    }

    componentWillMount() {
        this.props.fetchQuote()
    }

    render() {
        return (
            <View style={styles.header}>
                <Text>
                    Quote : {this.props.random.quote}
                </Text>
                <Text>
                    Author : {this.props.random.author}
                </Text>
                <Button onPress={this.handleNew.bind(this)}>New random quote</Button>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    header: {
        margin: 15
    },
})

export default Header