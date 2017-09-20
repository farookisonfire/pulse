import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const makeActionButtons = (actions, stage, handleModalConfirm, handleModalClose) => {
    return actions.map((action) => {
      const {
        label = '',
        value = '',
        isPrimary = false,
        isSecondary = false,
      } = action;

      const onTouchHandlerToUse = label === 'Cancel' ? handleModalClose : handleModalConfirm;

      return (
        <FlatButton
          label={label}
          primary={isPrimary}
          secondary={isSecondary}
          onTouchTap={() => onTouchHandlerToUse(stage, value)}
        />
      );
    });
  };

const ConfirmDecision = (props) => {
  const {
    handleModalClose,
    handleModalConfirm,
    modalStatus,
    decision = '',
    selectedName,
    acceptActions = [],
    denyActions = [],
    stage,
  } = props;

  const acceptActionButtons = makeActionButtons(acceptActions, stage, handleModalConfirm, handleModalClose);
  const denyActionButtons = makeActionButtons(denyActions, stage, handleModalConfirm, handleModalClose);

  const modalActions = decision ? acceptActionButtons : denyActionButtons;
  let enrollmentDecision;

  if (decision) {
    console.log('program confirmed modal, decision', decision)
    if (stage === 'secondary') {
      enrollmentDecision = `Select secondary application for ${selectedName}`
    } else if (stage === 'final') {
      enrollmentDecision = `Are you sure you want to ACCEPT ${selectedName}?`
    }
  } else {
    enrollmentDecision = `Are you sure you want to DENY ${selectedName}?`
  }

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
