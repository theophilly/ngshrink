import React from 'react';
import { store } from 'react-notifications-component';

function SearhSection({ addShrinkData, currentSet }) {
  let dat;
  const shrink = async () => {
    let regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

    if (!regexp.test(username.current.value)) {
      store.addNotification({
        title: 'Alert!',
        message: 'This is not a valid Url',
        type: 'danger',
        insert: 'top',
        container: 'top-center',
        animationIn: ['animate__animated', 'animate__fadeIn'],
        animationOut: ['animate__animated', 'animate__fadeOut'],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });
      return;
    }

    await fetch(`/api/?url=${username.current.value}`)
      .then((res) => res.json())
      .then((res) => (dat = res))
      .catch((err) => console.log(err.message));

    let iterator = Object.keys(currentSet).length + 1;

    addShrinkData([...currentSet, { ...dat, val: iterator }]);

    console.log(currentSet);
  };
  let username = React.createRef();
  return (
    <div className="searchContainer">
      <i style={{ color: 'tomato' }} className="fas fa-link"></i>
      <input ref={username} placeholder="Paste a long Url"></input>
      <button
        onClick={(e) => {
          e.preventDefault();
          shrink();
        }}
      >
        <span>Shrink</span> <i className="fas fa-share-square"></i>
      </button>
    </div>
  );
}

export default SearhSection;
