import { ProCard, StepsForm } from "@ant-design/pro-components";
import { message, Modal } from "antd";
import { useRef, useState } from "react";
import classes from "./Local.module.scss";
import { StepButtons } from "../StepsButtons";

import emailjs from "@emailjs/browser";

import {
  StepFormItemOne,
  StepFormItemThree,
  StepFormItemFour,
  StepFormItemTwo,
} from "../StepForm";
import { useFormDataStore } from "../../../shared/store/formData";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

export const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export default function LocalForm({ withoutStepper, classNames }) {
  const formRef = useRef(null);
  const { formData, setFormData, current, setCurrent } = useFormDataStore();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [modal, contextHolder] = Modal.useModal();

  const countDown = () => {
    let secondsToGo = 5;

    let SuccessRedirectModal = modal.success({
      title: "Your Quota successfully sent.",
      content: `We will contact with you. This page will be closed after ${secondsToGo}`,
    });

    const timer = setInterval(() => {
      secondsToGo -= 1;
      SuccessRedirectModal.update({
        content: `We will contact with you. This page will be closed after ${secondsToGo}`,
      });
    }, 1000);

    setTimeout(() => {
      clearInterval(timer);
      SuccessRedirectModal.destroy();
      navigate("/");
    }, secondsToGo * 1000);
  };

  function sendEmail(data) {
    setLoading(true);
    const date = formData.shipping.estimated_ship_date;

    const Letter = {
      ...data,
      estimated_ship_date: `${date?.$d?.getMonth() + 1}-${date?.$D}-${
        date?.$y
      }`,
      ...formData?.information, // datada bu kelmayapti
    };

    if (formRef.current) {
      emailjs
        .send(
          "service_12jpk0s",
          "template_etg7nav",
          Letter,
          "sinTCYk7iYAfE19am"
        )
        .then(
          () => {
            countDown();
            setLoading(false);
            setCurrent(0);
          },
          () => {
            message.error("Error");
            setLoading(false);
          }
        );
    }
  }

  async function Submit(data, isCurrent = true) {
    await formRef.current?.validateFields();
    setFormData({ ...formData, ...data });
    if (withoutStepper) {
      navigate("/contact");
    }
    isCurrent && setCurrent(current + 1);
    await waitTime(1000);
  }

  return (
    <ProCard
      className={clsx(classes.local, classNames?.container)}
      bodyStyle={{ padding: 0 }}
    >
      {contextHolder}
      <div className={clsx(classes.local__wrapper, classNames?.wrapper)}>
        <StepsForm
          current={withoutStepper ? 0 : current}
          formRef={formRef}
          stepsRender={withoutStepper ? () => <></> : null}
          onFinish={async (value) => {
            sendEmail(value);
            formRef.current?.validateFields();
            await waitTime(1000);
          }}
          submitter={{
            render: (e) => {
              return !withoutStepper ? (
                <StepButtons
                  current={current}
                  formElement={e}
                  set={setCurrent}
                  loading={loading}
                />
              ) : null;
            },
          }}
          containerStyle={{ margin: 0, width: "100%", minWidth: 0 }}
        >
          <StepFormItemOne
            type="local"
            customNextButton={withoutStepper}
            className={clsx(classes.step, classNames?.stepOne)}
            onFinish={async () =>
              await Submit({
                information: formRef.current?.getFieldsValue(),
              })
            }
            column={withoutStepper}
          />
          <StepFormItemTwo
            className={classes.step}
            type="local"
            onFinish={async () =>
              await Submit({
                shipping: formRef.current?.getFieldsValue(),
              })
            }
          />
          <StepFormItemThree
            type="local"
            onFinish={async () => {
              await Submit({
                vehicles: formRef.current?.getFieldsValue(),
              });
            }}
          />
          <StepFormItemFour
            information={formData}
            className={classes.step}
            resultCardClass={classes.resultCard}
            formClass={classes.formClass}
            onFinish={async () =>
              await Submit(
                {
                  contact: formRef.current?.getFieldsValue(),
                },
                false
              )
            }
            type="local"
          />
        </StepsForm>
      </div>
    </ProCard>
  );
}
