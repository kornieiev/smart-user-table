import { useSelector } from "react-redux";
import { MainTable, Th, Td } from "./UserTable.styled.ts";
import { selectMakersArr } from "../../redux/users/selectors.ts";
import { rowNamesTypes, UserType } from "../../types.ts";
import { Filter } from "../Filter/Filter.tsx";

export const UserTable = () => {
  const filteredUsers: UserType[] = useSelector(selectMakersArr);

  const rowNames: rowNamesTypes = {
    name: "Name",
    username: "User name",
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
          {filteredUsers.map(({ id, name, username, email, phone }) => {
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
