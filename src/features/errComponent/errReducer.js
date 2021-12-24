const data = {
  notification: null,
};

export default function notificationsReducer(state = data, action) {
  const temp = { ...state };
  switch (action.type) {
    case "setNotes":
      temp.notification = action.data;
      setTimeout(() => {
        temp.notification = null;
        return temp;
      });
      setTimeout(() => {
        window.location.reload();
      }, 700);
      return temp;
  }
  return temp;
}
