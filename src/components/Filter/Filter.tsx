import { FC } from "react";
import { useDispatch } from "react-redux";
import { setFilters } from "../../redux/users/slice";
import { AppDispatch } from "../../redux/store";

type FilterProps = {
  rowName: string[];
};

export const Filter: FC<FilterProps> = ({ rowName }) => {
  const dispatch: AppDispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const data = {
      key: rowName[0],
      value: event.target.value,
    };
    dispatch(setFilters(data));
  };

  return (
    <>
      <form>
        <label htmlFor='nameInput'>{rowName[1]}</label>
        <input
          type='text'
          id={rowName[0]}
          name={rowName[0]}
          // value={inputValue} // Управляемое значение
          onChange={handleChange} // Обработчик изменения
        />
      </form>
    </>
  );
};
