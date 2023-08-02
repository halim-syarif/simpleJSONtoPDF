const ReportTemplate = ({ data }) => {
  return (
    <div class="invoice">
      <div class="invoice-header">
        <h1>Invoice</h1>
        <div class="invoice-meta">
          <p>
            <strong>Invoice Date:</strong> {data.invoiceDate}
          </p>
          <p>
            <strong>Due Date:</strong> {data.dueDate}
          </p>
          <p>
            <strong>Invoice Number:</strong> {data.invNumber}
          </p>
        </div>
      </div>
      <table class="invoice-table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
            {data.item.map(el => {
                return (
                    <tr key={el.id}>
                      <td>{el.name}</td>
                      <td>{el.quantity}</td>
                      <td>${el.price}</td>
                      <td>${el.total}</td>
                    </tr>
                )
            })}
        </tbody>
      </table>
      <div class="invoice-total">
        <strong>Total Amount: ${data.totalAmount}</strong>
      </div>
    </div>
  );
};

export default ReportTemplate;
