// import { VictoryAxis, VictoryBar, VictoryChart, VictoryGroup } from 'victory-native';
// import  useCustomFonts  from '../assets/fonts/expo-fonts';
// import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';


export default function TableStats({navigation, selectedTable}) {
    // const [tableData, setTableData] = useState([]);

    // useEffect(() => {
    //     if (selectedTable){
    //         fetchData(selectedTable);
    //     }
    // }, [selectedTable]);

    // const fetchData = (selectedTable) => {
    //     axios.get(`https://dynamic-routes-f4txc.ondigitalocean.app/table/${selectedTable}`)
    //         .then(response => {
    //             const cumulativeRevenue = response.data.map((table, index, array) => ({
    //                 tableNumber: table.id,
    //                 cumulativeRevenue: array.slice(0, index + 1).reduce((acc, curr) => acc + curr.total_revenue, 0),
    //             }));

    //             setTableData(cumulativeRevenue);
    //             console.log(response.data)
    //         })

    //         .catch(error => {
    //             console.error('Error fetching data')
    //         }
    //         )
    // }


    // const chartData = {
    //     labels: tableData.map((table) => ({ x: `${table.tableNumber}`, y: table.cumulativeRevenue })),
    // };


    return(
        <></>
        // <View style={styles.container}>
        //     <View style={styles.header}>
        //         <Image
        //             style={{width: 60, height: 60, marginLeft: 20}}
        //             source={require('../assets/images/stats2.png')}
        //         />

        //         <Text style={styles.headerText}>TABLE STATS</Text>
        //     </View>

        //     <View style={styles.chartContainer}>
        //         <Text style={styles.containerText}>TABLE REVENUE</Text>
        //        <VictoryChart>
        //         <VictoryAxis label='Tables'/>
        //         <VictoryAxis dependentAxis label='Income'/>
        //             <VictoryGroup offset={20}>                       
        //                 <VictoryBar 
        //                 data={chartData.labels}
        //                 style={{
        //                     data:{
        //                         fill: '#EC4C56'
        //                     }
        //                 }}
        //                 >                             
        //                 </VictoryBar>
        //             </VictoryGroup>
        //        </VictoryChart>
                             
        //     </View> 

        // </View>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#201E21',
        width: '100%',
        height: '100%',
        display: 'flex'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 30,
        width: '100%',
        height: '20%',
        alignItems: 'center',
        
        
        
    },

    headerText:{
        
        color: 'white',
        fontSize: 30,
        paddingLeft: 10,
        fontFamily:'Montserrat'
    }, 
    
    chartContainer:{
        borderWidth: 1, 
        borderRadius: 10, 
        overflow: 'hidden', 
        marginVertical: 20, 
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 90,
        marginLeft: 11,
        width: 370,
        height: 400
    },

    containerText:{
        fontSize: 25,
        fontFamily: 'Montserrat'
    }

   
   
})