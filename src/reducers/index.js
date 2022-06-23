//action={
//   type: 'CREATE_EVENT',
//   title: 'W杯開催のお知らせ',
//   body: '交通案内についてのご案内'
// }
//
//  state = []
//  state = [
//  {id: 1, title'タイトル1',body:'ボディー1'}
//  {id: 2, title'タイトル2',body:'ボディー2'}
//  {id: 3, title'タイトル3',body:'ボディー3'}
//  {id: 4, title'W杯開催のお知らせ',body:'交通案内についてのご案内'}
// ]
//
const events = (state = [], action) => {
  switch (action.type) {
    case "CREATE_EVENT":
      const event = { title: action.title, body: action.body };
      const length = state.length;
      // 後者は配列最後のオブジェクトのidを抜いて加算
      const id = length === 0 ? 1 : state[length - 1].id + 1;
      // stateの配列に新規オブジェクトを追加
      return [...state, { id, ...event }];
    case "DELETE_EVENT":
      // state内の配列のうち該当要素を除外(filter)して配列構築
      return state.filter((obj) => obj.id !== action.id);
    case "DELETE_ALL_EVENTS":
      return [];
    default:
      return state;
  }
};

export default events;
