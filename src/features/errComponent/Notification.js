import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useSnackbar } from "notistack";

function Notifications() {
  const { notification } = useSelector((state) => state.notes);
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    for (let key in notification) {
      notification && enqueueSnackbar(notification[key], { variant: key });
    }
  }, [notification]);
  return <></>;
}

export default Notifications;
