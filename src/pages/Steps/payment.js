import React, {useState, useEffect} from 'react'
import { Keyboard } from 'react-native'
import {CreditCardInput} from 'react-native-credit-card-input';
import { Container, Button, ButtonText, Title, Subtitle } from '../../styles'



const Payment = () => {

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
              <Title>Escolha como pagar</Title>
               <Subtitle>Preencha os dados do cartão de crédito</Subtitle>
            </Container>
            <Container>
              <CreditCardInput requiresName />
            </Container>
            {visible && (
            <Container height={70} justify="flex-end">
                <Button>
                    <ButtonText>Próximo Passo</ButtonText>
                </Button>
            </Container>
            )}
        </Container>
    )
}


export default Payment;