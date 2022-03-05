import React, {useEffect, useState} from 'react';
import {Pressable, useWindowDimensions, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '../../theme';
import {Avatar} from 'react-native-paper';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolation,
  FadeIn,
  FadeOut,
  withRepeat,
  Easing,
  withTiming,
} from 'react-native-reanimated';
import {Text} from '../../components';
import {Button} from '../../components';
import {delay} from '../../utils/HelpDog';

const Paw = () => (
  <Avatar.Icon
    size={120}
    color={Theme.colors.error}
    style={{backgroundColor: 'transparent'}}
    icon="paw"
  />
);

const HelpDog = () => {
  const {width, height} = useWindowDimensions();
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const opacity = useSharedValue(0);
  const [playing, isPlaying] = useState(true);
  const [score, setScore] = useState(0);

  const startPlaying = async () => {
    setScore(0);
    isPlaying(true);
    opacity.value = withRepeat(
      withTiming(1, {
        duration: 500,
      }),
      -1,
      true,
    );
    for (let i = 0; i < 10; i++) {
      await delay(1000);
      randomMove();
    }
    isPlaying(false);
    opacity.value = withTiming(0, {duration: 1000, easing: Easing.ease});
  };

  const randomMove = () => {
    translateX.value = Math.random();
    translateY.value = Math.random();
  };

  useEffect(() => {
    startPlaying();
  }, []);

  const animatedStyles = useAnimatedStyle(() => {
    const moveX = interpolate(
      translateX.value,
      [0, 1],
      [-width / 2, width / 2],
      {
        extrapolateRight: Extrapolation.CLAMP,
      },
    );

    const moveY = interpolate(translateY.value, [0, 1], [-220, height / 3], {
      extrapolateRight: Extrapolation.CLAMP,
    });

    return {
      opacity: opacity.value,
      transform: [{translateX: moveX}, {translateY: moveY}],
    };
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      {playing ? null : (
        <Animated.View entering={FadeIn.duration(1500)} exiting={FadeOut}>
          <Text
            label={score > 5 ? 'Good job' : 'Nice try'}
            textAlignment="center"
            size={'largeTitle'}
          />
          <View style={styles.score}>
            <Text
              label={`You scored ${score}`}
              size={'body'}
              textAlignment="center"
            />
          </View>
          <View style={styles.button}>
            <Button
              color={Theme.colors.error}
              icon="arrow-u-left-top"
              label={'Play again'}
              onPress={startPlaying}
              textProps={{color: 'white'}}
            />
          </View>
        </Animated.View>
      )}
      <Animated.View entering={FadeIn} style={[animatedStyles]}>
        <Pressable disabled={!playing} onPress={() => setScore(score + 1)}>
          <Paw />
        </Pressable>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  safeAreaView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.colors.background,
  },
  score: {
    ...Theme.spacers.MT_2,
  },
  button: {
    ...Theme.spacers.MT_5,
  },
});

export default HelpDog;
