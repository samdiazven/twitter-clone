import { colors } from "../../styles/themes";

export default function Button({ children, onClick, disabled }) {
  return (
    <>
      <button onClick={onClick} disabled={disabled}>
        {children}
      </button>
      <style jsx>
        {`
          button {
            background-color: ${colors.black};
            border: 0;
            color: ${colors.white};
            border-radius: 9999px;
            font-weight: 800;
            padding: 8px 24px;
            font-size: 16px;
            transition: opacity 0.3s ease;
            cursor: pointer;
            user-select: none;
          }
          button:hover {
            opacity: 0.7;
          }
          button[disabled] {
            pointer-events: none;
            opacity: 0.2;
          }
        `}
      </style>
    </>
  );
}
