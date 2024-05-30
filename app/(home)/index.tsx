import React from 'react'
import ScreenWrapper from '~/HOCs/ScreenWrapper'
import { Redirect } from 'expo-router'

const RootRoute = () => {
  return (
      <Redirect href={"/movies"}/>
  )
}

export default ScreenWrapper(RootRoute)