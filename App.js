import React from "react"
import { FlatList, StyleSheet, View, TextInput, Button, Text } from "react-native"
import { GiftedChat } from "react-native-gifted-chat"

import Chat from "./components/chat"

const log = console.log

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            defaultMsg: "Type your message here...",
            msg: "",
            user: "gardlt",
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

        this.onSendMessage = this.onSendMessage.bind(this)
    }

    onSendMessage() {
        let updatedHistory = this.state.history.slice()
        updatedHistory.push({id: 4, user: this.state.user, message: this.state.msg })
        this.setState({ history: updatedHistory })
        log(this.state.user, "sent: ", this.state.msg)
        log(this.state.history)
        this.setState({ msg: "" })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.chat}>
                    <Text style={styles.header}> Messages </Text>
                    <FlatList extraData={this.state} style={{height: 10, backgroundColor: "#ffff", alignSelf: "stretch"}} data={this.state.history} keyExtractor={(item, index) => index} renderItem={({item}) => <Text>{item.user}: {item.message} </Text>}/>
                </View>
                <View style={styles.msg}>
                    <TextInput style={styles.input} onChangeText={(text) => this.setState({msg: text})} value={this.state.msg} placeholder={this.state.defaultMsg}/>
                    <Button onPress={this.onSendMessage} title="Send" color="#7fff7f"/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    chat: {
        flex: 7,
        flexDirection: "column",
        alignItems: "flex-start",
        backgroundColor: "#5ab9ea",
        alignSelf: "stretch",
        paddingTop: 100,
    },
    input: {
        borderColor: "gray",
        borderWidth: 1,
        flex: 1,
        textAlign: "left",
    },
    msg: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#d24b4b",
    },
    header: {
        alignSelf: "center",
        fontWeight: "bold",
    }
})
