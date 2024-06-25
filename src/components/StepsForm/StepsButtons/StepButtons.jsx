import { Space, Button } from "antd";
import { useFormDataStore } from "../../../shared/store/formData";

export default function StepButtons({ current, formElement, set , loading }) {
  const { isChecked } = useFormDataStore();
  const Buttons = {
    0: (
      <Button
        type="primary"
        className="px-5"
        onClick={() => formElement.form?.submit()}
        disabled={!isChecked}
      >
        Next
      </Button>
    ),
    1: (
      <Button type="primary" onClick={() => formElement.form?.submit()}>
        Next
      </Button>
    ),
    2: (
      <Button type="primary" onClick={() => formElement.form?.submit()}>
        Next
      </Button>
    ),
    3: (
      <Button type="primary" onClick={() => formElement.form?.submit()} loading={loading}>
        Submit
      </Button>
    ),
  };

  return (
    <Space
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        paddingTop: "12px",
      }}
    >
      {current !== 0 && (
        <Button onClick={() => set(--current)}>Previous</Button>
      )}
      {Buttons[current]}
    </Space>
  );
}
