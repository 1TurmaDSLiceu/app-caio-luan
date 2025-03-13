import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function App() {
    const [date, setDate] = useState(new Date())

    return (
        <View>
            <DateTimePicker
                value={date}
                mode="date"
                display="default"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10
    },
    button: {
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5
    },
    text: {
        color: 'white',
        textAlign: 'center'
    }
});