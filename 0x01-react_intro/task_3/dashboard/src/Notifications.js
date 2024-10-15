// Notifications.js

import React from 'react';
import './Notifications.css'
import closeIcon from "./close-icon.png";
import { getLatestNotification } from "./utils";

function Notifications() {
  const notificationStyles = {
    position: 'relative',
    padding: '10px',
    border: '1px dashed #e1354b',
    width: '100%',
    marginBottom: '20px',
  };

  const closeButtonStyles = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'none',
    border: 'none',
  };

  const handleCloseClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="Notifications" style={notificationStyles}>
      <button
        style={closeButtonStyles}
        aria-label="Close"
        onClick={handleCloseClick}
      >
        <img src={closeIcon} alt="close icon" width="15px" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
    </div>
  );
}

export default Notifications;
