import React from 'react';
import {View, SafeAreaView, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '../../theme';
import {Text} from '../../components';
import {Avatar} from 'react-native-paper';
import {GStackNavigationProp} from '../../types';

const Paw = () => (
  <Avatar.Icon
    size={60}
    color="white"
    style={{backgroundColor: 'transparent'}}
    icon="paw"
  />
);
const Quiz = () => (
  <Avatar.Icon
    size={60}
    color="white"
    style={{backgroundColor: 'transparent'}}
    icon="comment-question"
  />
);

type Props = {
  navigation: GStackNavigationProp;
};

const GamesHome = (props: Props) => {
  const {navigation} = props;
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Text
        label={'Games'}
        size={'largeTitle'}
        textAlignment={'center'}
        color={Theme.colors.error}
      />
      <View style={styles.cardContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('HelpDog')}
          style={styles.card}>
          <Paw />
          <Text
            label={'Help the dog'}
            textAlignment={'center'}
            size={'title1'}
            color={'white'}
          />
          <View style={styles.description}>
            <Text
              label={'Try to tap every paw you see.'}
              textAlignment={'center'}
              size={'body'}
              color={'white'}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Quiz />
          <Text
            label={'Quick quiz'}
            textAlignment={'center'}
            size={'title1'}
            color={'white'}
          />
          <View style={styles.description}>
            <Text
              label={'Some questions about the story.'}
              textAlignment={'center'}
              size={'body'}
              color={'white'}
            />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  safeAreaView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Theme.colors.background,
  },
  cardContainer: {
    ...Theme.spacers.MA_8,
  },
  card: {
    ...Theme.spacers.MB_7,
    ...Theme.spacers.PB_5,
    borderRadius: 40,
    backgroundColor: Theme.colors.error,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    ...Theme.spacers.MV_2,
  },
});

export default GamesHome;
