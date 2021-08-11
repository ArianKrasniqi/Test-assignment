import React from "react";
import { withRouter } from "react-router";
import Modal from "components/Modal/Modal.component";
import Backdrop from "components/Backdrop/Backdrop.component";

const AddCompany = ({ history }) => {
  const handleClose = () => {
    history.push("/");
  };
  const modalClicked = (e) => {
    e.stopPropagation();
  };
  return (
    <Backdrop show={true} clicked={handleClose}>
      <Modal show={true} clicked={(e) => modalClicked}>
        <h2>ADD NEW COMPANY</h2>
      </Modal>
    </Backdrop>
  );
};

export default withRouter(AddCompany);
