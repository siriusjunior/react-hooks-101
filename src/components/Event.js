import React from "react";
const Event = ({ dispatch, event }) => {
  // Eventコンポーネントごとのクリックイベントにidが扱えるようにするために抽出
  const id = event.id;
  const handleClickDelete = () => {
    dispatch({ type: "DELETE_EVENT", id });
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
