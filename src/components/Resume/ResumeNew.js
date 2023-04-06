import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/../Assets/siddhant_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import './resumeButton.scss';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <div id="container">
          <a href='https://drive.google.com/file/d/1fE-ok62ioE5rZ5cIYyIz-lhS-K3wXtdt/view?usp=sharing' target="blank" >
            <button class="learn-more"
              target="_blank">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">Download CV</span>
            </button>
          </a>
        </div>
      </Container>
    </div>
    
  );
}

export default ResumeNew;

{/* <div>
  <Container fluid className="resume-section">
    <Row style={{ justifyContent: "center", position: "relative" }}>
      <Button
        variant="primary"
        href={pdf}
        target="_blank"
        style={{ maxWidth: "180px" }}
      >
        <AiOutlineDownload />
        &nbsp;Download CV
      </Button>
    </Row>
  </Container>
</div> */}
