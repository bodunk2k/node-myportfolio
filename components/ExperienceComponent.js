import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';


class  Experience extends Component  {

    

static navigationOptions = {
    title: 'Experience'
};
    render() {
    
    return (
        <View>
            <ScrollView>
                <Text style={styles.mainTitle}>
                    My Experiences 
                </Text>
                <Text style={styles.title}>
                    Amdocs - Senior Subject Matter Expert
                </Text>
                <Text style={styles.item}>
                    Support programmer for telecommunications software package.
                    Provide support in accounts receivable.
                    Designed and helped code/install collections process.
                    Oncall support for Bill confirmation and daily/monthly reporting system. Support install and running of
                    collections.
                    Tools used include Micro Focus Cobol, Unix scripting and C data
                    Datalayers for access to Oracle database.
                </Text>
                <Text> Dec 12,2000 - Aug 16,2018 </Text>
                <Text> </Text>
                <Text style={styles.title}>
                    Bridge Technologies - Contract Programmer 
                </Text>
                <Text style={styles.item}>
                    Provided Testing Support for Client.
                    Completed Power Builder Boot Camp April 15, 2000.
                    Evaluated in-house server tools.  Research and Development.
                    Developed Home Page and Client Demo Internet site page.
                    Jan-Mar 2000 - Tester and QA for client company using PB.
                    Mar-Apr 2000 - BootCamper - trained in PB and SQL-Sybase
                    Apr-June 2000 - WebMaster - Updating website using HTML and
                    Java Script.
                    June 2000 - present - R&D for new tool procurement.
                    Position terminated due to lack of contract.
                </Text>
                <Text> Jan 17,2000 - Oct 31,2000 </Text>
                <Text> </Text>
                <Text style={styles.title}>
                        First Data Resources - Senior Programmer Analyst
                </Text>
                <Text style={styles.item}>
                    Provided batch support of mainframe credit card processing.
                    Developed designs and assisted in installation of release.
                    On call duties included support calls at all times.
                    Assisted with the training of junior team members.
                    Participated in the planning and work load allocation of the
                    team.
                    Worked in Cobol using JCL, VSAM, VIA-SOFT, WSF2, and CA-7.
                    June 1993 - June 1995 Software Development Analyst (Omaha NE)
                    June 1995 - Dec 1996  Senior Software Development Analyst
                    June 1997 (Transfered to Tulsa, OK)
                    June 1997 - July 1998 System Engineer.
                </Text>
                <Text> June 1,1993 - Nov 3,1999 </Text>
                <Text> </Text>
                <Text style={styles.title}>
                    Mutual of Omaha - Programmer Analyst
                </Text>
                <Text style={styles.item}>
                    Provided batch support of mainframe insurance processing.
                    On call duties included support calls at all times.
                    Worked in Cobol using JCL, VSAM, XPEDITER, and WSF2.
                    Attended several insurance industry training courses including
                    HIAA individual A certification.
                    Jan 1991 - Dec 1992 Programmer I
                    Dec 1992 - June 1993 Programmer II
                </Text>
                <Text> Jan 7,1991 - May 31,1993 </Text>
                <Text> </Text>
            </ScrollView>
        </View>
    )
    }
}
const styles = StyleSheet.create({
    mainTitle: {
      flex: 1,
      fontSize: 32,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 24,
    },
  });
export default Experience;