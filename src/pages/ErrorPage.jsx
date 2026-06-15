import usePageTitle from '../hooks/usePageTitle';
import React from 'react'
import Error from '../components/Error/Error'

function ErrorPage() {
  usePageTitle("Page Not Found");
  return (
    <>{<Error />}</>
  )
}

export default ErrorPage