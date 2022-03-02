import React from 'react';
import {HomeScreenNavigationProp} from '../../types';
import {SafeAreaView, View} from 'react-native';
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
      navigation.push('PageViewer');
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text
        label={'Before we start...'}
        size={'largeTitle'}
        textAlignment={'center'}
        medium
      />
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleChange('name')}
          onBlur={handleBlur('name')}
          error={errors.name && touched.name ? true : false}
          value={values.name}
          label={'Name'}
        />
        {errors.name && <ValidationError error={errors.name} />}
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
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Theme.colors.background,
  },
  inputContainer: {
    ...Theme.spacers.PT_2,
    ...Theme.spacers.PH_10,
  },
  button: {
    ...Theme.spacers.MT_2,
  },
});

export default Home;
