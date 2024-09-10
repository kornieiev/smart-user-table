import { useSelector } from "react-redux";
import { MainTable, Th, Td, Tr } from "./UserTable.styled.ts";
import { selectMakersArr } from "../../redux/users/selectors.ts";
import { FiltersType, rowNamesTypes, UserType } from "../../types.ts";
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
            {Object.entries(rowNames).map(([key, value]) => {
              return (
                <Th key={key}>
                  <Filter rowName={[key as keyof FiltersType, value]} />
                </Th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(({ id, name, username, email, phone }) => {
            return (
              <Tr key={id}>
                <Td>{name}</Td>
                <Td>{username}</Td>
                <Td>{email}</Td>
                <Td>{phone}</Td>
              </Tr>
            );
          })}
        </tbody>
      </MainTable>
    </>
  );
};
