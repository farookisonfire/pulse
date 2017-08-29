import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const ConfirmDecision = (props) => {
  const {
    handleModalClose,
    handleModalConfirm,
    modalStatus,
    decision = '',
    selectedName,
  } = props;
  
  const acceptActions = [
      <FlatButton
        label="Cancel"
        onTouchTap={handleModalClose}
      />,
      <FlatButton
        label="Health"
        primary={true}
        onTouchTap={() => handleModalConfirm('Health')}
      />,
      <FlatButton
        label="Education"
        primary={true}
        onTouchTap={() => handleModalConfirm('Education')}
      />,
      <FlatButton
        label="Impact"
        primary={true}
        onTouchTap={() => handleModalConfirm('Impact')}
      />,
    ];

    const denyActions = [
      <FlatButton
        label="Cancel"
        onTouchTap={handleModalClose}
      />,
      <FlatButton
        label="Confirm"
        secondary={true}
        onTouchTap={() => handleModalConfirm()}
      />,
    ];

  const modalActions = decision ? acceptActions : denyActions;
  const enrollmentDecision = decision ? 
    `Select secondary application for ${selectedName}` : 
    `DENY ${selectedName}?`;

    return (
      <div>
        <Dialog
          title="Confirm Decision"
          actions={modalActions}
          modal={true}
          open={modalStatus}>
          {enrollmentDecision}
        </Dialog>
      </div>
    );
};

export default ConfirmDecision;
