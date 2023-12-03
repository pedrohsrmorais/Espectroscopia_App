import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';

export function RegressaoLinear() {

    const [valorX1, setValorX1] = useState(0);
    const [valorX2, setValorX2] = useState(0);
    const [valorX3, setValorX3] = useState(0);

    const [valorY1, setValorY1] = useState(0);
    const [valorY2, setValorY2] = useState(0);
    const [valorY3, setValorY3] = useState(0);

    const [resultados, setResultados] = useState([]);

    const handleSubmit = () => {
        const resultadoAtual = [valorX1, valorY1, valorX2, valorY2, valorX3, valorY3]

        setResultados(prevResultados => [...prevResultados, resultadoAtual]);
    };

    const handleExcluir = () => {
        setResultados([]); // Isso irá excluir todos os resultados
    };

    const handleGraph = (resultado) => {
        const x1 = resultado[0]
        const y1 = resultado[1]

        const x2 = resultado[2]
        const y2 = resultado[3]

        const x3 = resultado[4]
        const y3 = resultado[5]

   
        ponto_1 = [(x1+x2)/2,(y1+y2)/2]
        ponto_2 =[(x2+x3)/2,(y2+y3)/2]

        const inclinacao = (ponto_2[1] - ponto_1[1]) / (ponto_2[0] - ponto_2[1]);
        const interceptoY = ponto_1[1] - inclinacao * ponto_1[0];

        console.log(`y = ${inclinacao}x + ${interceptoY}`);


    }


    return (
        <ScrollView contentContainerStyle={styles.container}>

            {/*                ---PONTO1---            */}
            <Text>Ponto x1:</Text>
            <TextInput
                style={styles.input}
                placeholder="x1"
                value={valorX1}
                onChangeText={text => setValorX1(text)}
            />
            <Text>Ponto y1:</Text>
            <TextInput
                style={styles.input}
                placeholder="y1"
                value={valorY1}
                onChangeText={text => setValorY1(text)}
            />

            {/*                ---PONTO2---            */}
            <Text>Ponto x2:</Text>
            <TextInput
                style={styles.input}
                placeholder="x2"
                value={valorX2}
                onChangeText={text => setValorX2(text)}
            />
            <Text>Ponto y2:</Text>
            <TextInput
                style={styles.input}
                placeholder="y2"
                value={valorY2}
                onChangeText={text => setValorY2(text)}
            />


            {/*                ---PONTO3---            */}
            <Text>Ponto x3:</Text>
            <TextInput
                style={styles.input}
                placeholder="x3"
                value={valorX3}
                onChangeText={text => setValorX3(text)}
            />
            <Text>Ponto y3:</Text>
            <TextInput
                style={styles.input}
                placeholder="y1"
                value={valorY3}
                onChangeText={text => setValorY3(text)}
            />




            <View style={styles.buttonContainer}>
                <Button title="Excluir" onPress={handleExcluir} />
                <Button title="Enviar" onPress={handleSubmit} />

            </View>


            {resultados.length > 0 && (
                <View style={styles.resultadosContainer}>
                    <Text style={styles.resultadosTitulo}>Resultados:</Text>
                    {resultados.map((resultado, index) => (
                        <View key={index}>
                            <Text style={styles.resultadoItem}>Ponto 1: ({resultado[0]}, {resultado[1]}), Ponto 2: ({resultado[2]}, {resultado[3]}), Ponto 3: ({resultado[4]}, {resultado[5]})</Text>
                            <Button title="Mostrar gráfico" onPress={() => handleGraph(resultado)} />
                        </View>
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
