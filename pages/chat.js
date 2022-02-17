import { Box, TextField, Text, Image, Button } from '@skynexui/components';
import React from 'react';
import appConfig from '../config.json';


export default function ChatPage() {
    return (
        <Box
            styleSheet={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: appConfig.theme.colors.primary[300],
                backgroundImage: 'url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)',
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                backgroundPosition: 'top',
                color: appConfig.theme.colors.neutrals['000']
            }}
        >
            <Box
                styleSheet={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                    borderRadius: '5px',
                    backgroundColor: appConfig.theme.colors.neutrals[700],
                    height: '100%',
                    maxWidth: '95%',
                    maxHeight: '95vh',
                    padding: "32px",
                }}
            >
                <Header/>
                
                <Box
                    styleSheet={{
                        position: 'relative',
                        display: 'flex',
                        flex: 1,
                        height: '80%',
                        backgroundColor: appConfig.theme.colors.neutrals[600],
                        flexDirection: 'column',
                        borderRadius: '5px',
                        padding: '16px',
                    }}
                >
                    <MessageList/>
                    <Box
                        as="form"
                        styleSheet={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                            <TextField
                                placeholder="Insira sua mensagem aqui..."
                                type='textarea'
                                styleSheet={{
                                    width: "100%",
                                    border: '0',
                                    resize: 'none',
                                    borderRadius: '5px',
                                    padding: '6px 8px',
                                    backgroundColor: appConfig.theme.colors.neutrals[800],
                                    marginRight: '12px',
                                    color: appConfig.theme.colors.neutrals[200],
                                }}
                            />
                        </Box>
                </Box>
            </Box>
        </Box>
    )
}

function Header(){
    return(
        <>
        <Box styleSheet={{width:'100%',marginBottom:'16px', display:'flex', alighItems:'center', justifyContent:'space-between'}}>
            <Text variant='heading5' >
                Chat
            </Text>
            <Button 
                variant='tertiary'
                colorVariant='neutral'
                label='Logout'
                href="/"
            />
        </Box>
        </>
    )
}

function MessageList(props) {
    
    return (
        <>
            
            <Box
                tag="ul"
                styleSheet={{
                    overflow: 'auto',
                    display: 'flex',
                    flexDirection: 'column-reverse',
                    flex: 1,
                    color: appConfig.theme.colors.neutrals["000"],
                    marginBottom: '16px',
                }}
                className='caixa-mensagem'
            >
              <Text
                            
                            tag="li"
                            styleSheet={{
                                borderRadius: '5px',
                                padding: '6px',
                                marginBottom: '12px',
                                hover: {
                                    backgroundColor: appConfig.theme.colors.neutrals[700],
                                }
                            }}
                        >
                            <Box
                                styleSheet={{
                                    marginBottom: '8px',
                                    hover: {
                                        cursor: 'pointer'
                                    }
                                }}
                            >
                                
                                <Text tag="strong"  
                                    onClick={()=>{
                                        setNomeModal(mensagem.de);
                                        setShowModal(true);
                                    }}
                                >
                                  
                                </Text>
                                <Text
                                    styleSheet={{
                                        fontSize: '10px',
                                        margin: '0 8px',
                                        color: appConfig.theme.colors.neutrals['050'],
                                    }}
                                    tag="span"
                                >
                                   
                                </Text>
                                
                                <style jsx>{`
                                    button {
                                        background: none;
                                        border: none;
                                        border-radius: 2px;
                                    }
                                    button:hover {
                                        background-color: ${appConfig.theme.colors.neutrals[900]};
                                        cursor: pointer;
                                    }
                                `}</style>
                            </Box>
                            
                        </Text>
                    
                
            </Box>
        </>
    )
}

