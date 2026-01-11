import React from 'react'
import AppLayout from '../components/layout/AppLayout'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {

    const isAuthenticated = true
    const loading = false

    if (loading) {
        return (
            <div className=''>
                <p>Loading...</p>
            </div>
        )
    }

    return (
        isAuthenticated ? (
            <AppLayout>
                <Outlet />
            </AppLayout>
        ) : (
            <Navigate to="/login" />
        )
    )
}

export default ProtectedRoute