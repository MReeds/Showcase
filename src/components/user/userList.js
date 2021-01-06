import React, { useEffect, useContext } from "react";
import DataContext from "../user/userDataProvider";

export const UserList = () => {
  const { users, getAll } = useContext(DataContext);

  useEffect(() => {
    getAll();
  }, []);

  return (
    <>
      <div classname="users">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </>
  );
};
