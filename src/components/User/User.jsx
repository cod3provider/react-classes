import PropTypes from 'prop-types';
import { EmailText, NameText, SpanText } from './User.styled';

export const User = ({ user: { name, email } }) => {
  const isEmailBiz = email.endsWith('biz');


  return (
    <>
      <NameText>Name:
           <SpanText>
              {name}
            </SpanText>
      </NameText>

      <EmailText>Email:
        <SpanText isRed={isEmailBiz}> {email}</SpanText>
      </EmailText>
    </>
  )
}


User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired
};
