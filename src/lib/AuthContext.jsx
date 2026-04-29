import React, { createContext, useState, useContext, useEffect } from 'react'
import axios from 'axios'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoadingAuth, setIsLoadingAuth] = useState(false)
  const [authError, setAuthError] = useState(null)

  useEffect(() => {
    checkUserAuth()
  }, [])

  const api = axios.create({
    baseURL: '/api', // 👉 поменяй если есть свой backend
  })

  const checkUserAuth = async () => {
    try {
      setIsLoadingAuth(true)

      // 👉 если нет backend — просто заглушка
      const fakeUser = {
        id: 1,
        name: 'Guest'
      }

      setUser(fakeUser)
      setIsAuthenticated(true)
    } catch (error) {
      console.error('Auth error:', error)
      setIsAuthenticated(false)
      setAuthError(error.message)
    } finally {
      setIsLoadingAuth(false)
    }
  }

  const login = async () => {
    try {
      setIsLoadingAuth(true)

      // 👉 здесь потом можно сделать реальный API запрос
      const fakeUser = {
        id: 1,
        name: 'User'
      }

      setUser(fakeUser)
      setIsAuthenticated(true)
    } catch (error) {
      setAuthError(error.message)
    } finally {
      setIsLoadingAuth(false)
    }
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoadingAuth,
        authError,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}