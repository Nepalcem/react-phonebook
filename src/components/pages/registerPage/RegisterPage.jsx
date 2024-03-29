import React from 'react';
import { ContentBlock } from 'components/ContactLayout/ContactLayout.styled';
import SignupForm from 'components/SignupForm/SignupForm';
import { useDispatch } from 'react-redux';
import { register } from 'redux/authorize/operations';
import AllreadyAccount from 'components/AlreadyAccountBlock/AllreadyAccount';

function RegisterPage() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <ContentBlock>
      <h2>Please Register..</h2>
      <SignupForm isLogin={false} onSubmit={handleSubmit} />
      <AllreadyAccount isLogin={false}/>
    </ContentBlock>
  );
}

export default RegisterPage;
