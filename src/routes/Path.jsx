import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import RouteGuard from "./RouteGuard";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Contacts from "../pages/Contacts";
import CreateContact from "../pages/CreateContact";
import EditContact from "../pages/EditContact";

const Path = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <RouteGuard>
              <Home />
            </RouteGuard>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="create" element={<CreateContact />} />
          <Route path="edit" element={<EditContact />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Path;
