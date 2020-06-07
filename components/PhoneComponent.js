import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PhoneInput from 'react-native-phone-input';
import {connect} from 'react-redux';

function mapDispatchToProps(dispatch){
    return {
        addHistory : (history) => dispatch({type:'ADD_PHONELOOKUP',history:history})
    }
}
class Phone extends Component {
    constructor() {
        super();

        this.state = {
            valid: "",
            type: "",
            value: "",
            caller_name: "",
            phoneNumber: ""
        };

        this.updateInfo = this.updateInfo.bind(this);
        this.renderInfo = this.renderInfo.bind(this);
    }

    static navigationOptions = {
        title: 'Phone Lookup'
    };

    updateInfo() {
        
        console.log(this.state.phoneNumber);
        fetch(`https://twilio-lookup.p.rapidapi.com/PhoneNumbers/caller-name?phoneNumber=${this.state.phoneNumber}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "twilio-lookup.p.rapidapi.com",
                "x-rapidapi-key": "3e66c59a24msh59c0fa96f66ee46p1b8b44jsnd50f07d63fcf"
            }
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                this.props.addHistory({
                    phoneNumber: response.phoneNumber,
                    caller_name: response.callerName.caller_name
                });
                console.log(response.callerName.caller_name);
                this.setState({
                phoneNumber: response.phoneNumber,
                caller_name: response.callerName.caller_name
            });
            })
            .catch(err => {
                console.log(err);
            });
            
            
    }

    renderInfo() {
        
            return (
                <View style={styles.info}>
                    <Text>
                        Is Valid:{" "}
                        <Text style={{ fontWeight: "bold" }}>
                            {this.state.valid.toString()}
                        </Text>
                    </Text>
                    <Text>
                        Type: <Text style={{ fontWeight: "bold" }}>{this.state.type}</Text>
                    </Text>
                    <Text>
                        Value:{" "}
                        <Text style={{ fontWeight: "bold" }}>{this.state.value}</Text>
                    </Text>
                    <Text>
                        Value:{" "}
                        <Text style={{ fontWeight: "bold" }}>{this.state.caller_name}</Text>
                    </Text>
                    <Text>
                        Value:{" "}
                        <Text style={{ fontWeight: "bold" }}>{this.state.phoneNumber}</Text>
                    </Text>

                </View>
            );
    }


    render() {
        return (
            <View style={styles.container}>
                <PhoneInput
                    onChangePhoneNumber={phoneNumber => this.setState({phoneNumber})}
                />
                <TouchableOpacity onPress={
                    this.updateInfo
                    } 
                    style={styles.button}>
                    <Text>Touch Me to Get Info</Text>
                </TouchableOpacity>

                {this.renderInfo()}
            </View>
        );
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 20,
        fontSize: 25,
        fontWeight: 'bold',
        paddingTop: 60
    },
    info: {
        // width: 200,
        borderRadius: 5,
        backgroundColor: "#f0f0f0",
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
        marginTop: 20
    },
    button: {
        marginTop: 20,
        padding: 20,
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: 'grey'
    }
});
export default  connect(null, mapDispatchToProps)(Phone);