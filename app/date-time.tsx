import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DateTime = () => {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const showDatePicker = () => {
        setShow(true);
    };

    const onChange = (event: any, selectedDate: any) => {
        if (selectedDate) {
            setDate(selectedDate);
        }
        setShow(false);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Escolha uma data</Text>
            <TouchableOpacity style={styles.button} onPress={showDatePicker}>
                <Text style={styles.buttonText}>Selecionar</Text>
            </TouchableOpacity>

            {show && (
                <DateTimePicker
                    value={date}
                    mode="date"
                    display="spinner"
                    onChange={onChange}
                />
            )}

            <Text style={styles.dateText}>
                {date.toLocaleString()}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        backgroundColor: '#121212',
    },
    title: {
        fontSize: 22,
        fontWeight: '500',
        color: '#fff',
        marginBottom: 40,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#6200EE',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 50,
        marginBottom: 30,
        elevation: 3,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    dateText: {
        fontSize: 18,
        color: '#BB86FC',
        fontWeight: '500',
        marginTop: 20,
        textAlign: 'center',
    },
});

export default DateTime;