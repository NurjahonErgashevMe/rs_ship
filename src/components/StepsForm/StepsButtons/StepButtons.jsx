import { Space, Button } from "antd";
import { useFormDataStore } from "../../../shared/store/formData";

export default function StepButtons({
  current,
  formElement,
  set,
  loading,
  classNames,
  hideNextButton,
}) {
  const { isChecked } = useFormDataStore();
  const Buttons = {
    0: (
      <Button
        type="primary"
        onClick={() => formElement?.form?.submit()}
        disabled={!isChecked}
        rootClassName="w-100"
        htmlType="submit"
        // block
        hidden={hideNextButton === 0}
      >
        Next
      </Button>
    ),
    1: (
      <Button
        type="primary"
        onClick={() => formElement.form?.submit()}
        className={classNames?.next?.[1]}
        hidden={hideNextButton === 1}
      >
        Next
      </Button>
    ),
    2: (
      <Button
        type="primary"
        onClick={() => formElement.form?.submit()}
        classNames={classNames?.next?.[2]}
        hidden={hideNextButton === 2}
      >
        Next
      </Button>
    ),
    3: (
      <Button
        type="primary"
        onClick={() => formElement.form?.submit()}
        loading={loading}
        classNames={classNames?.submit}
        hidden={hideNextButton === 3}
      >
        Submit
      </Button>
    ),
  };

  return (
    <Space
      style={{
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "12px",
        width: "100%",
      }}
      className="w-100"
      classNames={{ item: "w-100 " }}
    >
      {current !== 0 && (
        <Button onClick={() => set(--current)} classNames={classNames?.prev}>
          Previous
        </Button>
      )}
      {Buttons[current]}
    </Space>
  );
}
