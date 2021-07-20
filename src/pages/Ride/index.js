import React, { useState, useEffect } from 'react'
import { Keyboard } from 'react-native'
import { Container, Button, ButtonText, Title, Subtitle, Input, Spacer, AdressList, AdressItem } from '../../styles'



const Ride = () => {


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

        <>

            <Container row height={50} justify="flex-start">
                <Container align="flex-start" padding={10}>
                    <Subtitle>Voltar</Subtitle>
                </Container>
                <Container>
                    <Title>Corrida</Title>
                </Container>
                <Container align="flex-end" padding={20}></Container>
            </Container>


            <Container padding={30} justify="flex-start">
                <Container height={90} justify="flex-start">
                    <Input
                        placeholder="Embarque"
                    />
                    <Input
                        placeholder="Destino"
                    />
                </Container>
                <Container>
             <AdressList
             data={[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]}
             renderItem={({item,index}) =>(
                <AdressItem>
                    <Subtitle bold>Menlo Parl</Subtitle>
                    <Subtitle small>Palo Alto, CA</Subtitle>
                </AdressItem>
             )}
             />
            </Container>
            </Container>

            
            {visible && (
                <Container height={160} padding={40} justify="flex-end">
                    <Button>
                        <ButtonText>Comece a usar</ButtonText>
                    </Button>
                </Container>
            )}

        </>
    )
}


export default Ride;