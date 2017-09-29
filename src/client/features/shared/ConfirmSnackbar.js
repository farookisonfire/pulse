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
    outcome = `Advanced to Secondary!`;
  } else if (decision && stage === 'final') {
    outcome = `Accepted!`;
  } else if (!decision) {
    outcome = 'Denied!';
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
