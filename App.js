/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';

import styled from 'styled-components';
import DropDownPicker from 'react-native-dropdown-picker';
import {Modal, StatusBar, Switch} from 'react-native';
import Slider from '@react-native-community/slider';

//

export default () => {
  const [isName, setName] = useState(''); //Nome
  const [sexo, setSexo] = useState();
  const [valueSlider, setValueSlider] = useState(0); //Renda
  const [isEnabled, setIsEnabled] = useState(false); //Estudante
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [isOpen, setIsOpen] = useState(false); //switch

  const abrirModal = () => {
    setIsOpen(true);
  };
  const fecharModal = () => {
    setIsOpen(false);
  };

  return (
    <Pagina>
      <StatusBar hidden={true} />
      <ImagemLogo source={require('./src/assets/bank.png')} />
      <CampoTexto
        placeholder={'Seu nome'}
        placeholderTextColor={'#14213d'}
        onChangeText={(value) => setName(value)}
      />
      <DropDownPicker
        items={[
          {label: 'Masculino', value: 'Masculino'},
          {label: 'Feminino', value: 'Feminino'},
        ]}
        placeholder={'Selecione o sexo'}
        placeholderStyle={{color: '#14213d'}}
        defaultValue={sexo}
        arrowSize={0}
        labelStyle={{fontSize: 20}}
        selectedLabelStyle={{color: 'black', fontSize: 20}}
        containerStyle={{height: 50, width: '90%'}}
        style={{backgroundColor: '#fafafa', fontSize: 25}}
        itemStyle={{
          justifyContent: 'flex-start',
          color: 'black',
        }}
        dropDownStyle={{backgroundColor: '#fafafa'}}
        onChangeItem={(item) => setSexo(item.value)}
      />
      <Subpagina>
        <TextoSlider>Informe a Renda mensal: Até R${valueSlider}</TextoSlider>
        <Slider
          style={{width: '100%', height: 20}}
          minimumValue={0}
          maximumValue={5000}
          step={500}
          value={valueSlider}
          onValueChange={(value) => setValueSlider(value)}
          minimumTrackTintColor="#55a630"
          maximumTrackTintColor="#14213d"
        />
      </Subpagina>

      <Pagina2>
        <Texto>Sou estudante</Texto>
        <Switch
          style={{height: 50}}
          trackColor={{false: '#767577', true: '#80b918'}}
          thumbColor={isEnabled ? '#55a630' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </Pagina2>
      <Entrar onPress={abrirModal}>
        <TextoEntrar>Entrar</TextoEntrar>
      </Entrar>
      <PaginaModal>
        <Modal
          style={{width: 200, height: 200}}
          animationType="slide"
          transparent={true}
          visible={isOpen}>
          {!isName || !sexo ? (
            <ModalErro>
              <TextoModalErro>Nome e Gênero são necessários!</TextoModalErro>
              <ImagemErrou source={require('./src/assets/errou.png')} />
              <Entrar onPress={fecharModal}>
                <TextoEntrar>Voltar</TextoEntrar>
              </Entrar>
            </ModalErro>
          ) : (
            <Pagina3>
              <TextoModalOk>Vamos Confirmar?</TextoModalOk>
              <Pagina4>
                <Texto>
                  Nome:<TextoNegrito> {isName}</TextoNegrito>
                </Texto>
                <Texto>
                  Gênero:<TextoNegrito> {sexo}</TextoNegrito>
                </Texto>
                <Texto>
                  Renda Atual: <TextoNegrito>R${valueSlider},00</TextoNegrito>
                </Texto>
                {!isEnabled ? (
                  <TextoItalico>Não é Estudante</TextoItalico>
                ) : (
                  <TextoItalico>É Estudante</TextoItalico>
                )}
              </Pagina4>

              <Entrar onPress={fecharModal}>
                <TextoEntrar>Entrar</TextoEntrar>
              </Entrar>

              <Corrigir onPress={fecharModal}>
                <TextoCorrigir>Corrigir</TextoCorrigir>
              </Corrigir>
            </Pagina3>
          )}
        </Modal>
      </PaginaModal>
    </Pagina>
  );
};

const Pagina = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #14213d;
  padding-top: 10px;
`;
const CampoTexto = styled.TextInput`
  width: 90%;
  height: 50px;
  padding-left: 15px;
  font-size: 20px;
  background-color: #fafafa;
  color: #000;
  margin-bottom: 10px;
  border-radius: 5px;
`;
const Pagina2 = styled.View`
  width: 90%;
  height: 50px;
  flex-direction: row;
  align-items: center;
`;
const Texto = styled.Text`
  color: white;
  font-size: 20px;
`;
const Subpagina = styled.View`
  margin-top: 10px;
  background-color: white;
  width: 90%;
  height: 50px;
  border-radius: 5px;
`;
const TextoSlider = styled.Text`
  padding-left: 15px;
  color: #14213d;
  font-size: 20px;
`;
const Entrar = styled.TouchableOpacity`
  width: 90%;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: #fca311;
  padding: 12px;
  border-radius: 10px;
  margin: 5px 5px;
`;
const Corrigir = styled.TouchableOpacity`
  width: 90%;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: #fca311;
  padding: 12px;
  border-radius: 10px;
  margin: 5px 5px;
`;
const TextoEntrar = styled.Text`
  color: white;
  font-size: 25px;
  font-weight: bold;
`;
const PaginaModal = styled.View`
  justify-content: center;
  align-items: center;
  margin: 50px;
`;
const Pagina3 = styled.View`
  flex: 1;
  margin: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: #aaa;
`;
const ModalErro = styled.View`
  flex: 1;
  margin: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: #14213d;
`;
const ImagemLogo = styled.Image`
  width: 250px;
  height: 250px;
`;
const ImagemErrou = styled.Image`
  width: 300px;
  height: 300px;
`;
const Pagina4 = styled.View`
  border-radius: 15px;
  background-color: #14213d;
  width: 90%;
  padding-left: 15px;
  padding: 10px 10px;
  margin: 10px 10px;
`;
const TextoModalOk = styled.Text`
  color: #f0f0f0;
  font-size: 25px;
  font-weight: bold;
`;
const TextoModalErro = styled.Text`
  color: #f0f0f0;
  font-size: 25px;
  font-weight: bold;
`;
const TextoNegrito = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;
const TextoItalico = styled.Text`
  color: white;
  font-size: 20px;
  font-style: italic;
`;
const TextoCorrigir = styled.Text`
  color: white;
  font-size: 25px;
  font-weight: bold;
`;
