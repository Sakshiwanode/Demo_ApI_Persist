import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiReducer from './slices/apiSlice'; // Import the api slice reducer
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

// Define RootState type
export type RootState = {
  api: ReturnType<typeof apiReducer>;
};

// Persist configuration
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

// Persist reducer
const persistedReducer = persistReducer(persistConfig, apiReducer);

const store = configureStore({
  reducer: {
    api: persistedReducer,  // Make sure api slice is added here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
export type AppDispatch = typeof store.dispatch; // Type for dispatch
