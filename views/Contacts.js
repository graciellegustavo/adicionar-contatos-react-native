import { useState } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native";

export default function Contacts() {
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [contatos, setContatos] = useState([])
  const [contador, setContador] = useState(0)

  const adicionarNome = () => {
    setContatos(contatos => {
      setContador(contador + 1)

      let aux = [{ key: contador.toString(), value: { nome: nome, telefone: telefone } }, ...contatos]
      setNome('')
      setTelefone('')
      return aux
    })
  }

  const capturarTelefone = (telefoneDigitado) => {
    setTelefone(telefoneDigitado)
  }

  const capturarNome = (nomeDigitado) => {
    setNome(nomeDigitado)
  }

  return (
    <View
      style={styles.main}>
      <View>
        <Text>Nome</Text>
        <TextInput
          style={
            styles.contatoTextInput}
          onChangeText={capturarNome}
          value={nome}
        />
        <Text>Telefone</Text>
        <TextInput
          style={
            styles.contatoTextInput}
          onChangeText={capturarTelefone}
          value={telefone}
        />
        <Text>Adicionar contato</Text>
        <Button
          disabled={nome.length === 0 || telefone.length === 0}
          onPress={adicionarNome}
        />
      </View>
      <FlatList
        data={contatos}
        renderItem={l => (
          <View style={styles.contatoNaLista}>
            <Text>{l.item.value.nome} - {l.item.value.telefone}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  main: {
    padding: 40
  },

  contatoTextInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 4,
    padding: 12
  },

  contatoNaLista: {
    padding: 12,
    backgroundColor: '#CCC',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 8
  }

});