import { useContext } from "react";
import { DataContext } from "../../context/dataContext";
import { Menu } from "../../components/Menu";
import { PageTitle } from "../../components/PageTitle";
import { UserType } from "../../types";

import "./style.scss";

export const About: React.FC = () => {
  const { users } = useContext<any>(DataContext);

  return (
    <>
      <Menu />
      <PageTitle text="About" />
      <ul>
        {users.map((item: UserType) => (
          <li key={item.id}>
            <p>{item.name}</p>
            <p>{item.email}</p>
            <br />
          </li>
        ))}
      </ul>
    </>
  );
};
