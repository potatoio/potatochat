import React from "react"
import { FlatList, Text, View, StyleSheet } from "react-native"


export default class Chat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            history: [
                {
                    id: 1,
                    user: "gardlt",
                    message: "I am the potato engineer",
                },
                {
                    id: 2,
                    user: "potato",
                    message: "oh yeah",
                },
                {
                    id: 3,
                    user: "potato",
                    message: "congrats on the new position",
                },
            ]
        }

    }

    render() {
        return (
            <View style={styles.chatMsgs}>
                <FlatList data={this.state.history} renderItem={({item}) => {
                    <Text key={item.id}>{item.user}: {item.message}</Text>}
                }/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    chatMsgs: {
    }
})
