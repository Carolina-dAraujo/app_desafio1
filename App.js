import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Switch, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sexo: 0,
      valor: 0,
      estudante: false,
      
    };
  }

  enviar(){
    this.setState.
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.titulo}>BANCO REACT</Text>
        </View>

        <View>
          <Text style={styles.subtitulo}>Nome:</Text>
          <TextInput style={styles.input} />

          <Text style={styles.subtitulo}>Idade:</Text>
          <TextInput style={styles.input} />

          <Text style={styles.subtitulo}>Sexo:</Text>
          <Picker
            style={styles.picker}
            selectedValue={this.state.sexo}
            onValueChange={(itemValue) => this.setState({ sexo: itemValue })}
          >
            <Picker.Item value={1} label="Masculino" />
            <Picker.Item value={2} label="Feminino" />
          </Picker>

          <Text style={styles.subtitulo}>Limite:</Text>
          <Slider
            minimumValue={0}
            maximumValue={1000000}
            onValueChange={(valorSelecionado) => this.setState({ valor: valorSelecionado })}
            value={this.state.valor}
            minimumTrackTintColor='#ffff'
            maximumTrackTintColor='#ffdd'
          />
          <Text style={{textAlign: 'center', fontSize: 20, color: '#ffff'}}> {this.state.valor.toFixed(0)}</Text>

          <Text style={styles.subtitulo}>Estudante?</Text>

          <View style={styles.subcontainer}>
            <Switch 
              value={this.state.estudante}
              onValueChange={(valorSwitch) => this.setState({ estudante: valorSwitch })}
            />
            <Text style={styles.textoSwitch}>{this.state.estudante ? "Sim" : "Não"}</Text>
          </View>

          <Button color={'#FFFF'} title='Enviar' onPress={this.enviar}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#234b78',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  subcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginBottom: 10,
  },
  titulo: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 25, 
    color: '#ffff',
    fontWeight: 'bold',
  },
  subtitulo: {
    fontSize: 15,
    textAlign: 'left',
    color: '#ffff',
    fontWeight: 'bold',
    marginLeft: 10
  },
  input: {
    height: 45,
    width: 300,
    borderWidth: 0.25,
    borderColor: '#ffff',
    margin: 10,
    fontSize: 20,
    padding: 10,
    color: '#ffff'
  },
  picker: {
    height: 45,
    width: 300,
    borderWidth: 0.25,
    borderColor: '#ffff',
    margin: 10,
    backgroundColor: '#ffff'
  },
  textoSwitch: {
    fontSize: 15,
    color: '#ffff',
    fontWeight: 'bold',
    marginLeft: 10
  }
});

export default App;
