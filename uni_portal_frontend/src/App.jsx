import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import routes from "./routes";
const App = () => {
  return (
    <MainLayout>
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
    </MainLayout>
  );
};

export default App;
