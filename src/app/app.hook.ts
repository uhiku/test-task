import { startup } from "@redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useAppHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startup());
  }, []);
};

export { useAppHook };
