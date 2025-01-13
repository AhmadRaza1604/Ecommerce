import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Signup from "../pages/SignUp";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import Checkout from "../pages/Checkout";
import Footer from "../components/Footer";

const AppRoutes = () => {


  const MainLayout = ({ children }) => {
    return (
      <>
        <Navbar />
        <div className="mt-20 z-20">{children}</div>
        <Footer/>
      </>
    );
  };
  // Layout to protect routes
  const ProtectedRoute = ({ children }) => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/" element={<MainLayout> <Home /> </MainLayout>} />
          <Route path="/about" element={<MainLayout> <About /> </MainLayout>} />
          
          {/* Protected routes */}
          <Route path="/products" element={<ProtectedRoute><MainLayout> <Products /> </MainLayout></ProtectedRoute>} />
          <Route path="/product-detail/:id" element={<ProtectedRoute><MainLayout> <ProductDetail /> </MainLayout></ProtectedRoute>} />
          <Route path="/checkout" element={<ProtectedRoute><MainLayout> <Checkout /> </MainLayout></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;
