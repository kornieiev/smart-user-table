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
  [selectAllUsers],
  (selectAllUsers) => {
    const filteredData = [
      ...new Set(
        selectAllUsers.map((item) => {
          console.log("item", item);
        })
      ),
    ];
    return filteredData;
  }
);
