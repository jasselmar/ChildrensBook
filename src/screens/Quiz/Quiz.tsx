import React, {useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Theme} from '../../theme';
import {Text, Button, Question, Answer} from '../../components';
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
            <Question question={questions[questionIndex]?.question} />
            <Answer
              touched={touched}
              variable={questions[questionIndex].variables[0]}
              answer={questions[questionIndex].answer}
              onPress={() => setTouched(true)}
            />
            <Answer
              touched={touched}
              variable={questions[questionIndex].variables[1]}
              answer={questions[questionIndex].answer}
              onPress={() => setTouched(true)}
            />
            <Answer
              touched={touched}
              variable={questions[questionIndex].variables[2]}
              answer={questions[questionIndex].answer}
              onPress={() => setTouched(true)}
            />
            <View style={styles.control}>
              <RightArrow />
            </View>
          </>
        ) : (
          <View style={styles.final}>
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
            <Button
              color={Theme.colors.error}
              icon="arrow-u-left-top"
              label={'Play again'}
              onPress={() => setQuestionIndex(0)}
              textProps={{color: 'white'}}
            />
          </View>
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
  control: {
    ...Theme.spacers.MV_5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  description: {
    ...Theme.spacers.MV_2,
  },
  final: {
    ...Theme.spacers.MH_10,
  },
});
export default Quiz;
