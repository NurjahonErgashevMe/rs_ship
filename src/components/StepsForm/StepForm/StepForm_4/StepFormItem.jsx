import {
  ProForm,
  ProFormText,
  ProFormTextArea,
  StepsForm,
} from "@ant-design/pro-components";
import classes from "./StepFormItem.module.scss";

import classNames from "classnames";
import { Space } from "antd";
import { MaskedInput } from "antd-mask-input";
import { useRef } from "react";

export default function StepFormItemFour({
  information,
  resultCardClass,
  formClass,
  ...props
}) {
  const phoneRef = useRef();
  const date = information.shipping.estimated_ship_date;
  // const [error,setError] = useState

  return (
    <StepsForm.StepForm name="nimadir" title="Contact" {...props}>
      <div className={classNames(formClass, classes.form)}>
        <Space
          className={classes.wrap}
          classNames={{ item: classes.form_item }}
        >
          <ProFormText
            className={classes.input}
            rules={[
              {
                required: true,
                type: "string",
              },
            ]}
            name={"firstname"}
            label="First name"
          />
          <ProFormText
            className={classes.input}
            rules={[
              {
                type: "string",
                required: true,
              },
            ]}
            name={"lastname"}
            label="Last name"
          />
        </Space>
        <Space
          className={classes.wrap}
          classNames={{ item: classes.form_item }}
        >
          <ProForm.Item
            label="Phone"
            required
            rules={[
              {
                required: true,
                message: "",
                // validator: () => {
                //   const phoneValue = phoneRef.current.input.value.replace(
                //     /[_\-\s()]/g,
                //     ""
                //   );
                //   setPhoneError(phoneValue.length < 12 ? true : false);
                // },
              },
            ]}
            name={"phone"}
            // validateStatus={phoneError ? "error" : "validating"}
          >
            <MaskedInput
              ref={phoneRef}
              classNames={{ input: classes.mask_input }}
              mask={"+1 (000) 000-0000"}
              placeholder="+1 (999) 999-999"
              // status={phoneError ? "error" : ""}
            />
          </ProForm.Item>

          <ProFormText
            className={classes.input}
            rules={[
              {
                required: true,
                type: "email",
                validateTrigger: "",
              },
            ]}
            name={"email"}
            label="Email"
          />
        </Space>
        <div>
          <ProFormTextArea
            rules={[
              {
                required: false,
                type: "string",
              },
            ]}
            name={"comment"}
            label="Comment"
            style={{
              // resize: "none",
              width: "100%",
            }}
          />
        </div>
      </div>
      <div className={classNames(resultCardClass, classes.table)}>
        <ul>
          <li>
            <span>From:</span> {information?.information?.transport_from}
          </li>
          <li>
            <span>To:</span> {information?.information?.transport_to}
          </li>
          <li>
            <span>Transportation type:</span>
            {information?.shipping?.transportation_type}
          </li>
          <li>
            <span>Ship date:</span>
            {`${date?.$d?.getMonth() + 1}-${date?.$D}-${date?.$y}`}
          </li>
          <li>
            <span>Year:</span> {information?.vehicles?.year}
          </li>
          <li>
            <span>Make:</span> {information?.vehicles?.make}
          </li>
          <li>
            <span>Model:</span> {information?.vehicles?.model}
          </li>
        </ul>
      </div>
    </StepsForm.StepForm>
  );
}
