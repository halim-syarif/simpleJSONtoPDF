import { useRef, useState } from "react";
import jsPDF from "jspdf";
import ReportTemplate from "./ReportTemplate";
import "./styles.css";
import { JsonEditor as Editor } from "jsoneditor-react";
import "jsoneditor-react/es/editor.min.css";

function App() {
  const reportTemplateRef = useRef(null);
  const [data, setData] = useState({
    invoiceDate: "2022-06-01",
    dueDate: "2022-06-30",
    invNumber: "INV-000123",
    item: [
      {
        name: "Item 1",
        quantity: 1,
        price: 100,
        total: 100,
      },
      {
        name: "Item 2",
        quantity: 1,
        price: 200,
        total: 200,
      },
      {
        name: "Item 3",
        quantity: 1,
        price: 300,
        total: 300,
      },
    ],
    totalAmount: 600,
  });

  const handleGeneratePdf = () => {
    const doc = new jsPDF({
      format: "a4",
      unit: "px",
    });

    // Adding the fonts.
    doc.setFont("Inter-Regular", "normal");

    doc.html(reportTemplateRef.current, {
      async callback(doc) {
        const blobPDF = doc.output("bloburl");
        window.open(blobPDF, "_system", "location=yes");
      },
    });
  };

  return (
    <div>
      <h1 className="centered">AVICENNA AL FALAH</h1>
      <div class="container">
        <div class="column">
          <Editor value={data} onChange={(val) => setData(val)} />
        </div>
        <div class="column">
          <div ref={reportTemplateRef} className="invoice">
            <ReportTemplate data={data} />
          </div>
        </div>
      </div>
      <div className="centered">
        <button className="button" onClick={handleGeneratePdf}>
          Generate PDF
        </button>
      </div>
    </div>
  );
}

export default App;
