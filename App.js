/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';

import styled from 'styled-components';
import DropDownPicker from 'react-native-dropdown-picker';
import {Modal, Switch} from 'react-native';
import Slider from '@react-native-community/slider';

//

export default () => {
  const [isName, setname] = useState('');
  const [value, setValue] = useState();
  const [valueSlider, setValueSlider] = useState();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [isOpen, setIsOpen] = useState(false);

  const abrirModal = () => {
    setIsOpen(true);
  };
  const fecharModal = () => {
    setIsOpen(false);
  };

  return (
    <Pagina>
      <CampoTexto
        value={isName}
        placeholder={'Seu nome'}
        placeholderTextColor={'#14213d'}
      />
      <DropDownPicker
        items={[
          {label: 'Masculino', value: 1},
          {label: 'Feminino', value: 2},
        ]}
        placeholder={'Selecione o sexo'}
        placeholderStyle={{color: '#14213d', fontSize: 20}}
        defaultValue={value}
        arrowSize={0}
        containerStyle={{height: 50, width: '90%'}}
        style={{backgroundColor: '#fafafa'}}
        itemStyle={{
          justifyContent: 'flex-start',
        }}
        dropDownStyle={{backgroundColor: '#fafafa'}}
        onChangeItem={(item) => setValue(item.value)}
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
      <Entrar onPress={abrirModal, setName()}>
        <TextoEntrar>Entrar</TextoEntrar>
      </Entrar>
      <PaginaModal>
        <Modal
          style={{width: 200, height: 200}}
          animationType="slide"
          transparent={true}
          visible={isOpen}>
          <Pagina3>
            <Texto>Vamos Confirmar?</Texto>
            <Texto>Seu nome é {isName}</Texto>
            <Entrar onPress={fecharModal}>
              <TextoEntrar>Entrar</TextoEntrar>
            </Entrar>
          </Pagina3>
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
  background-color: #e5e5e5;
`;
