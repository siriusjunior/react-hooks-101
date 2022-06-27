import React, { useContext } from "react";
import Event from "./Event";
import AppContext from "../contexts/AppContext";
const Events = ({ state, dispatch }) => {
  const value = useContext(AppContext);
  return (
    <>
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
    </>
  );
};

export default Events;
