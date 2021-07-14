const DEFAULT_STATE =  [
  {
      id:1,
      name:'A',
      phone:'4543254352',
      password:'3425',
      organization:'Cong ty A',
      role:'Thuc tap',
    },
    {
      id:2,
      name:'B',
      phone:'4543254352',
      password:'3425',
      organization:'Cong ty A',
      role:'Thuc tap',
    },
    {
      id:3,
      name:'C',
      phone:'4543254352',
      password:'3425',
      organization:'Cong ty C',
      role:'Thuc tap',
    },
];

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case 'ADD_USER':
            return [...state, action.payload]
        default:
            return state;
    }
}