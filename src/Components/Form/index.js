import React from "react";
import "./index.css";

let defaultError = true;

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      fname: "",
      familyName: "",
      phone: "",
      relation: "",
      email: "",
      errorName: "",
      errorFamilyName: "",
      errorPhone: "",
      errorEmail: "",
      contactInfo: [],
    };
  }

  componentDidMount() {
    defaultError = false;
  }

  // Control Inputs

  handelChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, this.validate);
  };

  // Validate Form

  validate = () => {
    this.validateName();
    this.validateFamilyName();
    this.validatePhone();
    this.validateEmail();
  };

  validateName = () => {
    const { fname } = this.state;
    if (fname === "") this.setState({ errorName: ".نام اجباری است" });
    else if (/\d/.test(fname)) {
      this.setState({ errorName: ".نام نباید شامل اعداد باشد" });
    } else if (fname.length <= 2) {
      this.setState({
        errorName: ".نام باید حداقل 3 کاراکتر باشد",
      });
    } else this.setState({ errorName: "" });
  };

  validateFamilyName = () => {
    const { familyName } = this.state;
    if (familyName === "")
      this.setState({ errorFamilyName: ".نام خانوادگی اجباری است" });
    else if (/\d/.test(familyName)) {
      this.setState({ errorFamilyName: "نام نباید شامل اعداد یاشد." });
    } else if (familyName.length <= 2) {
      this.setState({
        errorFamilyName: ".نام خانوادگی باید حداقل 3 کاراکتر باشد",
      });
    } else this.setState({ errorFamilyName: "" });
  };

  validatePhone = () => {
    const { phone } = this.state;
    if (phone === "") this.setState({ errorPhone: "شماره تماس اجباری است" });
    else if (!/\d/.test(phone)) {
      this.setState({ errorPhone: "شماره تماس نباید شامل حروف باشد" });
    } else if (phone.length < 8) {
      this.setState({
        errorPhone: "شماره تماس باید حداقل 8 کاراکتر باشد",
      });
    } else this.setState({ errorPhone: "" });
  };

  validateEmail = () => {
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const { email } = this.state;
    if (email === "") {
      this.setState({ errorEmail: ".ایمیل اجباری است" });
    } else if (!email.match(validRegex)) {
      this.setState({
        errorEmail: ".لطفا ایمیل را به صورت صحیح وارد کنید",
      });
    } else {
      this.setState({ errorEmail: "" });
    }
  };

  render() {
    const {
      fname,
      familyName,
      phone,
      relation,
      email,
      errorName,
      errorFamilyName,
      errorPhone,
      errorEmail,
    } = this.state;
    const isValid =
      errorName === "" &&
      errorFamilyName === "" &&
      errorPhone === "" &&
      errorEmail === "" &&
      relation !== "";
    return (
      <form onSubmit={(e) => this.props.addContact(e)}>
        <h3>وب اپلیکیشن مدیریت مخاطبین</h3>
        <input
          value={fname}
          onChange={this.handelChange}
          type="text"
          name="fname"
          placeholder="...نام"
        ></input>
        <div className={this.state.errorName ? "error-message" : "empty"}>
          {this.state.errorName}
        </div>
        <input
          value={familyName}
          onChange={this.handelChange}
          type="text"
          name="familyName"
          placeholder="...نام خانوادگی"
        ></input>
        <div className={this.state.errorFamilyName ? "error-message" : "empty"}>
          {this.state.errorFamilyName}
        </div>
        <input
          value={phone}
          onChange={this.handelChange}
          type="text"
          name="phone"
          placeholder="...شماره تماس"
        ></input>
        <div className={this.state.errorPhone ? "error-message" : "empty"}>
          {this.state.errorPhone}
        </div>
        <select
          onChange={this.handelChange}
          onInput={(e) => this.setState({ courseValue: e.target.value })}
          name="relation"
          required
        >
          <option value="" disabled selected>
            نسبت
          </option>
          <option>اعضای خانواده</option>
          <option>دوست</option>
          <option>همکار</option>
          <option>فامیل</option>
        </select>
        <input
          value={email}
          onChange={this.handelChange}
          type="email"
          name="email"
          placeholder="...ایمیل"
        ></input>
        <div className={this.state.errorEmail ? "error-message" : "empty"}>
          {this.state.errorEmail}
        </div>
        <input
          className="addBtn"
          type="submit"
          value="اضافه کردن"
          disabled={!isValid || defaultError}
        ></input>
      </form>
    );
  }
}
export default Form;

// className={this.state.errorEmail ? "error-message": "empty"}
