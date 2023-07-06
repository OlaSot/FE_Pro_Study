const initialState = [
    { "id": 1, "name": "John", "lastname": "Doe", "age": 30, "gender": "male" },
    { "id": 2, "name": "Jane", "lastname": "Smith", "age": 25, "gender": "female" },
    { "id": 3, "name": "Alex", "lastname": "Johnson", "age": 40, "gender": "male" },
    { "id": 4, "name": "Emily", "lastname": "Brown", "age": 35, "gender": "female" },
    { "id": 5, "name": "Michael", "lastname": "Wilson", "age": 45, "gender": "male" }
    ]

export const userReducer = (state=initialState, action) => {
    if(action.type === 'REMOVE') {
        return state.filter(el => el.id !== action.payload) 
        // (({id}) => id !== action.payload) - c деструктуризацией
    }
    else if(action.type === 'ADDNUM') {
        state.find(el => el.id === action.payload).age++
        return [...state]
        
        // const ageplus = (state) => {
        //     return state.age + 1
        // }
        // return ageplus()
    }
    else if(action.type === 'SUBSTRUCT') {
        const target = state.find(el => el.id === action.payload)
        if(target.age > 0) {
            target.age--
        }
        return [...state]
    }
    else if(action.type === 'ADDUSER') {
        return [...state, {id:Date.now(), ...action.payload}]
    }
    return state
}

