import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { Api } from "../../api/api.ts";
import { UserType } from "../../api/types.ts";
import { UserCard } from "../user-card";
import styles from "./styles.module.css";
import { TextField } from "@mui/material";
import { useDebounce } from "../../hooks/useDebounce.ts";
import { Skeletons } from "../skeletons";
import Typography from "@mui/material/Typography";

export const UsersList = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const debouncedValue = useDebounce(searchValue);

  const onChangeSearchValueHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  }, []);

  const filteredList = useMemo(() => {
    return users.filter((user) =>
      user.name.firstname.toLowerCase().includes(debouncedValue.toLowerCase()) ||
      user.name.lastname.toLowerCase().includes(debouncedValue.toLowerCase()) ||
      user.email.toLowerCase().includes(debouncedValue.toLowerCase()) ||
      user.phone.toLowerCase().includes(debouncedValue.toLowerCase()));
  }, [debouncedValue, users]);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const data = await Api.getCertainAmountOfUsers(9);
        setUsers(data);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className={styles.container}>
      <Typography fontSize={"24px"}>Users list</Typography>
      <TextField label={"Search"} value={searchValue} onChange={onChangeSearchValueHandler} />
      <div className={styles.list}>
        {isLoading
          ? <Skeletons count={9} width={322} height={200} />
          : filteredList.length > 0
            ? filteredList.map((user) => <UserCard key={user.id} user={user} />)
            : <Typography fontSize={"24px"}>No data</Typography>}
      </div>
    </div>
  );
};