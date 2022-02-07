import "./styles.css"

export function TotalMoney({ listTransactions }) {
  const result = listTransactions.reduce((acc, cur) => {
    return acc + cur.value;
  }, 0);

  return (
    <div className="total--card">
      <span>Valor total</span>
      <span>$ {result}</span>
    </div>
  );
}
