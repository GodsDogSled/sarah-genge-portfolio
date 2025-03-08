import { useState, useEffect } from 'react'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import supabase from '../../supabase-client'
import { setSession } from '../features/auth/authSlice'
import { useDispatch } from 'react-redux'
import AdminPanel from './AdminPanel'

function Login() {
  const [sessionState, setSessionState] = useState(null)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   supabase.auth.getSession().then(({ data: { session } }) => {
  //     setSessionState(session)
  //     dispatch(setSession(sessionState))
  //   })

  //   const {
  //     data: { subscription },
  //   } = supabase.auth.onAuthStateChange((_event, session) => {
  //     setSessionState(session)
  //     dispatch(setSession(session));
  //   })

  //   return () => subscription.unsubscribe()
  // }, [dispatch])

  if (!sessionState) {
    return (<Auth providers={['google']} supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />)
  }
  else {
    return (<AdminPanel />)
  }
}

export default Login