import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardComponent from "./CardComponent";
import { getUsers } from "../redux/actions/userAction";

function UserComponent() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error)
//   console.log("users...", users)
  useEffect(() => {
    dispatch(
      getUsers()
    );
  }, []);

  return (
    <>
      {users.loading && <p>Loading...</p>}
      {users.length === 0 && !loading && <p>No user available</p>}
      {error && !loading && <p>{error}</p>}
      {users.length > 0 && users.map((user) => 
        <CardComponent user={user} key={user.id} />
        )}
    </>
  );
}

export default UserComponent;
