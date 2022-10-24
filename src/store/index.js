import { configureStore } from '@reduxjs/toolkit'
import modal from "./slices/modal.slice";

export default configureStore({
  reducer: {
    modal
	}
})