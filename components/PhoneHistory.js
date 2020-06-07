import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import {connect} from 'react-redux';


class PhoneHistory extends Component  {

    constructor(props) {
        super(props);
    
        
    }

    WholeList() {
        return this.props.history.map(function(hist, i){
          return(
            <View  key={i}>
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
            return(
                <View>
                    {this.WholeList()}
                </View>
            );
            
        }
        /*
                {this.props.history.caller_name}
                </Text>
                <Text>
                {this.props.history.phoneNumber}
                </Text> 
                style={styles.MainContainer}*/
        
}
function mapStateToProps(state){
        return {
            history: state.history
        };
    }
    const styles = StyleSheet.create({
 
        MainContainer: {
          flex: 1,
          margin: 10,
          fontSize: 20,
          fontWeight: 'bold',
          
        },
        
        TextStyle:{
          fontSize : 35,
           textAlign: 'center',
           fontSize: 20,
        fontWeight: 'bold',
        }
        
       });
export default connect(mapStateToProps)(PhoneHistory);
    