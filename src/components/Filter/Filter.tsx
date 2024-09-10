import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../redux/users/slice";
import { AppDispatch } from "../../redux/store";
import { selectFilters } from "../../redux/users/selectors";
import { Clear, FormInput, FormWrapper, Icon } from "./Filter.styled";
import { FiltersType } from "../../types";

type FilterProps = {
  rowName: [keyof FiltersType, string];
};

export const Filter: FC<FilterProps> = ({ rowName }) => {
  const [nameParam, valueParam] = rowName;

  const [showBtn, setShowBtn] = useState<boolean>(false);
  const filters: FiltersType = useSelector(selectFilters);

  useEffect(() => {
    if (filters[nameParam]) {
      setShowBtn(true);
      return;
    }
    setShowBtn(false);
  }, [filters, nameParam]);

  const dispatch: AppDispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilters({ key: nameParam, value: event.target.value }));
  };

  const handleFilterClear = () => {
    dispatch(setFilters({ key: nameParam, value: "" }));
  };

  return (
    <FormWrapper>
      <form>
        {showBtn && (
          <Clear onClick={handleFilterClear}>
            <Icon />
          </Clear>
        )}
        <label htmlFor='nameInput'>{valueParam}:</label>
        <br />
        <FormInput
          type='text'
          id={nameParam}
          name={nameParam}
          value={filters[nameParam]}
          onChange={handleChange}
        />
      </form>
    </FormWrapper>
  );
};
