import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SurahListPage from "./pages/SurahListPage";
import QuranPage from "./components/QuranPage";
import loginWithMockUser from "./utils/login";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const login = async () => {
      // await handleLogout();
      await loginWithMockUser();
      setIsLoggedIn(true);
    };
    login();
  }, []);

  return (
    <Router>
      <div className="App">
        {isLoggedIn ? (
          <Routes>
            <Route exact path="/" element={<SurahListPage />} />
            <Route exact path="/surah/:surahId" element={<QuranPage />} />
          </Routes>
        ) : (
          <p>Loading...</p> // Show a loading message or spinner until logged in
        )}
      </div>
    </Router>
  );
};

export default App;
