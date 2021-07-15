const DEFAULT_STATE = [
    {
      "createdAt": "2021-07-13T02:10:09.658Z",
      "group": "Nhóm 1",
      "content": "Exercitationem laudantium ducimus labore. Quasi quam omnis nobis nobis aperiam aut. Libero qui veniam dolore corrupti non earum numquam et dolores.",
      "options": [
        38543,
        16620,
        53301,
        9180,
      ],
      "img": "https://picsum.photos/200",
      "advise": "Qui soluta possimus voluptas.\nQuaerat iure quis et commodi nesciunt cum iure.\nMolestias quo maxime ut.\nTenetur in ea quia quod repellendus quae.\nAutem officiis aliquid.",
      "id": "1"
    },
    {
      "createdAt": "2021-07-12T14:49:51.924Z",
      "group": "Nhóm 2",
      "content": "Amet fuga harum exercitationem pariatur et soluta. Ut quaerat voluptates voluptatem in cupiditate natus ut. Voluptas placeat illum iusto.",
      "options": [

        42803,
        51349,
        12942,
        93520,
        20113
      ],
      "img": "https://picsum.photos/200",
      "advise": "Cum exercitationem eum iste voluptatem.\nEt eos id voluptas nisi sit qui quae ipsam.",
      "id": "2"
    },
    {
      "createdAt": "2021-07-12T12:15:14.359Z",
      "group": "Nhóm 3",
      "content": "Cum aut maiores dolores possimus aut. Et tenetur quae debitis. Quasi officia pariatur.",
      "options": [
        88549,
        62460,
        98287,
        25686
      ],
      "img": "https://picsum.photos/200",
      "advise": "Cum voluptatem et deserunt tempore ducimus et quos similique et.\nEnim qui illo deserunt et sunt.\nAlias perspiciatis omnis aut deserunt.\nVeritatis reprehenderit repellendus velit maxime beatae voluptas non error reprehenderit.",
      "id": "3"
    }
  ]
  
  export default (state = DEFAULT_STATE, action) => {
      switch(action.type){
          case 'ADD_QUESTION':
              return [...state, action.payload]
          case 'GET_QUESTION_BY_ID':
                return state.filter(el =>el.id ===action.payload)
          case 'DELETE_QUESTION':
              console.log('DELETE_QUESTION',state);
              return state.filter(el => el.id !== action.payload)
          case 'UPDATE_QUESTION':
            console.log("update-question" ,action.payload);
            const question = {
            // "id": action.payload.id,
            "group": action.payload.group,
            "content": action.payload.content,
            "options": action.payoad.options,
            "img": action.payoad.img,
            "advise": action.payoad.advise
            }
            console.log(question);
            return state.map(el => el.id === action.payload.id ?  Object.assign(el,question) :el )
          default:
              return state;
      }
  }