import { createAsyncThunk } from "@reduxjs/toolkit";
import { userSer } from "../../service/userSer";
import { message } from "antd";

export const loginThunk = createAsyncThunk(
  "userReducer/loginThunk",
  async (payload, { rejectWithValue }) => {
    try {
      const data = await userSer.postLogin(payload.value);
      let infoUser = data.data.content;
      // console.log("infoUser: ", infoUser);
      payload.navigateCus();
      message.success("Đăng nhập thành công");
      return infoUser;
    } catch (error) {
      // console.log("error: ", error);
      message.error("Đăng nhập thất bại");
      rejectWithValue(error);
    }
  }
);
