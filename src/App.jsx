import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// 1. PUBLIC component (What everyone sees at gochutti.com)
const LandingPage = () => (
  <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'sans-serif' }}>
    <h1>Welcome to Gochutti 🌍</h1>
    <p>Your one-stop destination for Mithila travel and beyond.</p>
    <Link to="/dashboard">
      <button style={{ padding: '10px 20px', cursor: 'pointer', fontSize: '16px' }}>
        View My Bookings
      </button>
    </Link>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<LandingPage />} />

        {/* Protected Route (Authenticator only wraps this part) */}
        <Route path="/dashboard" element={
          <Authenticator>
            {({ signOut, user }) => (
              <main style={{ padding: '20px' }}>
                <h1>Namaste, {user.username}</h1>
                <p>Welcome to your Gochutti travel portal.</p>
                <button onClick={signOut} style={{ backgroundColor: '#ff4d4d', color: 'white', border: 'none', padding: '10px' }}>
                  Sign Out
                </button>
              </main>
            )}
          </Authenticator>
        } />
      </Routes>
    </Router>
  );
}

export default App;