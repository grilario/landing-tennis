import { useState } from "react";
import { CaretDown, CaretUp } from "phosphor-react";
import styles from "./styles.module.css";

interface IDetailsProps {
  title: string;
  text: string;
}

export default function Details({ title, text }: IDetailsProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <details
      className={styles.details}
      onToggle={(e) => setIsOpen(e.currentTarget.open)}
    >
      <summary>
        <span>{title}</span>
        {isOpen ? (
          <CaretUp size={28} color="#fff" />
        ) : (
          <CaretDown size={28} color="#fff" />
        )}
      </summary>
      <p>{text}</p>
    </details>
  );
}
