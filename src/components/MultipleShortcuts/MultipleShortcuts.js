import React from 'react';
import {Form,TextField,Checkbox} from '@adobe/react-spectrum'
import {Picker, Item, Section} from '@adobe/react-spectrum'
import {Flex, View} from '@adobe/react-spectrum';
import {ActionGroup,CheckboxGroup,Heading} from '@adobe/react-spectrum'
import {Button} from '@adobe/react-spectrum'
import Divider from '@material-ui/core/Divider';
import SingleShortcutTable from '../Table/SingleShortcutTable'

import Box from '@material-ui/core/Box';
import { Grid,Paper } from '@material-ui/core';





const MultipleShortcuts = () => (
    <div>
       <Box style={{background : "#EAEAEA", padding : "10px"}}>
       <Grid container  spacing={1}>
            <Grid container item xs={12} spacing={1}>
                    <Grid container item xs={5} spacing={0}  justifyContent="flex-end">
                        <Heading level={4}>Upload File (xml/json/kys)*</Heading>
                    
                    </Grid>
                    <Grid container item xs={2} spacing={0}  >

                    </Grid>
                    <Grid container item xs={5} spacing={1} alignItems="center">
                            <input type="file"></input>
                    
                    </Grid>
                    
                    
            </Grid>


            <Grid container item xs={12} spacing={1}>
                    <Grid container item xs={5} spacing={0}  justifyContent="flex-end">
                        <Heading level={4}>Choose OS *</Heading>
                    
                    </Grid>
                    <Grid container item xs={2} spacing={0}  >

                    </Grid>
                    <Grid container item xs={5} spacing={1} alignItems="center">
                            <Picker  isRequired>
                                <Item key="rarely">Win</Item>
                                <Item key="sometimes">Mac</Item>
                            </Picker>
                    
                    </Grid>
                    
                    
            </Grid>

            <Grid container item xs={12} spacing={1}>
                    <Grid container item xs={5} spacing={0}  justifyContent="flex-end">
                        <Heading level={4}>Source Locale *</Heading>
                    
                    </Grid>
                    <Grid container item xs={2} spacing={0}  >

                    </Grid>
                    <Grid container item xs={5} spacing={1} alignItems="center">
                    <TextField  placeholder="Locale" isRequired/>
                    
                    
                    </Grid>
                    
                    
            </Grid>

            <Grid container item xs={12} spacing={1}>
                    <Grid container item xs={5} spacing={0}  justifyContent="flex-end">
                        <Heading level={4}>Seelect the keyboard language *</Heading>
                    
                    </Grid>
                    <Grid container item xs={2} spacing={0}  >

                    </Grid>
                    <Grid container item xs={5} spacing={1} alignItems="center" >
                    <div style={{    maxWidth: "500px", maxHeight: "120px", overflow: "scroll"}}>
                    <Paper variant="outlined" >
                    <CheckboxGroup   >
                            <Flex direction="row" >
                            <Checkbox value="1" >de-DE</Checkbox>
                            <Checkbox value="2">fr-FR</Checkbox>
                            <Checkbox value="3">es-ES</Checkbox>
                            <Checkbox value="4">es-ES</Checkbox>
                           
                            </Flex>
                            <Flex direction="row" >
                            <Checkbox value="4">ru-RU</Checkbox>
                            <Checkbox value="5">ja-JP</Checkbox>
                            <Checkbox value="6">nl-NL</Checkbox>
                            <Checkbox value="6">nl-NL</Checkbox>
                            </Flex>
                            <Flex direction="row" >
                            <Checkbox value="7">tr-TR</Checkbox>
                            <Checkbox value="8">ko-KR</Checkbox>
                            <Checkbox value="9">zh-CN</Checkbox>
                            <Checkbox value="9">zh-CN</Checkbox>
                            </Flex>
                            <Flex direction="row" >
                            <Checkbox value="10">it-IT</Checkbox>
                            <Checkbox value="11">pt-BR</Checkbox>
                            <Checkbox value="12">pl-PL</Checkbox>
                            <Checkbox value="12">pl-PL</Checkbox>
                            </Flex>
                            <Flex direction="row" >
                            <Checkbox value="10">it-IT</Checkbox>
                            <Checkbox value="11">pt-BR</Checkbox>
                            <Checkbox value="12">pl-PL</Checkbox>
                            <Checkbox value="12">pl-PL</Checkbox>
                            </Flex>
                        </CheckboxGroup>
                    </Paper>
                    </div>
                    </Grid>
                    
                    
            </Grid>
                
        </Grid>

        <Grid container direction="row" justifyContent="center" alignItems="center">
        <Button variant="cta">Validate</Button>
        </Grid>
                
        </Box>
        <Divider variant="middle" />
        {/* <SingleShortcutTable/> */}
    </div>
);

export default MultipleShortcuts;