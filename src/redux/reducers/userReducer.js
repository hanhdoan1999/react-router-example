const DEFAULT_STATE =  [
  {
      id:1,
      name:' Nguyễn văn A',
      phone:'4543254352',
      password:'3425',
      organization:'Cong ty A',
      role:'Khách hàng',
    },
    {
      id:2,
      name:' Nguyễn văn B',
      phone:'4543254352',
      password:'3425',
      organization:'Cong ty A',
      role:'Khách hàng',
    },
    {
      id:3,
      name:' Nguyễn văn C',
      phone:'4543254352',
      password:'3425',
      organization:'Cong ty C',
      role:'Khách hàng',
    },
];

const userReducer =  (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case 'ADD_USER':
            return [...state, action.payload]
        default:
            return state;
    }
}

export default userReducer 