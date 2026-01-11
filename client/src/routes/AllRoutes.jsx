import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from '../pages/Auth/LoginPage'
import RegisterPage from '../pages/Auth/RegisterPage'
import PageNotFound from '../pages/PageNotFound'
import ProtectedRoute from './ProtectedRoute'
import DashboardPage from '../pages/Dashboard/DashboardPage'
import DocumentListPage from '../pages/Documents/DocumentListPage'
import DocumentDetailPage from '../pages/Documents/DocumentDetailPage'
import FlashcardsListPage from '../pages/Flashcards/FlashcardsListPage'
import FlashcardPage from '../pages/Flashcards/FlashcardPage'
import QuizTakePage from '../pages/Quizzes/QuizTakePage'
import QuizResultPage from '../pages/Quizzes/QuizResultPage'
import ProfilePage from '../pages/Profile/ProfilePage'

const AllRoutes = () => {

  const isAuthenticated = true

  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<ProtectedRoute/>}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/documents" element={<DocumentListPage />} />
            <Route path="/documents/:id" element={<DocumentDetailPage />} />
            <Route path="/flashcards" element={<FlashcardsListPage />} />
            <Route path="/documents/:id/flashcards" element={<FlashcardPage />} />
            <Route path="/quizzes/:quizId" element={<QuizTakePage />} />
            <Route path="/quizzes/:quizId/results" element={<QuizResultPage />} />
            <Route path="/profile" element={<ProfilePage />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}

export default AllRoutes