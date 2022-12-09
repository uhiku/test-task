import { share, Store } from "@redux";
import { useDispatch, useSelector } from "react-redux";

const useNavHook = () => {
  const dispatch = useDispatch();
  const name = useSelector((store: Store) => store.canvas.name);

  const handleShareClick = () => {
    dispatch(share());
  };

  return { handleShareClick, name };
};

export { useNavHook };
