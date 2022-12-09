import { Store, drag, search, image, download } from "@redux";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useToolbarHook = () => {
  const dispatch = useDispatch();
  const { figures, images } = useSelector((state: Store) => state.canvas);

  const [searchTitle, setSearchTitle] = useState("");
  const [stage, setStage] = useState();

  useEffect(() => {
    dispatch(search(searchTitle));
  }, [searchTitle]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTitle(e.target.value);
  };

  const handleDragStart = (id: number) => {
    dispatch(drag.start(id));
  };

  const handleClearClick = () => {
    dispatch(image.purge());
  };

  const handleDownloadClick = () => {
    dispatch(download());
  };

  return {
    handleSearch,
    searchTitle,
    figures,
    handleDragStart,
    images,
    handleClearClick,
    handleDownloadClick,
  };
};

export { useToolbarHook };
