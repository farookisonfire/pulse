import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const ConfirmDecision = ({handleModalClose, handleModalConfirm, modalStatus, decision, selectedName}) => {
  let enrollmentDecision;
  decision === 'accepted' ? enrollmentDecision = "ACCEPT" : enrollmentDecision = "DENY"
  
  const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={handleModalClose}
      />,
      <FlatButton
        label="Confirm"
        primary={true}
        keyboardFocused={true}
        onTouchTap={handleModalConfirm}
      />,
    ];

    return (
      <div>
        <Dialog
          title="Confirm"
          actions={actions}
          modal={true}
          open={modalStatus}
          >
          {`Are you sure you want to ${enrollmentDecision} ${selectedName}`}
        </Dialog>
      </div>
    );
};

export default ConfirmDecision;
