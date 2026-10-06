import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import MainLayout from "./layout/MainLayout"
import SignIn from "./pages/Common/SignIn"
import Landing from "./pages/Common/Landing"

import UserDashboard from "./pages/User/UserDashboard"
import UserTasks from "./pages/User/UserTasks"
import UserTeam from "./pages/User/UserTeam"
import UserAnalytics from "./pages/User/UserAnalytics"

import AdminDashboard from "./pages/Admin/AdminDashboard"
import AdminTasks from "./pages/Admin/AdminTasks"
import AdminTeam from "./pages/Admin/AdminTeam"
import AdminAnalytics from "./pages/Admin/AdminAnalytics"

import ProtectedRoute from "./components/common/ProtectedRoutes"

function App() {
  return (
    <BrowserRouter>
      <Routes>

{/* Public */}
        {/* <Route path="/" element={<Landing />} /> */}
        <Route path="/" element={<Navigate to="/signin" replace />} />
        <Route path="/signin" element={<SignIn />} />

{/* Common Layout */}
        <Route
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >

{/* Admin */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute role="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/tasks"
            element={
              <ProtectedRoute role="admin">
                <AdminTasks />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/team"
            element={
              <ProtectedRoute role="admin">
                <AdminTeam />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/analytics"
            element={
              <ProtectedRoute role="admin">
                <AdminAnalytics />
              </ProtectedRoute>
            }
          />

{/* User */}
          <Route
            path="/user/dashboard"
            element={
              <ProtectedRoute role="user">
                <UserDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user/tasks"
            element={
              <ProtectedRoute role="user">
                <UserTasks />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user/team"
            element={
              <ProtectedRoute role="user">
                <UserTeam />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user/analytics"
            element={
              <ProtectedRoute role="user">
                <UserAnalytics />
              </ProtectedRoute>
            }
          />



        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App