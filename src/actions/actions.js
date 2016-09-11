let actions = {
    addTodo: (text) => {
        return {
            type: 'ADD_TODO',
            text
        }
    },

    deleteTodo: (id) => {
        return {
            type: 'DELETE_TODO',
            id
        }
    },

    newQuote: (quote) => {
        return {
            type: 'NEW_QUOTE',
            quote
        }
    },

    fetchQuote: () => {
        return (dispatch) => {
            fetch( 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies',{
                method: 'POST',
                headers: new Headers({
                    "X-Mashape-Key" : "LP828H2KcXmsh0XdOhRvocRrMoGap1rLwDMjsn6PHnRQyYhxBw",
                    "Content-Type" : "application/x-www-form-urlencoded",
                    "Accept" : "application/json"
                })
            }).then((response) => {
                dispatch(actions.newQuote(JSON.parse(response._bodyText)))
            })
        }
    }
}

export default actions