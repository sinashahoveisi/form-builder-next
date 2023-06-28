import {FC, ReactNode} from 'react';
import ReactQuery from './ReactQuery';

interface Props {
  children: ReactNode;
}

const MainConfig: FC<Props> = ({children}) => {
  return (
      <ReactQuery>{children}</ReactQuery>
  );
};

export default MainConfig;
