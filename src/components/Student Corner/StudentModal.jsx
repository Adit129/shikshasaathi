import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

const StudentModal = ({ studentDetails, closeModal }) => {
  return (
    <Modal isOpen={true}>
      <ModalHeader toggle={closeModal}>Student Details</ModalHeader>
      <ModalBody>
        <p>ID:{parseInt(studentDetails._id.slice(-5), 16)}</p>
        <p>Name: {studentDetails.name}</p>
        <p>Guardian: {studentDetails.guardian}</p>
        <p>Course: {studentDetails.course}</p>
        <p>Mobile: {studentDetails.mobile1}</p>
        {/* Add more details as needed */}
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={closeModal}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default StudentModal;
