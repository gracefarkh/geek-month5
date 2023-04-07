import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reverseAction, requestAction } from "../redux/actions";


function MainPage() {
  const dispatch = useDispatch();

  const { status } = useSelector((state) => state.changeStatusReducer);

  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");

  const requestFn = () => {
    dispatch(requestAction(name, surName, email, website));
    dispatch(reverseAction());
  };

  return (
    <>
      <h1 style={{ marginRight: "44px" }}>Welcome back!</h1>
      <div className="UI_components">
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <input
          type="text"
          onChange={(e) => setSurName(e.target.value)}
          placeholder="Enter your surname"
        />
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <input
          type="text"
          onChange={(e) => setWebsite(e.target.value)}
          placeholder="Enter your website adress"
        />
        <button onClick={requestFn}>Send</button>
        {console.log(status)}
        {status && <p className="text">Вы успешно зарегистрировались!</p>}
      </div>
    </>
  );
}

export default MainPage;
