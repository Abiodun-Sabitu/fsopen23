const Notification = ({ notification, newName }) => {
  //console.log(newName);
  console.log("newName in Notification:", newName);
  if (notification.contactAdded) {
    return <p className="success_alert">{`Added ${newName}`}</p>;
  } else if (notification.numberUpdated) {
    return (
      <p className="success_alert">{`${newName}'s phone number updated`}</p>
    );
  } else if (notification.contactDeleted) {
    return <p className="success_alert">{`${newName} deleted`}</p>;
  }
  return null;
};

export default Notification;
