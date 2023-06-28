import type {FC} from 'react';
import map from 'lodash/map';
import type {ComponentProps} from 'types/components';

const Select: FC<ComponentProps> = ({width, height, label, placeholder, items}) => {
  return (
    <div className="form-control w-full" style={{width, height}}>
      <label htmlFor="select" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <select
        id="select"
        name="select"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500">
        <option selected>{placeholder}</option>
        {map(items, (item: string) => (
          <option value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
