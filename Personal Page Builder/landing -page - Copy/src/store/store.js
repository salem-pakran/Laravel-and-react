import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import navbarThemeSlice from "./navbarThemeSlice";
import headerThemeSlice1 from "./headerThemeSlice1";
import projectsSlice from "./projectsSlice";
import servicesSlice from "./servicesSlice";
import expSlice from "./expSlice";
import projectInMindSlice from "./projectInMindSlice";

const store = configureStore({
  reducer: {
    users: userSlice,
    navbarTheme: navbarThemeSlice,
    headerTheme: headerThemeSlice1,
    projects: projectsSlice,
    services: servicesSlice,
    exp: expSlice,
    projectMind: projectInMindSlice,
  },
});

export default store;
