import React, { useEffect } from 'react'
import { Text, Image } from 'react-native'


import logo from '../../assets/logo.png'
import bgBotton from '../../assets/bg-bottom-login.png'

import { Container, Button, ButtonText } from '../../styles'

import social from '../../services/social'
import { useDispatch } from 'react-redux'
import { updateUser } from '../../store/modules/app/actions'

const Login = () => {


    const dispatch = useDispatch();

    const login = async () => {
        try {

            const auth = await social.authorize('facebook', {
                scopes: 'email',
            });

            const user = await social.makeRequest(
                'facebook',
                '/me?fileds=id,name,email',
            );

            dispatch(updateUser({
                fbId: user.data.id,
                nome: user.data.name,
                email: user.data.email,                
                acessToken: auth.response.credentials.acessToken,
            }))

        } catch (err) {
            alert(err.message);
        }
    }


    return (

        <Container justify="flex-end" color="info50">
            <Container

                justify="space-around"
                padding={30}
                position="absolute"
                height={270}
                top={0}
                zIndex={9}
            >
                <Image source={logo} />
                <Button
                    onPress={() => login()}
                    type="info">
                    <ButtonText color="light">Fazer Login com Facebook</ButtonText>
                </Button>

                <Button type="light">
                    <ButtonText>Fazer Login com Facebook</ButtonText>
                </Button>
            </Container>
            <Image source={bgBotton} />
        </Container>
    )
}

export default Login