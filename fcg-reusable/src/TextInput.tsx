import { useCustomerStore } from "./UserContext";

const TextInput = ({ value }: { value: "first" | "last" }) => {
  const [fieldValue, setStore] = useCustomerStore(value);
  
  return (
    <div className="field">
      {value}:{" "}
      <input
        value={fieldValue}
        onChange={(e) => setStore({ [value]: e.target.value })}
      />
    </div>
  );
};

export default TextInput;
