import { useState } from "react";
import { StepsForm, ProFormSelect as Select } from "@ant-design/pro-components";
import { Col, Row } from "antd";

import makeData from "../../../../data/automobile.json";
import ModelsData from "../../../../data/models.json";

import getYearFromIX from "../../../../helpers/getYearFromIX";

export default function StepFormItemThree(props) {
  const [models, setModels] = useState([]);
  const years = getYearFromIX();

  function findModels(make) {
    const MakeModels = ModelsData.find((i) => i.make === make);

    if (MakeModels) {
      setModels(MakeModels?.models);
    }
  }

  return (
    <StepsForm.StepForm name="time" title="Vehicle" {...props}>
      <Row
        wrap
        style={{
          justifyContent: "space-evenly",
          width: "100%",
        }}
        gutter={[8, 8]}
      >
        <Col span={12}>
          <Select
            name="vehicle_runs"
            label="Vehicle Runs"
            required
            rules={[
              {
                required: true,
                message: "",
              },
            ]}
            options={[
              {
                label: "Yes",
                value: "yes",
              },
              {
                label: "No",
                value: "no",
              },
            ]}
          />
        </Col>

        <Col span={12}>
          <Select
            label="Year"
            required
            rules={[
              {
                required: true,
                message: "",
              },
            ]}
            name="year"
            className="select-s"
            options={years.sort((a, b) => {
              return a.value < b.value ? 1 : -1;
            })}
          />
        </Col>
        <Col span={12}>
          <Select
            onChange={findModels}
            placeholder={"Make"}
            options={makeData.map((i) => ({
              label: i,
              value: i,
            }))}
            name="make"
            label="Make"
            rules={[
              {
                message: "",
                required: true,
              },
            ]}
          />
        </Col>
        <Col span={12}>
          <Select
            placeholder="Model"
            name="model"
            label="Model"
            rules={[
              {
                required: true,
                message: "",
              },
            ]}
            required
            options={models?.map((i) => ({
              label: i,
              value: i,
            }))}
          />
        </Col>
      </Row>
    </StepsForm.StepForm>
  );
}
