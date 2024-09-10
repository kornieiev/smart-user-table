import { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { fetchAllUsers } from "./redux/users/operations.ts";
import { UserTable } from "./components/UserTable/UserTable.tsx";
import { AppDispatch } from "./redux/store.ts";

function App() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <>
      <h1>Smart User Table</h1>
      <UserTable />
    </>
  );
}

export default App;
