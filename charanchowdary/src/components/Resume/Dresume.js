import React, { useState, useEffect } from "react";
import { Container, Row, Button, Modal } from "react-bootstrap";
import { AiOutlineDownload, AiOutlineEye } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from "../../Images/Sai charan  Resume.pdf";
import './Dresume.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Dresume() {
  const [width, setWidth] = useState(1200);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const handlePreview = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <button
          className="preview-button"
          onClick={handlePreview}
        >
          <AiOutlineEye size={24} />
          <span> Preview</span>
        </button>

        <Modal show={showModal} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>CV Preview</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Document file={pdf} className="d-flex justify-content-center">
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
}

export default Dresume;
