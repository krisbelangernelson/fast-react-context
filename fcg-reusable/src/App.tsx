import TextInput from "./TextInput";
import { useCustomerStore, CustomerProvider } from "./UserContext";

const Display = ({ value }: { value: "first" | "last" }) => {
  const [fieldValue] = useCustomerStore(value)

  return (
    <div className="value">
      {value}: {fieldValue}
    </div>
  );
};

const FormContainer = () => {
  return (
    <div className="container">
      <h5>FormContainer</h5>
      <TextInput value="first" />
      <TextInput value="last" />
    </div>
  );
};

const DisplayContainer = () => {
  return (
    <div className="container">
      <h5>DisplayContainer</h5>
      <Display value="first" />
      <Display value="last" />
    </div>
  );
};

const ContentContainer = () => {
  return (
    <div className="container">
      <h5>ContentContainer</h5>
      <FormContainer />
      <DisplayContainer />
    </div>
  );
};

function App() {
  return (
    <CustomerProvider>
      <div className="container">
        <h5>App</h5>
        <ContentContainer />
      </div>
    </CustomerProvider>
  );
}

export default App;
