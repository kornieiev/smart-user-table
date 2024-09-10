import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "./redux/users/operations.ts";
import { UserTable } from "./components/UserTable/UserTable.tsx";
import { AppDispatch } from "./redux/store.ts";
import { DNA } from "react-loader-spinner";
import { selectAllUsers, selectLoading } from "./redux/users/selectors.ts";
import { MainText } from "./App.styled.ts";

function App() {
  const dispatch: AppDispatch = useDispatch();
  const data = useSelector(selectAllUsers);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <>
      {isLoading && (
        <DNA
          visible={true}
          height='80'
          width='80'
          ariaLabel='dna-loading'
          wrapperStyle={{}}
          wrapperClass='dna-wrapper'
        />
      )}

      <MainText>Smart User Table</MainText>
      {data?.length > 0 ? <UserTable /> : <p>Error! Data not available!</p>}
    </>
  );
}

export default App;
