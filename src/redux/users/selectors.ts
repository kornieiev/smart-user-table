import { createSelector } from "reselect";
import { UserType, FiltersType } from "../../types";
import { RootState } from "../store";

export const selectAllUsers = (state: RootState): UserType[] =>
  state.users.allUsers;

export const selectLoading = (state: RootState): boolean =>
  state.users.isLoading;

export const selectError = (state: RootState): unknown | string =>
  state.users.error;

export const selectFilters = (state: RootState): FiltersType =>
  state.users.filters;

export const selectMakersArr = createSelector(
  [selectAllUsers, selectFilters],
  (allUsers, filters) => {
    const filteredData = allUsers.filter((item) => {
      return (
        item.name
          .toLocaleLowerCase()
          .includes(filters.name.toLocaleLowerCase()) &&
        item.username
          .toLocaleLowerCase()
          .includes(filters.username.toLocaleLowerCase()) &&
        item.email
          .toLocaleLowerCase()
          .includes(filters.email.toLocaleLowerCase()) &&
        item.phone
          .toLocaleLowerCase()
          .includes(filters.phone.toLocaleLowerCase())
      );
    });

    return filteredData;
  }
);
