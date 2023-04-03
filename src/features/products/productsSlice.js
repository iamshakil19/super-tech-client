import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productSearchText: "",
  page: 1,
  sort: "-createdAt",
  limit: 10,
  category: "",
  subCategory: "",
  minPriceValue: 0,
  maxPriceValue: 0,
  deleteProductModal: false,
  deletingId: "",
  collectionPageCategoryFilter: "",
  homeCollectionPageCategoryFilter: "",
  tableCollectionPageCategoryFilter: "",
  storageCollectionPageCategoryFilter: "",
  steelFurnitureCollectionPageCategoryFilter: "",
  chairCollectionPageCategoryFilter: "",
  sofaCollectionPageCategoryFilter: "",
  workStationCollectionPageCategoryFilter: "",
  garmentsCollectionPageCategoryFilter: "",
  interiorCollectionPageCategoryFilter: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    handleSetMinPriceToState: (state, action) => {
      state.minPriceValue = action.payload;
    },
    handleSetMaxPriceToState: (state, action) => {
      state.maxPriceValue = action.payload;
    },
    handleDeleteProductModal: (state, action) => {
      state.deleteProductModal = action.payload.isOpen;
      state.deletingId = action.payload._id;
    },
    handleProductPage: (state, action) => {
      state.page = action.payload;
    },
    handleProductLimit: (state, action) => {
      state.limit = action.payload;
    },
    handleProductSort: (state, action) => {
      state.sort = action.payload;
    },
    handleProductCategory: (state, action) => {
      state.category = action.payload;
    },
    handleProductSubCategory: (state, action) => {
      state.subCategory = action.payload;
    },
    handleCollectionPageCategoryFilter: (state, action) => {
      state.collectionPageCategoryFilter = action.payload;
    },
    handleHomeCollectionPageCategoryFilter: (state, action) => {
      state.homeCollectionPageCategoryFilter = action.payload;
    },
    handleTableCollectionPageCategoryFilter: (state, action) => {
      state.tableCollectionPageCategoryFilter = action.payload;
    },
    handleStorageCollectionPageCategoryFilter: (state, action) => {
      state.storageCollectionPageCategoryFilter = action.payload;
    },
    handleSteelFurnitureCollectionPageCategoryFilter: (state, action) => {
      state.steelFurnitureCollectionPageCategoryFilter = action.payload;
    },
    handleChairCollectionPageCategoryFilter: (state, action) => {
      state.chairCollectionPageCategoryFilter = action.payload;
    },
    handleSofaCollectionPageCategoryFilter: (state, action) => {
      state.sofaCollectionPageCategoryFilter = action.payload;
    },
    handleWorkStationCollectionPageCategoryFilter: (state, action) => {
      state.workStationCollectionPageCategoryFilter = action.payload;
    },
    handleGarmentsCollectionPageCategoryFilter: (state, action) => {
      state.garmentsCollectionPageCategoryFilter = action.payload;
    },
    handleInteriorCollectionPageCategoryFilter: (state, action) => {
      state.interiorCollectionPageCategoryFilter = action.payload;
    },
    handleProductSearchText: (state, action) => {
      state.productSearchText = action.payload;
    },
  },
});

export const {
  handleSetMinPriceToState,
  handleSetMaxPriceToState,
  handleDeleteProductModal,
  handleProductPage,
  handleProductLimit,
  handleProductSort,
  handleProductCategory,
  handleProductSubCategory,
  handleCollectionPageCategoryFilter,
  handleHomeCollectionPageCategoryFilter,
  handleTableCollectionPageCategoryFilter,
  handleStorageCollectionPageCategoryFilter,
  handleSteelFurnitureCollectionPageCategoryFilter,
  handleChairCollectionPageCategoryFilter,
  handleSofaCollectionPageCategoryFilter,
  handleWorkStationCollectionPageCategoryFilter,
  handleGarmentsCollectionPageCategoryFilter,
  handleInteriorCollectionPageCategoryFilter,
  handleProductSearchText,
} = productsSlice.actions;
export default productsSlice.reducer;
