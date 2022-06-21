import React, { useState, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Event from "./Event";
import reducer from "../reducers";

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const addEvent = (e) => {
    e.preventDefault();
    dispatch({
      //reducerのactionの中身
      type: "CREATE_EVENT",
      title,
      body,
    });
    setTitle("");
    setBody("");
  };

  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input
            className="form-control"
            id="formEventTitle"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">ボディ</label>
          <textarea
            className="form-control"
            id="formEventBody"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />
        </div>

        <button className="btn btn-primary mr-2" onClick={addEvent}>
          イベントを作成する
        </button>
        <button className="btn btn-danger">全てのイベントを削除する</button>
      </form>

      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディ</th>
          </tr>
        </thead>
        <tbody>
          {/* addEventで登録したイベントのstate=[{id: 1, title'タイトル1',body:'ボディー1'}] */}
          {state.map((event, index) => (
            <Event key={index} event={event} dispatch={dispatch} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
