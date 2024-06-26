// import { StepFormItemOne } from "../StepsForm/StepForm";
import LocalForm from "../StepsForm/LocalForm/Local";
import classes from "./styles.module.scss";

const HeroForm = () => {
  return (
    <div className={"w-100"}>
      {/* <StepFormItemOne
        type="local"
        className={classes.step}
        wrapClass={classes.wrap}
        onFinish={async () =>
          await Submit({
            information: formRef.current?.getFieldsValue(),
          })
        }
      /> */}
      <LocalForm
        withoutStepper
        classNames={{
          stepOne: classes.step,
          wrapper: classes.wrapper,
          container: classes.container,
        }}
      />
    </div>
  );
};

export default HeroForm;
