import { colors } from '../../styles/themes'

export default function Button ({ children, onClick }) {
  return (
        <>
            <button onClick={onClick}>
                {children}
            </button>
            <style jsx>{`
                button {
                    background-color: ${colors.black};
                    border: 0;
                    color: ${colors.white};
                    border-radius: 9999px;
                    font-weight: 800;
                    padding: 8px 24px;
                    font-size: 16px;
                    transition: opacity .3s ease;
                    cursor: pointer;
                }
                button:hover {
                    opacity: .7;
                }
            `}
            </style>
        </>
  )
}
