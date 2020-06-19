import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { connect } from 'react-redux';


class PhoneHistory extends Component {

  constructor(props) {
    super(props);
    this.state = {
      phoneHist: []
    }
  }
  componentDidMount() {
    fetch('http://10.0.2.2:3000/phone', {
      method: "GET"
    })
      .then(res => res.json())
      .then(res => this.setState({ phoneHist: res }))
        .catch(err => {
          console.log(err);
      });
      
      
      
  }
  WholeList() {
    return this.state.phoneHist.map(function (hist, i) {
      //return this.props.history.map(function(hist, i){
      return (
        <View key={i}>
          <Text style={styles.TextStyle}>{hist.caller_name}</Text>
          <View>
            <Text style={styles.TextStyle}>{hist.phoneNumber}</Text>
          </View>
          <Text></Text>
        </View>
      );
    });
  }
  static navigationOptions = {
    title: 'Phone History'
  };
  render() {
    console.log('phoneHistory',this.state.phoneHist);
    return (
      <View>
        {this.WholeList()}
      </View>
    );

  }

}
/* function mapStateToProps(state){
        return {
            history: state.history
        };
    } */
const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',

  },

  TextStyle: {
    fontSize: 35,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  }

});
//export default connect(mapStateToProps)(PhoneHistory);
export default PhoneHistory;
