import { BrowserRouter, Routes, Route } from "react-router-dom"

import MainLayout from "./layout/MainLayout"
import SignIn from "./pages/Common/SignIn"

import UserDashboard from "./pages/User/UserDashboard"
import AdminDashboard from "./pages/Admin/AdminDashboard"

import ProtectedRoute from "./components/ProtectedRoutes"

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public */}
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

          {/* User */}
          <Route
            path="/user/dashboard"
            element={
              <ProtectedRoute role="user">
                <UserDashboard />
              </ProtectedRoute>
            }
          />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App