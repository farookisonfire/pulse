import React from 'react';
import Snackbar from 'material-ui/Snackbar';

const ConfirmSnackbar = (props) => {
  const {
    snackbarStatus,
    handleSnackbarClose = () => {},
    decision = '',
    selectedName = '',
    stage = '',
  } = props;

  let outcome;
  if (decision && stage === 'secondary') {
    outcome = `${selectedName} was advanced.`;
  } else if (decision && stage === 'final') {
    outcome = `${selectedName} was accepted`
  } else if (!decision) {
    `${selectedName} was denied`;
  }
  
  return (
    <Snackbar 
      open={snackbarStatus}
      message={outcome}
      autoHideDuration={4000}
      onRequestClose={handleSnackbarClose}/>
  );
};

export default ConfirmSnackbar;
