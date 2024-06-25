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
// import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export default function LocalForm() {
  const formRef = useRef(null);
  const { formData, setFormData } = useFormDataStore();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [modal, contextHolder] = Modal.useModal();

  const [current, setCurrent] = useState(0);

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

    isCurrent && setCurrent((prev) => prev + 1);

    await waitTime(1000);
  }

  return (
    <ProCard className={classes.local} bodyStyle={{ padding: 0 }}>
      {contextHolder}
      <div className={classes.local__wrapper}>
        <StepsForm
          current={current}
          formRef={formRef}
          onFinish={async (value) => {
            sendEmail(value);
            formRef.current?.validateFields();
            await waitTime(1000);
          }}
          submitter={{
            render: (e) => {
              return (
                <StepButtons
                  current={current}
                  formElement={e}
                  set={setCurrent}
                  loading={loading}
                />
              );
            },
          }}
          containerStyle={{ margin: 0, width: "100%", minWidth: 0 }}
        >
          <StepFormItemOne
            type="local"
            className={classes.step}
            wrapClass={classes.wrap}
            onFinish={async () =>
              await Submit({
                information: formRef.current?.getFieldsValue(),
              })
            }
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
