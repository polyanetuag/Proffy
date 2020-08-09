import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import styles from './styles';

function TeacherItem() {
    return (
    <View style={styles.container}>
        <View style={styles.profile}>
            <Image 
                style={styles.avatar}
                source={{ uri: 'http://github.com/igortuag.png' }}
            />

            <View style={styles.profileInfo}>
                <Text style={styles.name}>Igor Tuag</Text>
                <Text style={styles.subject}>Ciências Tecnológicas</Text>
            </View>
        </View>

        <Text style={styles.bio}>
            Apaixonado em tecnologias JavaScript, ReactJS e Vue.
            {'\n'}{'\n'}
             Aqui, eu te ensino. Nas horas vagas, eu desenvolvo. Conheça o maravilhoso mundo da programação!
        </Text>

        <View style={styles.footer}>
            <Text style={styles.price}>
                Preço/hora {'   '}
                <Text style={styles.priceValue}>R$ 90,00</Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton style={[styles.favoriteButton, styles.favorited]}>
                   {/* <Image source={heartOutlineIcon} /> */}
                    <Image source={unfavoriteIcon} />
                </RectButton>

                <RectButton style={styles.contactButton}>
                    <Image source={whatsappIcon} />
                    <Text style={styles.contactButtonText}>Entrar em contato</Text>
                </RectButton>

            </View>
        </View>

    </View>
    )
}

export default TeacherItem;