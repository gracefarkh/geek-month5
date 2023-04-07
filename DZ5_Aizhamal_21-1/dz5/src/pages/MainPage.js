import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfoPage from "../components/InfoPage";
import { addAction, clearAction } from "../redux/actions";

function MainPage() {
  const dispatch = useDispatch();
  const [inputText, SetInputText] = useState(0);

  const { value, result } = useSelector((state) => state.mainReducer);

  const add = () => {
    dispatch(addAction(inputText));
    SetInputText('')
  };

  const clear = () => {
    dispatch(clearAction());
    SetInputText('')
  };

  console.log(result);

  return (
    <>
      <input
        value={inputText}
        type="number"
        onChange={(event) => SetInputText(event.target.value)}
      />
      <button onClick={add} >Add</button>
      <button onClick={clear}>Clear</button>
      <ul>
        {result.map((item) => (
          <InfoPage item={item} />
        ))}
      </ul>
      <h1>{value}</h1>
    </>
  );
}

export default MainPage;
