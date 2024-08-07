import React from "react";
import { useState } from 'react';
import './login.css';
const Login = () => {

  const [path, setPath] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic here
  };

  return (
    <div className="login-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-7 col-sm-9">
            <div className="login-container">
              <h1 className="text-center pb-2 login-title">
                <a href="/index">Đăng nhập</a>
              </h1>
              <form onSubmit={handleSubmit}>
                <input type="hidden" name="path" value={path} onChange={(e) => setPath(e.target.value)} />
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label text-dark">Tên đăng nhập:</label>
                  <input 
                    name="id" 
                    className="form-control" 
                    id="exampleFormControlInput1" 
                    placeholder="Tên đăng nhập" 
                    required 
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput2" className="form-label text-dark">Mật khẩu:</label>
                  <input 
                    name="password" 
                    type="password" 
                    className="form-control" 
                    id="exampleFormControlInput2" 
                    placeholder="Mật khẩu" 
                    required 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {message && (
                  <div className="text-danger">
                    <p>{message}</p>
                  </div>
                )}
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary mt-1">Đăng nhập</button>
                </div>
              </form>
              <div className="mt-3 text-center">
                <a href="/register" className="link-offset-3 link-underline link-underline-opacity-0">Tạo tài khoản mới ?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
