import { UserType } from "../../api/types.ts";
import UserAvatar from "../../assets/img/user.png";
import styles from "./styles.module.css";
import Typography from "@mui/material/Typography";

type UserCardPropsType = {
  user: UserType
}

export const UserCard = ({ user }: UserCardPropsType) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={UserAvatar} alt={"user avatar"} />
      <div className={styles.info}>
        <Typography fontWeight={"bold"}>Name: {user.name.firstname} {user.name.lastname}</Typography>
        <Typography>Email: {user.email}</Typography>
        <Typography>Phone: {user.phone}</Typography>
      </div>
    </div>
  );
};