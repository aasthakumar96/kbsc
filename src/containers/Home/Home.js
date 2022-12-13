import React from 'react';
import {Flex, View} from '@adobe/react-spectrum';
import Navbar from '../../components/Navbar/Navbar'
import {RadioGroup, Radio} from '@adobe/react-spectrum'
import SingleShortcut from '../../components/SingleShortcut/SingleShortcut'
import MultipleShortcuts from '../../components/MultipleShortcuts/MultipleShortcuts'
import { Container } from '@material-ui/core';


const home = () => (
    <div>
        <Navbar/>
        <View backgroundColor="gray-800" height="size-100" />
        <Flex direction="column" gap="size-0">
            <View backgroundColor="gray-500" height="size-800" style={{background : "#323232"}} >
                <Flex direction="column"  alignItems="center" alignContent="center" marginTop="size-200">
                    <RadioGroup label="" orientation='horizontal' value="Single">
                        <Radio value="Single" >Single Shortcut</Radio>
                        <Radio value="Multiple">Multiple Shortcuts</Radio>
                    </RadioGroup>
                </Flex>
            </View>
            <Flex direction="row" justifyContent="center" >
                {/* <Container > */}
                    {/* <SingleShortcut/> */}
                    <MultipleShortcuts/>
                {/* </Container> */}
            </Flex>
            <View backgroundColor="gray-200" height="size-800" marginBottom='size-0'/>
        </Flex>
    </div>

);

export default home;