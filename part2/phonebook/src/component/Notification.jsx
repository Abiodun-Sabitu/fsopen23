const Notification = ({ notification }) => {
  if (notification === null) {
    return null;
  }

  return <p className="success_alert">{notification}</p>;
};
export default Notification;
