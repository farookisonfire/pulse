import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';

const makeActionButtons = (actions, stage, handleModalConfirm, handleModalClose) => {
    return actions.map((action) => {
      const {
        label = '',
        value = '',
        isPrimary = false,
        isSecondary = false,
        program = '',
      } = action;

      const onTouchHandlerToUse = label === 'Cancel' ? handleModalClose : handleModalConfirm;

      return (
        <FlatButton
          label={label}
          primary={isPrimary}
          secondary={isSecondary}
          onTouchTap={() => onTouchHandlerToUse(stage, value, program)}
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
    selectedApplicants = [],
    acceptActions = [],
    denyActions = [],
    stage,
  } = props;

  const acceptActionButtons = makeActionButtons(acceptActions, stage, handleModalConfirm, handleModalClose);
  const denyActionButtons = makeActionButtons(denyActions, stage, handleModalConfirm, handleModalClose);

  const modalActions = decision ? acceptActionButtons : denyActionButtons;
  let enrollmentDecision;

  if (decision) {
    if (stage === 'secondary') {
      enrollmentDecision = `Confirm SECONDARY For:`;
    } else if (stage === 'final') {
      enrollmentDecision = `Confirm ACCEPTANCE For:`;
    }
  } else {
    enrollmentDecision = `Confirm REJECTION For`;
  }

  const selectedList = selectedApplicants.map((applicant, idx) => {
    return (
      <ListItem
        disabled
        innerDivStyle={{padding: '8px 16px'}}
        key={`confirm-modal-${applicant.id}`}
        primaryText={`· ${applicant.name}`}/>
    );
  });

  return (
    <div>
      <Dialog
        title={enrollmentDecision}
        actions={modalActions}
        modal={true}
        open={modalStatus}>
        <List>
          {selectedList}
        </List>
      </Dialog>
    </div>
  );
};

export default ConfirmDecision;
