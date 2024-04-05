import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import { userSer } from "../../service/userSer";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/userReducer/userThunk";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formLogin = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: async (value) => {
      // ***
      // try {
      // cách viết trycatch thứ 1
      // const data = await axios({
      //   baseURL:
      //     "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      //   method: "POST",
      //   data: value,
      //   headers: {
      //     TokenCybersoft:
      //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2NCIsIkhldEhhblN0cmluZyI6IjAxLzA5LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcyNTE0ODgwMDAwMCIsIm5iZiI6MTY5NTkyMDQwMCwiZXhwIjoxNzI1Mjk2NDAwfQ.36nQu-fyhBElKov0sWvrvwuO832nQWmfRIHcRVPB7Mw",
      //   },
      // });
      // cách viết trycatch thứ 2:
      //   const data = await userSer.postLogin(value);
      //   let infoUser = data.data.content;
      //   console.log("😢 ~ infoUser", infoUser);
      //   // console.log("data:", data);
      // } catch (error) {
      //   console.log("error:", error);
      // }
      dispatch(loginThunk(value)).then(() => {
        message.success("Đăng nhập thành công");
        navigate("/");
      });
    },

    validationSchema: yup.object().shape({
      taiKhoan: yup
        .string()
        .required("Tài khoản không được để trống")
        .min(4, "Tài khoản ít nhất phải là 4 chữ cái"),
      matKhau: yup
        .string()
        .required("Mật khẩu không được để trống")
        .min(3, "Mật khẩu ít nhất phải là 3 chữ cái"),
    }),
  });

  return (
    <div>
      <form
        onSubmit={formLogin.handleSubmit}
        action=""
        className="border p-3 rounded-md space-y-3"
      >
        <h3 className="text-2xl font-medium">Đăng nhập</h3>
        <div>
          <label className="text-sm font-medium" htmlFor="">
            Đăng nhập
          </label>
          <input
            type="text"
            name="taiKhoan"
            id="taiKhoan"
            className="border rounded p-2 w-full"
            onChange={formLogin.handleChange}
          />
          <p className="text-red-500 h-3">{formLogin.errors.taiKhoan}</p>
        </div>
        <div>
          <label className="text-sm font-medium" htmlFor="">
            Mật khẩu
          </label>
          <input
            type="text"
            className="border rounded p-2 w-full"
            name="matKhau"
            id="matKhau"
            onChange={formLogin.handleChange}
          />
          <p className="text-red-500 h-3">{formLogin.errors.matKhau}</p>
        </div>
        <button className="bg-blue-500 text-white rounded p-2 mt-3">
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
