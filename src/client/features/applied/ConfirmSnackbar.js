import React from 'react';
import Snackbar from 'material-ui/Snackbar';

const ConfirmSnackbar = ({snackbarStatus, handleSnackbarClose, decision, selectedName}) => {
  return (
    <Snackbar 
      open={snackbarStatus}
      message={`${selectedName} was ${decision}.`}
      autoHideDuration={4000}
      onRequestClose={handleSnackbarClose}/>
  );
};

export default ConfirmSnackbar;