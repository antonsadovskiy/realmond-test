import Skeleton from "@mui/material/Skeleton";
import styles from "./styles.module.css";

type SkeletonsPropsType = {
  count: number;
  width: number;
  height?: number;
}

export const Skeletons = ({ count, height, width }: SkeletonsPropsType) => {
  return (
    <div className={styles.list}>
      {[...Array(count)].map((_, index) => (
        <Skeleton animation={"wave"} key={index} variant="rounded" width={width} height={height} />
      ))}
    </div>
  );
};