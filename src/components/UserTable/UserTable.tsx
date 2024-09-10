import { useSelector } from "react-redux";
import { MainTable, Th, Td } from "./UserTable.styled.ts";
import { selectAllUsers } from "../../redux/users/selectors.ts";
import { UserType } from "../../types.ts";
import { Filter } from "../Filter/Filter.tsx";

export const UserTable = () => {
  const users: UserType[] = useSelector(selectAllUsers);

  interface rowNamesTypes {
    name: string;
    userName: string;
    email: string;
    phone: string;
  }

  const rowNames: rowNamesTypes = {
    name: "Name",
    userName: "User name",
    email: "Email",
    phone: "Phone",
  };

  return (
    <>
      <MainTable>
        <thead>
          <tr>
            {Object.entries(rowNames).map((key) => {
              return (
                <Th key={key[0]}>
                  <Filter rowName={key} />
                </Th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {users.map(({ id, name, username, email, phone }) => {
            return (
              <tr key={id}>
                <Td>{name}</Td>
                <Td>{username}</Td>
                <Td>{email}</Td>
                <Td>{phone}</Td>
              </tr>
            );
          })}
        </tbody>
      </MainTable>
    </>
  );
};
