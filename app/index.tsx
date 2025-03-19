import { router } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Quer viajar no tempo ou ser a vloecidade?</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => router.push('/date-time')}>
                    <Text style={styles.buttonText}>Date & Time</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => router.push('/acelerometro')}>
                    <Text style={styles.buttonText}>Acelerômetro</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#121212',
    },
    header: {
        fontSize: 32,
        fontWeight: '600',
        color: '#fff',
        marginBottom: 50,
        textAlign: 'center',
    },
    buttonContainer: {
        width: '85%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#6200EE',
        paddingVertical: 14,
        paddingHorizontal: 25,
        borderRadius: 25,
        marginBottom: 20,
        elevation: 4,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
    },
});