import { CartProvider } from "./context/CartContext";
import { CompareProvider } from "./context/CompareContext";
import { WishlistProvider } from "./context/WishlistContext";
import { UserProvider } from "./context/UserContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import MainLayout from './components/Common/MainLayout';
import ScrollToTop from './components/Common/ScrollToTop';
import ReloadPrompt from './components/PWA/ReloadPrompt';
import HomePage from './pages/HomePage';
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";
import ComparePage from "./pages/ComparePage";
import ProductPage from "./pages/ProductPage";
import ProductListPage from "./pages/ProductListPage";
import CollectionListPage from "./pages/CollectionListPage";
import BlogPage from "./pages/BlogPage";
import ArticlePage from "./pages/ArticlePage";
import CheckoutPage from "./pages/CheckoutPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import FaqPage from "./pages/FaqPage";
import PrivacyPage from "./pages/PrivacyPage";
import ShippingPage from "./pages/ShippingPage";
import TermsPage from "./pages/TermsPage";
import AddressPage from "./pages/AuthPages/AddressPage";
import AccountPage from "./pages/AuthPages/AccountPage";
import LoginPage from "./pages/AuthPages/LoginPage";
import RegisterPage from "./pages/AuthPages/RegisterPage";
import ForgotPasswordPage from "./pages/AuthPages/ForgotPasswordPage";
import OrderPage from "./pages/AuthPages/OrderPage";
import OfflinePage from "./pages/OfflinePage";
import RequireAuth from './components/Auth/RequireAuth';

function App() {
  return (
    <CartProvider>
      <CompareProvider>
        <WishlistProvider>
          <UserProvider>
            <Router basename={import.meta.env.BASE_URL}>
              <ScrollToTop />
              <Routes>
                {/* Main Layout Routes */}
                <Route element={<MainLayout />}>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/wishlist" element={<WishlistPage />} />
                  <Route path="/compare" element={<ComparePage />} />
                  <Route path="/products/:slug" element={<ProductPage />} />
                  <Route path="/products" element={<ProductListPage />} />
                  <Route path="/collections" element={<CollectionListPage />} />
                  <Route path="/blogs" element={<BlogPage />} />
                  <Route path="/blogs/:slug" element={<ArticlePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/faq" element={<FaqPage />} />
                  <Route path="/privacy-policy" element={<PrivacyPage />} />
                  <Route path="/shipping-return" element={<ShippingPage />} />
                  <Route path="/terms-condition" element={<TermsPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/forgot-password" element={<ForgotPasswordPage />} />

                  {/* Protected Routes */}
                  <Route path="/checkout" element={<RequireAuth><CheckoutPage /></RequireAuth>} />
                  <Route path="/address" element={<RequireAuth><AddressPage /></RequireAuth>} />
                  <Route path="/account" element={<RequireAuth><AccountPage /></RequireAuth>} />
                  <Route path="/order" element={<RequireAuth><OrderPage /></RequireAuth>} />
                </Route>

                {/* Standalone Pages (no layout) */}
                <Route path="/offline" element={<OfflinePage />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
              <ReloadPrompt />
            </Router>
          </UserProvider>
        </WishlistProvider>
      </CompareProvider>
    </CartProvider>
  );
}

export default App;
