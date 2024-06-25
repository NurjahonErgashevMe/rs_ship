import React, { useEffect, useState } from "react";
import classes from "./Form.module.scss";
import {
  Button,
  Form,
  // Input,
  Select,
  // AutoComplete,
  Empty,
  Spin,
  Checkbox,
} from "antd";
import { useFormDataStore } from "../../utils/store/formData";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import useDebounce from "../../hooks/useDebounce";

// type Props = {
//   countriesData: CountryType[];
//   shadowed?: boolean;
//   buttonExist?: boolean;
// };

export default function CustomForm({
  countriesData,
  shadowed = true,
  buttonExist,
}) {
  const { formData, setFormData } = useFormDataStore();
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const [data, setData] = useState([]);

  const [searchValue, setSearchValue] = useState({
    to: "",
    from: "",
  });
  const searchFromValue = useDebounce(searchValue.from, 300);
  const searchToValue = useDebounce(searchValue.to, 300);

  useEffect(() => {
    fetch(
      `https://truck-api-kappa.vercel.app/api/no-countries/${
        !searchFromValue ? "1" : searchFromValue
      }`,
      { cache: "no-cache" }
    )
      .then((res) => res.json())
      .then((data) => {
        setData(
          data.map((i) => ({
            ...i,
            label: i.label,
            key: i.zip,
          }))
        );
      });
  }, [searchFromValue]);

  useEffect(() => {
    fetch(
      `https://truck-api-kappa.vercel.app/api/places/${
        !searchToValue ? "1" : searchToValue
      }`,
      { cache: "no-cache" }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setData(
          data.map((i) => ({
            ...i,
            label: i.label,
            key: i.zip,
          }))
        );
      });
  }, [searchToValue]);

  if (!countriesData) {
    return <Loading />;
  }

  function Submit(value) {
    setFormData({ ...formData, information: value });
    navigate("/quote");
  }
  function LoadingOrNotFound() {
    return data?.length ? (
      <div
        style={{
          height: "50px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "cetner",
        }}
      >
        <Spin
          style={{
            height: "100%",
            paddingTop: "10px",
          }}
          size="large"
        />
      </div>
    ) : (
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
    );
  }

  return (
    <div
      className={classes.form}
      style={{
        boxShadow: shadowed ? "0 0 10px rgba(0, 0, 0, 0.312)" : "",
      }}
    >
      <Form layout="vertical" onFinish={(values) => Submit(values)}>
        <Form.Item
          label="Transport FROM"
          className={classes.form__item}
          name={"transport_from"}
          rules={[
            {
              message: "This field is required",
              required: true,
            },
          ]}
        >
          <Select
            autoClearSearchValue={false}
            onSearch={(value) => {
              setSearchValue({
                ...searchValue,
                from: value,
              });
            }}
            notFoundContent={<LoadingOrNotFound />}
            filterOption={(input, option) => {
              return (option?.label ?? "")
                .toString()
                .toLowerCase()
                .includes(input.toLowerCase());
            }}
            showSearch
            allowClear
            placeholder="Zip or City"
            options={data}
          ></Select>
        </Form.Item>
        <Form.Item
          label="Transport TO"
          className={classes.form__item}
          name={"transport_to"}
          rules={[
            {
              message: "This field is required",
              required: true,
            },
          ]}
          style={{
            marginBottom: "20px",
          }}
        >
          <Select
            autoClearSearchValue={false}
            value={searchValue.to}
            notFoundContent={<LoadingOrNotFound />}
            showSearch
            allowClear
            placeholder="Zip, City or Country"
            onSearch={(value) => {
              setSearchValue({
                ...searchValue,
                to: value,
              });
            }}
            filterOption={(input, option) => {
              return (option?.label ?? "")
                .toString()
                .toLowerCase()
                .includes(input.toLowerCase());
            }}
            // options={data
            //   .filter((i) => {
            //     if (Number(searchValue.to)) {
            //       return i.label
            //         .toLowerCase()
            //         .startsWith(searchValue.to.toLowerCase());
            //     } else {
            //       return i.label
            //         .toLowerCase()
            //         .includes(searchValue.to.toLowerCase());
            //     }
            //   })
            //   .slice(0, 7)}
            options={data}
          />
        </Form.Item>
        <div className={classes.privacy_police}>
          <Checkbox
            onChange={() => setChecked((prev) => !prev)}
            className={classes.privacy_police__checkbox}
          >
            <p className={classes.privacy_police__checkbox__text}>
              By checking this box, you agree to our Terms and Privacy Policy,
              allowing us to send automated sales text messages to the provided
              phone number. Your consent is not required for purchasing any
              items, commodities, or services. Message and data rates may apply
            </p>
          </Checkbox>
        </div>
        {buttonExist && (
          <Button
            size="large"
            className={classes.form__button}
            type="primary"
            htmlType="submit"
            disabled={!checked}
          >
            Get Shipping Estimate - Free
          </Button>
        )}
      </Form>
    </div>
  );
}
