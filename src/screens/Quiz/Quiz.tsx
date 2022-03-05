import React, {useState} from 'react';
import {View, SafeAreaView, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '../../theme';
import Animated, {FadeInLeft, FadeIn, FadeOut} from 'react-native-reanimated';
import {Text, Button} from '../../components';
import {questions} from '../../utils/Database/questions';
import {IconButton} from 'react-native-paper';

const Quiz = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [touched, setTouched] = useState(false);

  const RightArrow = () => (
    <IconButton
      icon="chevron-right"
      color={Theme.colors.error}
      size={40}
      onPress={() => {
        setTouched(false);
        setQuestionIndex(questionIndex + 1);
      }}
    />
  );
  return (
    <SafeAreaView style={styles.safeareaview}>
      <View style={styles.container}>
        {questionIndex < questions.length ? (
          <>
            <Animated.View
              entering={FadeIn.duration(800)}
              style={styles.question}>
              <Text
                label={questions[questionIndex]?.question}
                size={'title2'}
                textAlignment={'center'}
              />
            </Animated.View>
            <Animated.View
              entering={FadeInLeft.duration(800)}
              style={[
                styles.variable,
                touched
                  ? questions[questionIndex].variables[0] ===
                    questions[questionIndex].answer
                    ? styles.variableCorrect
                    : styles.variableIncorrect
                  : null,
              ]}>
              <TouchableOpacity
                onPress={() => {
                  setTouched(true);
                }}>
                <Text
                  label={questions[questionIndex]?.variables[0]}
                  color={'white'}
                />
              </TouchableOpacity>
            </Animated.View>
            <Animated.View
              entering={FadeInLeft.duration(800)}
              style={[
                styles.variable,
                touched
                  ? questions[questionIndex].variables[1] ===
                    questions[questionIndex].answer
                    ? styles.variableCorrect
                    : styles.variableIncorrect
                  : null,
              ]}>
              <TouchableOpacity
                onPress={() => {
                  setTouched(true);
                }}>
                <Text
                  label={questions[questionIndex]?.variables[1]}
                  color={'white'}
                />
              </TouchableOpacity>
            </Animated.View>
            <Animated.View
              entering={FadeInLeft.duration(800)}
              style={[
                styles.variable,
                touched
                  ? questions[questionIndex].variables[2] ===
                    questions[questionIndex].answer
                    ? styles.variableCorrect
                    : styles.variableIncorrect
                  : null,
              ]}>
              <TouchableOpacity
                onPress={() => {
                  setTouched(true);
                }}>
                <Text
                  label={questions[questionIndex]?.variables[2]}
                  color={'white'}
                />
              </TouchableOpacity>
            </Animated.View>
            <View style={styles.control}>
              <RightArrow />
            </View>
          </>
        ) : (
          <Animated.View
            entering={FadeIn.duration(1500)}
            style={styles.final}
            exiting={FadeOut}>
            <Text
              label={'Congrats!'}
              textAlignment="center"
              size={'largeTitle'}
            />
            <View style={styles.description}>
              <Text
                label={'You got to the end'}
                size={'body'}
                textAlignment="center"
              />
            </View>
            <View style={styles.button}>
              <Button
                color={Theme.colors.error}
                icon="arrow-u-left-top"
                label={'Play again'}
                onPress={() => setQuestionIndex(0)}
                textProps={{color: 'white'}}
              />
            </View>
          </Animated.View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  safeareaview: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Theme.colors.background,
  },
  container: {
    ...Theme.spacers.MA_8,
  },
  question: {
    ...Theme.spacers.PA_7,
    backgroundColor: 'white',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Theme.colors.error,
  },
  variable: {
    ...Theme.spacers.MT_4,
    ...Theme.spacers.PA_3,
    backgroundColor: Theme.colors.error,
    borderRadius: 10,
  },
  control: {
    ...Theme.spacers.MV_5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  next: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  description: {
    ...Theme.spacers.MV_2,
  },
  variableIncorrect: {
    borderWidth: 2,
    borderColor: 'red',
  },
  variableCorrect: {
    borderWidth: 2,
    borderColor: Theme.colors.correct,
  },
  final: {
    ...Theme.spacers.MH_10,
  },
});
export default Quiz;
