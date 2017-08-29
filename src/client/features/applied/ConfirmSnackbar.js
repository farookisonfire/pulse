import React from 'react';
import Snackbar from 'material-ui/Snackbar';

const ConfirmSnackbar = ({snackbarStatus, handleSnackbarClose, decision, selectedName}) => {
  const outcome = decision ? 
    `${selectedName} was advanced to Secondary.` :
    `${selectedName} was denied.`;
  
  return (
    <Snackbar 
      open={snackbarStatus}
      message={outcome}
      autoHideDuration={4000}
      onRequestClose={handleSnackbarClose}/>
  );
};

export default ConfirmSnackbar;