import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';

export function RegressaoLinear() {
    const [valorA, setValorA] = useState('');
    const [valorB, setValorB] = useState('');
    const [valorC, setValorC] = useState('');
    const [resultados, setResultados] = useState([]);

    const handleSubmit = () => {
        const resultadoAtual = `Ponto 1: ${valorA}, Ponto 2: ${valorB}, Ponto 3: ${valorC}`;
        setResultados(prevResultados => [...prevResultados, resultadoAtual]);
    };

    const handleExcluir = () => {
        setResultados([]); // Isso irá excluir todos os resultados
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>

            <Text>Ponto 1:</Text>
            <TextInput
                style={styles.input}
                placeholder="p1"
                value={valorA}
                onChangeText={text => setValorA(text)}
            />

            <Text>Ponto 2:</Text>
            <TextInput
                style={styles.input}
                placeholder="p2"
                value={valorB}
                onChangeText={text => setValorB(text)}
            />

            <Text>Ponto 3:</Text>
            <TextInput
                style={styles.input}
                placeholder="p3"
                value={valorC}
                onChangeText={text => setValorC(text)}
            />

            <View style={styles.buttonContainer}>
                <Button title="Excluir" onPress={handleExcluir} />
                <Button title="Enviar" onPress={handleSubmit} />

            </View>

            {resultados.length > 0 && (
                <View style={styles.resultadosContainer}>
                    <Text style={styles.resultadosTitulo}>Resultados:</Text>
                    {resultados.map((resultado, index) => (
                        <Text key={index} style={styles.resultadoItem}>{resultado}</Text>
                    ))}
                </View>
            )}

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        
        marginTop: 10,
        marginLeft: 80,
        marginRight: 80,
    },
    resultadosContainer: {
        marginTop: 20,
    },
    resultadosTitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    resultadoItem: {
        fontSize: 16,
        marginBottom: 5,
    },
});
