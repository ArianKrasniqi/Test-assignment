import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import Modal from "components/Modal/Modal.component";
import Backdrop from "components/Backdrop/Backdrop.component";
import Form from "../Form/Form";

import { ADD_COMPANY, GET_COMPANIES } from "../../../Page.queries";
import { useMutation } from "@apollo/client";

const AddCompany = ({ history }) => {
  const [allowSubmit, setAllowSubmit] = useState(true);
  const [inputs, setInputs] = useState({
    company: "",
    stage: "Idea",
    sector: "Fintech",
    amount: 0,
  });

  const [addCompanyFunction, { data: addedData, loading, error }] =
    useMutation(ADD_COMPANY);

  // useEffect(() => {
  //   We can send added data in redux and rerender to show in list
  //   console.log('addedData', addedData)
  // }, [addedData])

  const handleSubmit = () => {
    let data = inputs;
    data.name = inputs.company;
    data.investmentSize = parseInt(inputs.amount || 0);
    delete data.company;
    delete data.amount;
    addCompanyFunction({
      variables: { ...data },
      update: (cache) => {
        const existingCompanies = cache.readQuery({ query: GET_COMPANIES });
        const newCompanies = [...existingCompanies.companies]
        newCompanies.push({...data, id: new Date().getUTCMilliseconds()});
        cache.writeQuery({
          query: GET_COMPANIES,
          data: { companies: newCompanies },
        });
      },
    });
    history.push('/')
  };

  useEffect(() => {
    let filled = true;
    for (const property in inputs) {
      if (!inputs[property]) filled = false;
    }
    setAllowSubmit(filled);
  }, [inputs]);

  const handleClose = () => {
    history.push("/");
  };
  const modalClicked = (e) => {
    e.stopPropagation();
  };

  const handleInputChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Backdrop show={true} clicked={handleClose}>
      <Modal show={true} clicked={(e) => modalClicked(e)}>
        <Form
          handleInputChange={(e) => handleInputChange(e)}
          inputs={inputs}
          allowSubmit={allowSubmit}
          handleSubmit={handleSubmit}
        />
      </Modal>
    </Backdrop>
  );
};

export default withRouter(AddCompany);
