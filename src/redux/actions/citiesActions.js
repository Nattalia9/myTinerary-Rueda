import { createAction } from "@reduxjs/toolkit";

const getCities = createAction ('get_cities', (cities) => {

  return {
      payload: cities  
  }
})



const citiesActions = {getCities}

export default citiesActions



// import { createAsyncThunk } from "@reduxjs/toolkit";

// const get_cities = createAsyncThunk('get_cities', async(cities) => {

//   return {
//       payload: cities  
//   }
// })

// const citiesActions = {get_cities}

// export default citiesActions