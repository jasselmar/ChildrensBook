import * as Yup from 'yup';
const HomeValidationSchema = Yup.object({
  name: Yup.string().required('Required'),
  breed: Yup.string().required('Required'),
});

export default HomeValidationSchema;
