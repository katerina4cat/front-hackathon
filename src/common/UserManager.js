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
      return result;
    } catch {
      return false;
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
}
