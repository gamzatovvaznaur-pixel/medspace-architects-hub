import { Link } from "react-router-dom";

interface ConsentCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  variant?: "light" | "dark";
  id?: string;
}

const ConsentCheckbox = ({ checked, onChange, variant = "light", id = "consent" }: ConsentCheckboxProps) => {
  const isDark = variant === "dark";
  return (
    <label
      htmlFor={id}
      className={`flex items-start gap-3 cursor-pointer select-none text-[11px] leading-relaxed ${
        isDark ? "text-white/60" : "text-muted-foreground"
      }`}
    >
      <input
        id={id}
        type="checkbox"
        required
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className={`mt-0.5 h-4 w-4 shrink-0 rounded border-2 cursor-pointer accent-current ${
          isDark ? "border-white/30 bg-white/5" : "border-border bg-background"
        }`}
      />
      <span>
        Я даю согласие на{" "}
        <Link
          to="/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className={`underline ${isDark ? "hover:text-white" : "hover:text-foreground"}`}
        >
          обработку персональных данных
        </Link>{" "}
        в соответствии с Федеральным законом № 152-ФЗ и принимаю условия Политики конфиденциальности.
      </span>
    </label>
  );
};

export default ConsentCheckbox;
