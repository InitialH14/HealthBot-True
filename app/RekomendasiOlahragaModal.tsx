import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Button
} from 'react-native';

const RekomendasiOlahragaModal: React.FC<{navigation:any, router:any}> = ({navigation,router}) => {
    const {day, url} = router.params;
    return(
        <View>

        </View>
    )
}

const styles = StyleSheet.create({
    ModalContainer : {
        flex: 1
    }
})

export default RekomendasiOlahragaModal