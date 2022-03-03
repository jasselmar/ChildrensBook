import React from 'react';
import {HomeScreenNavigationProp} from '../../types';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Text, Button, TextInput} from '../../components';
import {Theme} from '../../theme';
import {useFormik} from 'formik';
import HomeValidationSchema from '../../utils/Validation';
import {ValidationError} from '../../components';

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Home = (props: Props) => {
  const {navigation} = props;
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    values,
    //isSubmitting,
  } = useFormik({
    initialValues: {name: '', breed: ''},
    validationSchema: HomeValidationSchema,
    onSubmit: () => {
      navigation.push('PageViewer', {
        name: values.name,
        breed: values.breed,
      });
    },
  });

  return (
    <SafeAreaView style={styles.safeareaview}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <Image
            source={require('../../../assets/images/paw.png')}
            style={styles.mainImg}
          />
          <View style={styles.title}>
            <Text
              label={'Before we start the story...'}
              size={'title1'}
              textAlignment={'center'}
              medium
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              error={errors.name && touched.name ? true : false}
              value={values.name}
              label={'Name'}
            />
            {errors.name && touched.name && (
              <ValidationError error={errors.name} />
            )}
            <TextInput
              onChangeText={handleChange('breed')}
              onBlur={handleBlur('breed')}
              error={errors.breed && touched.breed ? true : false}
              value={values.breed}
              label={'Favorite dog breed'}
            />
            {errors.breed && touched.breed && (
              <ValidationError error={errors.breed} />
            )}
            <View style={styles.button}>
              <Button
                label={'Proceed'}
                onPress={handleSubmit}
                textProps={{color: 'white'}}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  safeareaview: {
    backgroundColor: Theme.colors.background,
    flex: 1,
    justifyContent: 'center',
  },
  inputContainer: {
    ...Theme.spacers.PT_2,
    ...Theme.spacers.PH_10,
  },
  button: {
    ...Theme.spacers.MT_2,
  },
  title: {
    ...Theme.spacers.MV_2,
  },
  mainImg: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
});

export default Home;
