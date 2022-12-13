import React, { useState, useEffect } from 'react';
import { Form, TextField, Checkbox } from '@adobe/react-spectrum'
import { Picker, Item, Section } from '@adobe/react-spectrum'
import { Flex, View } from '@adobe/react-spectrum';
import { ActionGroup, CheckboxGroup } from '@adobe/react-spectrum'
import { Button, Heading } from '@adobe/react-spectrum'
import Divider from '@material-ui/core/Divider';
import SingleShortcutTable from '../Table/SingleShortcutTable'
import { Grid, Box, Paper } from '@material-ui/core';
import {IllustratedMessage,Content} from '@adobe/react-spectrum'
import NotFound from '@spectrum-icons/illustrations/NotFound';
import './../../App.css'



const axios = require('axios');


export default function SingleShortcut() {
    const [shortcut, setShortcut] = useState("");
    const [os, setOS] = useState("win");
    const [source, setSource] = useState("en-US");
    const [target, setTarget] = useState([]);
    const [targetOptions, setTargetOptions] = useState([]);
    const [clicked, setClicked] = useState("false");
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [singleShortcutResponse, setSingleShortcutResponse] = useState(null);
    const [singleShortcutResponseLoaded, setSingleShortcutResponseLoaded] = useState(false);



    const handleClick = () => {
        setSingleShortcutResponseLoaded(false)
        setClicked("true");
        console.log("Click" + shortcut)
        console.log("checkbox" + target)
        // setSingleShortcutResponse([]);

        let data = {
            "os": os,
            "shortcut": shortcut,
            "source_locale": source,
            "target_languages": target
        }

        // let data = {
        //     "os": "win",
        //     "shortcut": "CTRL + C",
        //     "source_locale": "en-US",
        //     "target_languages": [
        //       "French","German"
        //     ]
        // }

        axios.post("http://stage-kbsc-backend.corp.adobe.com/api/testsingleshortcut", data
          )
          .then(function (response) {
            console.log(response.data);
            setSingleShortcutResponse(response.data);
            console.log("heelo");
            setSingleShortcutResponseLoaded(true)
            
          })
          .catch(function (error) {
            console.log(error);
            setSingleShortcutResponseLoaded(false)
          });
          
    }


    const keyPress = (e) => {

        if (e.keyCode == 17) {
            setShortcut(shortcut + " Ctrl + ")

        }
        if (e.keyCode == 18) {
            setShortcut(shortcut + " Alt + ")

        }


    }

    const updateShortcut = (e) => {

        setShortcut(shortcut + e)

    }


    useEffect(() => {
        axios.get("http://stage-kbsc-backend.corp.adobe.com/api/languages")
            .then(function (response) {
                // handle success

                setIsLoaded(true);
                setTargetOptions(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                setIsLoaded(true);
                setError(error);
            })
            .then(function () {
                // always executed
                // console.log(" items "+items);
            });
        return () => {
            setTargetOptions([]); // Prevents memory leak
        };
    }, [])

    if (error) {
        return <div> 
        <IllustratedMessage>
            <NotFound />
            <Heading>No results</Heading>
            <Content>{error.message}</Content>
        </IllustratedMessage>
        </div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {


        return (
            <div>
                <Box style={{ background: "#EAEAEA", padding: "10px" }}>
                    <Grid container spacing={1}>
                        <Grid container item xs={12} spacing={1}>
                            <Grid container item xs={5} spacing={0} justifyContent="flex-end">
                                <Heading level={4}>Choose OS *</Heading>

                            </Grid>
                            <Grid container item xs={2} spacing={0}  >

                            </Grid>
                            <Grid container item xs={5} spacing={1} alignItems="center">
                                <Picker isRequired>
                                    <Item key="win">Win</Item>
                                    <Item key="mac" >Mac</Item>
                                </Picker>

                            </Grid>


                        </Grid>

                        <Grid container item xs={12} spacing={1}>
                            <Grid container item xs={5} spacing={0} justifyContent="flex-end">
                                <Heading level={4}>Enter the shortcut *</Heading>

                            </Grid>
                            <Grid container item xs={2} spacing={0}  >

                            </Grid>
                            <Grid container item xs={5} spacing={1} alignItems="center">
                                <TextField placeholder="Type or click on the buttons" minWidth="size-3600" onKeyDown={keyPress} value={shortcut} onChange={setShortcut} isRequired />
                                <ActionGroup density="compact" right="size-0" onAction={updateShortcut} >
                                    <Item key=" Ctrl + " >Ctrl</Item>
                                    <Item key=" Alt + ">Alt</Item>
                                    <Item key=" Shift + ">Shift</Item>
                                </ActionGroup>

                            </Grid>


                        </Grid>

                        <Grid container item xs={12} spacing={1}>
                            <Grid container item xs={5} spacing={0} justifyContent="flex-end">
                                <Heading level={4}>Select the keyboard language *</Heading>

                            </Grid>
                            <Grid container item xs={2} spacing={0}  >

                            </Grid>
                            <Grid container item xs={5} spacing={1} alignItems="center" >
                                <div style={{ overflow: "scroll" }}>
                                    <Paper variant="outlined" style={{ padding: "10px", overflow: "auto" }} >
                                        <Flex direction="row" >
                                            <CheckboxGroup

                                                value={target}
                                                onChange={setTarget}>
                                                {targetOptions.map((element) =>

                                                    <Checkbox key={element} value={element}>{element}</Checkbox>

                                                )}


                                            </CheckboxGroup>
                                        </Flex>
                                    </Paper>
                                </div>
                            </Grid>


                        </Grid>

                    </Grid>

                    <Grid container direction="row" justifyContent="center" alignItems="center">
                        <Button variant="cta" onPress={handleClick}>Validate</Button>
                    </Grid>

                </Box>
                <Divider />
                {singleShortcutResponseLoaded ? <SingleShortcutTable data={singleShortcutResponse}/>
                
                : <div>
                </div>}
                
            </div>
        )
    };
};

