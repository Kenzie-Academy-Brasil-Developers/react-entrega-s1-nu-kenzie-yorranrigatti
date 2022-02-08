import "./styles.css";

export function TotalMoney({ listTransactions }) {
  const result = listTransactions.reduce((acc, cur) => {
    if (cur.type === "entrada") {
      return acc + Number(cur.value);
    } else {
      return acc - Number(cur.value);
    }
  }, 0);

  return (
    <div className="total--card">
      <span>Valor total</span>
      <span>$ {result}</span>
    </div>
  );
}
