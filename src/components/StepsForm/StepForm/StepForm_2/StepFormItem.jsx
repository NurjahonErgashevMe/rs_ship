import {
  ProFormDatePicker,
  ProFormSelect,
  StepsForm,
} from "@ant-design/pro-components";
import { Space } from "antd";

import classes from "./StepFormItem.module.scss";

export default function StepFormItemTwo(props) {
  return (
    <StepsForm.StepForm name="checkbox" title="Transportation" {...props}>
      <Space
        className={classes.form__wrapper}
        classNames={{ item: classes.form__item }}
      >
        <ProFormSelect
          label="Transportation Type"
          name="transportation_type"
          allowClear={false}
          rules={[
            {
              message: "",
              required: true,
            },
          ]}
          options={[
            {
              value: "open",
              label: "Open",
            },
            { value: "enclosed", label: "Enclosed" },
            { value: "driveaway", label: "Driveaway" },
          ]}
        />
        <ProFormDatePicker
          label="Estimated Ship Date"
          name={"estimated_ship_date"}
          placeholder={""}
          fieldProps={{
            disabledDate: (e) => e.isBefore(),
            format: "MM/DD/YYYY",
          }}
          width={"100%"}
          rules={[
            {
              message: "",
              required: true,
            },
          ]}
        />
      </Space>
    </StepsForm.StepForm>
  );
}
