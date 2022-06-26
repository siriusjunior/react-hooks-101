import React from "react";
import { DELETE_EVENT } from "../actions";
const Event = ({ dispatch, event }) => {
  // Eventコンポーネントごとのクリックイベントにidが扱えるようにするために抽出
  const id = event.id;
  const handleClickDelete = () => {
    const result = window.confirm(
      `イベント(id=${id}})を削除してよろしいですか？`
    );
    if (result) dispatch({ type: DELETE_EVENT, id });
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleClickDelete}
        >
          削除
        </button>
      </td>
    </tr>
  );
};
export default Event;
