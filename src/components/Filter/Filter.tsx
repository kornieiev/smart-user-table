import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../redux/users/slice";
import { AppDispatch } from "../../redux/store";
import { selectFilters } from "../../redux/users/selectors";
import { FiltersType } from "../../types";
import { CloseBtn, FormInput, FormWrapper } from "./Filter.styled";

type FilterProps = {
  rowName: string[];
};

export const Filter: FC<FilterProps> = ({ rowName }) => {
  const [nameParam, valueParam] = rowName;

  const [showBtn, setShowBtn] = useState<boolean>(false);
  const filters: FiltersType = useSelector(selectFilters);

  useEffect(() => {
    filters[nameParam] ? setShowBtn(true) : setShowBtn(false);
  }, [filters, nameParam]);

  const dispatch: AppDispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const data = {
      key: nameParam,
      value: event.target.value,
    };
    dispatch(setFilters(data));
  };

  const handleFilterClear = () => {
    const data = {
      key: nameParam,
      value: "",
    };
    dispatch(setFilters(data));
  };

  return (
    <FormWrapper>
      <form>
        {showBtn && <CloseBtn onClick={handleFilterClear} />}
        <label htmlFor='nameInput'>{valueParam}:</label>
        <br />
        <FormInput
          type='text'
          id={nameParam}
          name={nameParam}
          value={filters[nameParam]} // Управляемое значение
          onChange={handleChange} // Обработчик изменения
        />
      </form>
    </FormWrapper>
  );
};
