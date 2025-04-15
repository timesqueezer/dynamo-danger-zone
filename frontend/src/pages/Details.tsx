import { useParams } from "react-router";

export const Details = () => {
  let { id } = useParams();

  return <>{id}</>;
};
