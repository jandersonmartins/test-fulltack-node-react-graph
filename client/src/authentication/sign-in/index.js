import React from 'react'
import { useMutation } from '@apollo/client'
import SignIn from './sign-in'
import { SIGN_IN } from './mutation'
import { isLoggedInVar } from '../../graphql/cache'

const SignInContainer = () => {
  const [signIn, { loading, error }] = useMutation(SIGN_IN, {
    onCompleted: data => {
      localStorage.setItem('token', data.signIn.token)
      isLoggedInVar(true)
    },
    onError: () => {}
  })

  return (
    <SignIn
      onSubmit={data => signIn({ variables: { input: data } })}
      loading={loading}
      error={error && error.message}
    />
  )
}

export default SignInContainer
