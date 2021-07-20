import React, { useState } from 'react'
import { Text, Image, TouchableOpacity } from 'react-native'



import { Container, Title, Subtitle, Spacer, Map, Avatar, Input, Button, ButtonText, VerticalSeparator, Bullet, PulseCircle} from '../../styles'

const Home = () => {

    const tipo = 'P';
    const status = 'S'; // S SEM CORRIDA, I- INFORMAÇÕES, P- PESQUISA, C- CORRIDA

    return (
        <Container>
            <Map
                
                disabled={status == 'P'}
            />
            <Container
                position="absolute"
                justify="space-between"
                align="flex-start"
                padding={20}
                zIndex={999}
                pointerEvents="box-none"

                style={{ height: '100%' }}
            >
                {/* PARTE SUPERIOR */}
                <Container height={100} justify="flex-start" align="flex-start">
                    {/* AVATAR */}
                    {status == "S"  || tipo == "M" && (<TouchableOpacity>
                        <Avatar
                            source={{
                                uri: `https://valberlucio.com/wp-content/uploads/2019/10/avatar-site.png`,
                            }}
                        />
                    </TouchableOpacity>)}

                    {status !== 'S' && tipo == 'P' && (
                    <Container elevation={50} justify="flex-end" color="light">
                    <Container padding={10}>
                        <Container justify="flex-start" row>
                            <Bullet /> 
                            <Subtitle>Endereço de embarque</Subtitle>
                        </Container>
                        <Spacer />
                        <Container justify="flex-start" row>
                        <Bullet destination />  
                            <Subtitle>Endereço de destino</Subtitle>
                        </Container>
                    </Container>
                    <Button type="dark" compact>
                        <ButtonText color="light">Toque para editar</ButtonText>
                    </Button>

                    </Container>
                    )}
                </Container>

                 {/* PASSAGEIRO PROCURANDO CORRIDA */}
                {status == "P" &&  tipo == "P" && (<Container
                 padding={20}
                 zIndex={-1}
                 >
                        <PulseCircle
                        numPulses={3}
                        diameter={400}
                        speed={20}
                        duration={2000}
                        />
                </Container> )}      

                <Container elevation={50} height={150} color="light" justify="flex-start" padding={20} align="flex-start">
                    {/* PASSAGEIRO SEM CORRIDA */}
                    {tipo == 'P' && status == 'S' && (<Container>
                        <Subtitle>Olá, Sergio Victor.</Subtitle>
                        <Title>Pra onde você quer ir?</Title>
                        <Spacer />
                        <Input placeholder="Procure um destino..." />
                    </Container>)}

                     {/* PASSAGEIRO INFORMAÇÕES DA CORRIDA */}
                     {tipo == 'P' &&  (status == 'I' || status == 'P') && (<Container justify="flex-end" align="flex-start">
                       <Container>
                       <Subtitle>Drixerx Convencional</Subtitle>
                       <Spacer />
                       <Container row>
                           <Container>
                               <Title>R$ 13,90</Title>
                           </Container>
                           <VerticalSeparator />
                           <Container>
                               <Title>5 min</Title>
                           </Container>
                       </Container>
                       </Container>
                       <Button
                       type={status == 'P' ? 'muted' : 'primary'}
                       >
                           <ButtonText>{ status == 'P' ? 'Cancelar DriverX' : 'Chamar DriverX'}</ButtonText>
                       </Button>
                    </Container>)}
                    
                     {/* PASSEGEIRO EM CORRIDA */}

                     {tipo == 'P' && status == 'C' && (
                     <Container border="primary" justify="flex-end" align="flex-start">
                         <Container row padding={1}>
                            <Container align="flex-start" padding={10} row>

                                <Avatar 
                                small
                                source={{ 
                                    uri: 'https://valberlucio.com/wp-content/uploads/2019/10/avatar-site.png'
                                }}
                                />
                                <Spacer width="10px"/>
                                <Container align="flex-start">
                                    <Subtitle bold>Sergio Victor</Subtitle>
                                    <Subtitle small> ABC-1231, BMW, Preta</Subtitle>
                                </Container>
                            </Container>
                            <VerticalSeparator />
                            <Container width={120}>
                                <Title>R$ 12,90</Title>
                                <Subtitle bold color="primary"> Aprox. 5 min</Subtitle>
                            </Container>
                         </Container>
                         <Button type="muted">
                             <ButtonText>Aceitar Corrida</ButtonText>
                         </Button>
                     </Container>)}

                    {/* MOTORISTA SEM CORRIDA */}
                    {tipo == 'M' && status == 'S' && (
                    <Container>

                        <Subtitle>Olá, Sergio.</Subtitle>
                        <Title>Nenhuma corrida encontrada</Title>
                    </Container>)}


                    {/* MOTORISTA ESTÁ EM CORRIDA */}
                    {tipo == 'M' && status == 'C' && (
                     <Container border="primary" justify="flex-end" align="flex-start">
                         <Container row padding={10}>
                            <Container align="flex-start" row>

                                <Avatar 
                                small
                                source={{ 
                                    uri: 'https://valberlucio.com/wp-content/uploads/2019/10/avatar-site.png'
                                }}
                                />
                                <Spacer width="10px"/>
                                <Container align="flex-start">
                                <Container>
                        <Container justify="flex-start" height={30}  row>
                            <Bullet /> 
                            <Subtitle small numberOfLines={1}>Endereço de embarque</Subtitle>
                        </Container>
                        <Spacer />
                        <Container justify="flex-start" height={30} row>
                        <Bullet destination />  
                            <Subtitle small numberOfLines={1}>Endereço de destino</Subtitle>
                        </Container>
                    </Container>
                                
                                
                                </Container>
                            </Container>
                            <VerticalSeparator />
                            <Container width={120}>
                                <Title>R$ 12,90</Title>
                                <Subtitle bold color="primary"> Aprox. 5 min</Subtitle>
                            </Container>
                         </Container>
                         <Button type="primary">
                             <ButtonText>Cancelar Corrida</ButtonText>
                         </Button>
                     </Container>)}
                </Container>


            </Container>
        </Container>

    )
}

export default Home