import { Store } from "@redux";
import { useSelector } from "react-redux";

const useNavHook = () => {
  const name = useSelector((store: Store) => store.canvas.name);

  return { name };
};

export { useNavHook };
