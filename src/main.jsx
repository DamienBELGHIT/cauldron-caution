import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Presskit from "./pages/Presskit"
import NoPage from "./pages/NoPage"
import Layout from "./components/Layout"
import ScrollToTop from "./components/ScrollToTop"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/presskit" element={<Presskit />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
)
