const initialState = {
    num:15,
    users:[],
    favorites:[],
};


function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'ChangeNumber' :
            state = { ...state, num: action.payload }
            break;
        case 'AddUser':
            let users = [...state.users];
            users.push(action.payload)
            state = {...state, users: users}
            break;
        case 'DeleteUser':
            let users1 = [...state.users];
            users1.splice(action.payload,1)
            state = {...state, users: users1}
            break;
        case 'SaveUser':
            let favorites = [...state.favorites]
            favorites.push(action.payload)
            state = {...state, favorites}
            break;
    }
    return state;
}

export default rootReducer;


        // case 'ChangeColor':
        //     state = { ...state, color: action.payload }
        //     break;
        // case 'ChangeNumber':
        //     let num= state.number
        //     if (action.payload == 1){
        //         num+=1
        //         state = { ...state, color: "Red" }
        //     }
        //     if (action.payload == 0){
        //         num=0
        //         state = { ...state, color: "Green" }
        //     }
        //     if (action.payload == -1){
        //         num-=1
        //         state = { ...state, color: "Blue" }
        //     }
        //     state = { ...state, number: num }
        //     break;






































// import moment from "moment";
// import Utils from '../api/Utils';


// let initState = {
//   scanModalOpen: false,
//   scanned: false,
//   timeStatus: 24,
//   language: "heb",
//   camera: "back",
//   currentDate: "",
//   currentHour: moment().format('hh:mm'),
//   stateButtonText: "WORKER ID",
//   fontLoaded: false,
//   position: "on",
//   version: "0.04",
//   contactText: "",
// }


// var weekDayName = moment().format('dddd');
// var MonthName = moment().format('MMMM');
// var MonthNum = moment().format('MM');
// var DayNum = moment().format('DD');
// var HebFormat = moment().format('DD/MM/YYYY')
// var CurrentYear = moment().format('YYYY');
// initState = { ...initState, currentDate: Utils.TranslateDate(initState.language) + ", " + MonthName + " " + DayNum + ", " + CurrentYear }


// export default reducers = (state = initState, action) => {
//   switch (action.type) {
//     case 'changeModalState':
//       state = { ...state, scanModalOpen: action.payload }
//       break;

//     case 'changeScanedState':
//       state = { ...state, scanned: action.payload }
//       break;

//     case 'ChangeStateButtonText':
//       state = { ...state, stateButtonText: action.payload }
//       break;

//     case 'changeFontLoaded':
//       state = { ...state, fontLoaded: action.payload }
//       break;

//     case 'changePosition':
//       state = { ...state, position: action.payload }
//       break;

//     case 'changeTimeState':
//       state = { ...state, timeStatus: action.payload }
//       let cTime = action.payload == 12 ? moment().format('hh:mm') : moment().format('HH:mm')
//       state = { ...state, currentHour: cTime };
//       break;

//     case 'changeCurrentTime':
//       state = { ...state, currentHour: action.payload }
//       break;

//   }

//   return state;
// }
