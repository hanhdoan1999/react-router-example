import { ADD_QUESTION, GET_QUESTION_BY_ID, DELETE_QUESTION, UPDATE_QUESTION } from '../const/ActionTypes';

const DEFAULT_STATE = [
    {
      "createdAt": "2021-07-13T02:10:09.658Z",
      "group": "Nhóm 1",
      "content": "Thái độ nhân viên CSKH có lịch sự không?",
      "options": [
        'Rất không lịch sự',
        'Không lịch sự' ,
        'Bình thường',
        'Lịch sự',
      ],
      "trueOption" : 'Lịch sự',
      "img": "https://picsum.photos/200",
      "advise": "Qui soluta possimus voluptas.\nQuaerat iure quis et commodi nesciunt cum iure.\nMolestias quo maxime ut.\nTenetur in ea quia quod repellendus quae.\nAutem officiis aliquid.",
      "id": 1
    },
    {
      "createdAt": "2021-07-12T14:49:51.924Z",
      "group": "Nhóm 2",
      "content": "Trong 6 tháng tiếp theo, bạn có sẵn sàng thay thế sản phẩm nay bằng sản phẩm khác không?",
      "options": [
        'Chắc chắn',
        'Có thể thay đổi',
       ' chưa nghĩ đến',
        'khả năng thay đổi thấp',
      ],
      "trueOption" : 'Có thể thay đổi',
      "img": "https://picsum.photos/200",
      "advise": "Cum exercitationem eum iste voluptatem.\nEt eos id voluptas nisi sit qui quae ipsam.",
      "id": 2
    },
    {
      "createdAt": "2021-07-12T12:15:14.359Z",
      "group": "Nhóm 3",
      "content": "Điều gì khiến bạn không hài lòng với nhân viên CSKH?",
      "options": [
        'Phản hồi thông tin chậm',
        'Phải giải thích nhiều lần',
        'Không biết cách xử lý vấn đề',
        'Nói không rõ ràng'
      ],
      "trueOption" : ' Nói không rõ ràng',
      "img": "https://picsum.photos/200",
      "advise": "Cum voluptatem et deserunt tempore ducimus et quos similique et.\nEnim qui illo deserunt et sunt.\nAlias perspiciatis omnis aut deserunt.\nVeritatis reprehenderit repellendus velit maxime beatae voluptas non error reprehenderit.",
      "id": 3
    },
    {
      "createdAt": "2021-07-12T12:15:14.359Z",
      "group": "Nhóm 3",
      "content": "Những phẩm chất nào của nhân viên CSKH khiến bạn hài lòng?",
      "options": [
        'Kiên nhẫn',
        'Nhiệt tình',
        'Lắng nghe',
        'Thân thiện'
      ],
      "trueOption" : 'Thân thiện',
      "img": "https://picsum.photos/200",
      "advise": "Cum voluptatem et deserunt tempore ducimus et quos similique et.\nEnim qui illo deserunt et sunt.\nAlias perspiciatis omnis aut deserunt.\nVeritatis reprehenderit repellendus velit maxime beatae voluptas non error reprehenderit.",
      "id": 4
    }
  ]
  
const questionReducer = (state = DEFAULT_STATE, action) => {
      switch(action.type){
          case ADD_QUESTION:
              return [...state, action.payload]
          case GET_QUESTION_BY_ID:
                return state.filter(el =>el.id ===action.payload)
          case DELETE_QUESTION:
              return state.filter(el => el.id !== action.payload)
          case UPDATE_QUESTION:
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

  export default questionReducer