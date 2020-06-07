import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { LearnMoreLinks } from 'react-native/Libraries/NewAppScreen';




class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    static navigationOptions = {
        title: 'Brent Bowen'
    }

    render() {
        return (
            <ScrollView>
               <View> 
                   <Text style={{padding: 10, fontSize: 42}}>
                        Brent Bowen
                   </Text>
                   <Text style={{padding: 10, fontSize: 16}}>
                       2812 Kernville Dr
                   </Text>
                   <Text style={{padding: 10, fontSize: 16}}>
                       Wylie TX 75098
                   </Text>
                   <Text></Text>
                   <Text style={{padding: 10, fontSize: 12}}>
                   A challenging and rewarding position in information technology with the potential for
                        continued professional growth into new technologies. While I have extensive experience using procedural code I
                        am seeking new roles with object oriented technologies and agile development methodologies.
                   </Text>
                   <Text>
                   </Text>
                   <Text style={{padding: 10, fontSize: 16}}>
                   Education
                   </Text>
                   <Text style={{padding: 10, fontSize: 14}}>
                   West Texas A&M
                   </Text>
                   <Text style={{padding: 10, fontSize: 12}}>
                   Bachelor of Business Administration
                   </Text>
                   <Text style={{padding: 10, fontSize: 12}}>
                   Computer Information Systems
                   </Text>
                   <Text style={{padding: 10, fontSize: 12}}>
                   Dec 1990
                   </Text>
                   <Text></Text>
                   <Text style={{padding: 10, fontSize: 14}}>
                   University of Phoenix
                   </Text>
                   <Text style={{padding: 10, fontSize: 12}}>
                   Certificate of Advanced Software Development
                   </Text>
                   <Text style={{padding: 10, fontSize: 12}}>
                   Sept 2019
                   </Text>
                   <Text></Text>
                   <Text style={{padding: 10, fontSize: 14}}>
                   NuCamp
                   </Text>
                   <Text style={{padding: 10, fontSize: 12}}>
                   Full Web Stack Bootcamp
                   </Text>
                   <Text style={{padding: 10, fontSize: 12}}>
                   Jan 2020-pending
                   </Text>
               </View>
            </ScrollView>
        );
    }
}

export default Home;