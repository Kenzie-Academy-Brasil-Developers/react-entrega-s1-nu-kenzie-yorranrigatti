import "./styles.css";
import { FaTrash } from "react-icons/fa";

export function Card({ transaction }) {
  return (
    <div className="card">
      <div>
        <p>{transaction.description}</p>
        <div>
          <span>R$ {transaction.value}</span>
          <button>
            <FaTrash className="trash--icon" />
          </button>
        </div>
      </div>
      <span>{transaction.type}</span>
    </div>
  );
}
