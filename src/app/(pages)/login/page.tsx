import React from 'react'
import { Metadata } from 'next'
import { RenderParams } from '../../_components/RenderParams'
import { getMeUser } from '../../_utilities/getMeUser'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import LoginForm from './LoginForm'
import classes from './index.module.scss'
import Image from 'next/image'

export default async function Login() {
  await getMeUser({
    validUserRedirect: `/account?warning=${encodeURIComponent('You are already logged in.')}`,
  })

  return (
    //default login page

    // <Gutter className={classes.login}>
    //   <RenderParams className={classes.params} />
    //   <h1>Log in</h1>
    //   <LoginForm />
    // </Gutter>

    <section className={classes.login}>
      <div className={classes.heroImg}>
      </div>
      <div className={classes.formWrapper}>
        <div className={classes.formContainer}>
          <RenderParams className={classes.params} />

          <div className={classes.formTitle}>
            <h3>Welcome</h3>
            <Image src="/assets/icon/hand.png" alt="hand" width={30} height={30} />
          </div>

          <p>Please login here</p>

          <LoginForm />
        </div>
      </div>
    </section>
  )
}

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login or create an account to get started.',
  openGraph: mergeOpenGraph({
    title: 'Login',
    url: '/login',
  }),
}