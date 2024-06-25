import { StepsForm } from "@ant-design/pro-components";
import { Checkbox, Form, Space, Select as SimpleSelect, Spin } from "antd";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import classes from "./StepFormItem.module.scss";
import { useFormDataStore } from "../../../../shared/store/formData";

import useDebounce from "../../../../hooks/useDebounce";

const fetchCountries = async (searchFromValue) => {
  const response = await fetch(
    `https://truck-api-kappa.vercel.app/api/no-countries/${
      !searchFromValue ? "1" : searchFromValue
    }`
  );
  return response.json();
};

const fetchPlaces = async (searchToValue) => {
  const response = await fetch(
    `https://truck-api-kappa.vercel.app/api/places/${
      !searchToValue ? "1" : searchToValue
    }`
  );
  return response.json();
};

export default function StepFormItemOne({ ...props }) {
  const { formData, isChecked, setIsChecked } = useFormDataStore();
  const [searchValue, setSearchValue] = useState({
    to: "a",
    from: "a",
  });
  const searchFromValue = useDebounce(searchValue.from, 500);
  const searchToValue = useDebounce(searchValue.to, 500);

  const {
    data: countryData,
    isLoading: isLoadingCountries,
    // refetch: fromRefetch,
  } = useQuery({
    queryKey: ["countries", searchFromValue],
    queryFn: () => fetchCountries(searchFromValue),
    keepPreviousData: true,
    // enabled: !!searchFromValue,
  });

  const { data: placeData, isLoading: isLoadingPlaces } = useQuery({
    queryKey: ["places", searchToValue],
    queryFn: () => fetchPlaces(searchToValue),
    keepPreviousData: true,
    // enabled: !!searchToValue,
  });

  const countriesOptions =
    countryData?.map((i) => ({
      ...i,
      label: i.label,
      key: i.zip,
    })) || [];

  const placesOptions =
    placeData?.map((i) => ({
      ...i,
      label: i.label,
      key: i.zip,
    })) || [];


  return (
    <StepsForm.StepForm
      name="base"
      title="Information"
      {...props}
      style={{ width: "100%" }}
    >
      <Space
        className={classes.form__wrapper}
        classNames={{ item: classes.form__item }}
      >
        <Form.Item
          label="Transport FROM"
          name={"transport_from"}
          rules={[
            {
              message: "",
              required: true,
            },
          ]}
          initialValue={formData.information.transport_from}
        >
          <SimpleSelect
            allowClear
            placeholder="Zip or City"
            filterOption={(input, option) => {
              return (option?.label ?? "")
                .toLowerCase()
                .includes(input.toLowerCase());
            }}
            showSearch
            notFoundContent={
              isLoadingCountries ? <Spin size="default" /> : null
            }
            options={countriesOptions}
            onFocus={() =>
              setSearchValue({
                ...searchValue,
                from: "a",
              })
            }
            onSearch={(value) => {
              setSearchValue({
                ...searchValue,
                from: value,
              });
            }}
          />
        </Form.Item>
        <Form.Item
          label="Transport TO"
          name={"transport_to"}
          rules={[
            {
              message: "",
              required: true,
            },
          ]}
          initialValue={formData.information.transport_to}
        >
          <SimpleSelect
            allowClear
            onFocus={() =>
              setSearchValue({
                ...searchValue,
                from: "a",
              })
            }
            onSearch={(value) => {
              setSearchValue({
                ...searchValue,
                to: value,
              });
            }}
            filterOption={(input, option) => {
              return (option?.label ?? "")
                .toLowerCase()
                .includes(input.toLowerCase());
            }}
            showSearch
            placeholder="Zip, City or Country"
            options={placesOptions}
            notFoundContent={isLoadingPlaces ? <Spin size="default" /> : null}
          />
        </Form.Item>
      </Space>
      <Space
        style={{
          maxWidth: "400px",
        }}
        className="mt-5"
      >
        <Checkbox
          onChange={() => setIsChecked(!isChecked)}
          className={classes.privacy_police__checkbox}
        >
          <p className={classes.privacy_police__checkbox__text}>
            By checking this box, you agree to receive text messages from Refine
            Ship.
          </p>
        </Checkbox>
      </Space>
    </StepsForm.StepForm>
  );
}
