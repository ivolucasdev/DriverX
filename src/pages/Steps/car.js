import React, { useState, useEffect } from 'react'
import {Keyboard} from 'react-native'
import { Container, Button, ButtonText, Title, Subtitle, Input, Spacer } from '../../styles'



const Car = () => {

   
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const keyboarDidShowListener = Keyboard.addListener('keyboardDidShow', () =>
          setVisible(false),
        );
    
        const keyboarDidHideListener = Keyboard.addListener('keyboardDidHide', () =>
          setVisible(true),
        );

        return () => {
            keyboarDidShowListener.remove();
            keyboarDidHideListener.remove();
          };
        }, []);

    return (
        <Container padding={30} justify="flex-start">
        <Container align="flex-start" height={40}>
          <Title>Cadastre seu veículo</Title>
           <Subtitle>Preencha os campos abaixo.</Subtitle>
        </Container>
        <Container justify="flex-start">
            <Spacer height={50}/>
            <Input placeholder="Placa do veículo"/>
            <Spacer />
            <Input placeholder="Marca do veículo"/>
            <Spacer />
            <Input placeholder="Modelo do veículo"/>
            <Spacer />
            <Input placeholder="Cor do veículo"/>
            
        </Container>
        {visible && (
        <Container height={70} justify="flex-end">
            <Button>
                <ButtonText>Comece a usar</ButtonText>
            </Button>
        </Container>
        )}
    </Container>
    )
}


export default Car;