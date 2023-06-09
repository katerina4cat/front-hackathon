import axios from "axios";

export class UserManager {
  constructor() {
    this.url = "http://127.0.0.1:8080";
    this.refreshtoken = localStorage.getItem("refreshtoken") || undefined;
    this.id = localStorage.getItem("userID") || undefined;
  }

  async loadData() {
    if (!this.id) return false;
    if (this.refreshtoken) return await this.refreshAccess();
  }

  setToken(token) {
    this.token = token;
    this.config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }

  async setUserData() {
    try {
      const result = await axios.get(
        `${this.url}/api/v1/forms/my_form/`,
        this.config
      );
      if (result.status === 200) {
        this.useInfo = result.data;
      }
      return result;
    } catch (ex) {
      return ex.response;
    }
  }

  async refreshAccess() {
    if (!this.refreshtoken) return;
    try {
      const result = await axios.post(
        `${this.url}/api/v1/login/token/refresh/`,
        {
          refresh: this.refreshtoken,
        }
      );
      if (result.status === 200) {
        this.setToken(result.data.access);
        localStorage.setItem("refreshtoken", result.data.refresh);
        await this.setUserData();
      }
      return true;
    } catch {
      return false;
    }
  }

  async auth(login, password) {
    try {
      const result = await axios.post(`${this.url}/api/v1/login/`, {
        email: login,
        password: password,
      });
      if (result.status !== 200) return result;
      this.setToken(result.data.access);
      this.refreshtoken = result.data.resfresh;
      localStorage.setItem("refreshtoken", result.data.refresh);
      await this.setUserData();
      return result;
    } catch (ex) {
      return ex.response;
    }
  }

  async sendRequestRegister(email, password, repeatPassword) {
    try {
      const result = await axios.post(`${this.url}/api/v1/users/`, {
        email: email,
        password: password,
        repeatPassword: repeatPassword,
      });
      if (result.status === 201) {
        localStorage.setItem("userID", result.data.pk);
        this.id = result.data.pk;
      }
      return result;
    } catch (ex) {
      return ex.response;
    }
  }

  async sendAnceteInfo(
    firstName,
    lastName,
    patronymic,
    sex,
    city,
    district,
    dateBirthday,
    from,
    phoneNumber,
    educationalInstitution,
    works
  ) {
    try {
      const result = await axios.post(`${this.url}/api/v1/forms/`, {
        firstName: firstName,
        lastName: lastName,
        patronymic: patronymic,
        sex: sex,
        city: city,
        district: district,
        dateBirthday: dateBirthday,
        citizenship: from,
        phoneNumber: phoneNumber,
        education: educationalInstitution,
        workExperience: works,
      });
      return result;
    } catch (ex) {
      return ex.response;
    }
  }
}
