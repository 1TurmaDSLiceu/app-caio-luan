import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import { StatusBar } from 'expo-status-bar';

export default function Acelerometro() {
    const [{ x, y, z }, setData] = useState({ x: 0, y: 0, z: 0 });
    const [alertShown, setAlertShown] = useState(false);

    useEffect(() => {
        const subscription = Accelerometer.addListener(setData);
        Accelerometer.setUpdateInterval(200);
        return () => subscription.remove();
    }, []);

    useEffect(() => {
        const totalAcceleration = Math.sqrt(x * x + y * y + z * z);
        const maxAcell = 2.5;

        if (totalAcceleration > maxAcell && !alertShown) {
            setAlertShown(true);
            Alert.alert(
                "🚨 Eita! Calma aí, navegante! 🚨",
                "Parece que você está mais parado que água de poça. Tá tudo bem por aí ou a labirintite deu check-in? 😂",
                [
                    { text: "Calma vida, tá de boa! 😎", onPress: () => console.log("Usuário de boa") },
                    { text: "Bença Papai! 🚑", onPress: () => console.log("Chamando reforços") }
                ]
            );
        }
    }, [x, y, z, alertShown]);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Acelerômetro</Text>
            <View style={styles.valuesContainer}>
                <Text style={styles.value}>x: {x.toFixed(2)}</Text>
                <Text style={styles.value}>y: {y.toFixed(2)}</Text>
                <Text style={styles.value}>z: {z.toFixed(2)}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => Accelerometer.setUpdateInterval(2000)}>
                    <Text style={styles.buttonText}>Lento</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => Accelerometer.setUpdateInterval(50)}>
                    <Text style={styles.buttonText}>Rápido</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#fff',
        textAlign: 'center',
    },
    valuesContainer: {
        marginBottom: 20,
        alignItems: 'center',
    },
    value: {
        fontSize: 22,
        marginVertical: 5,
        color: '#BB86FC',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
    button: {
        backgroundColor: '#6200EE',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginHorizontal: 10,
        marginBottom: 15,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 22,
        textAlign: 'center',
    },
});