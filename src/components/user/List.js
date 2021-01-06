import React, { useEffect, useContext } from "react";
import {DataContext} from "./userDataProvider";
import Card from "./Card";

export const List = () => {
  const { users, getAll } = useContext(DataContext);

  useEffect(() => {
    getAll();
  }, []);

  return (
    <>
      <div className="users">
        {users.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};
