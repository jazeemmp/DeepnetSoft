import { useFormik } from "formik";
import { RxCross1 } from "react-icons/rx";
import * as Yup from "yup";
import { FormValues, MenuModalProps } from "../../interface/interface";


const CreateMenuModal: React.FC<MenuModalProps> = ({ setOpenModal, handleSubmit }) => {
  const validationSchema = Yup.object({
    menuName: Yup.string().required("Menu Name is required"),
    itemName: Yup.string().required("Item Name is required"),
    price: Yup.number()
      .required("Price is required")
      .positive("Price must be positive"),
    description: Yup.string().required("Item Description is required"),
  });

  const formik = useFormik<FormValues>({
    initialValues: {
      menuName: "",
      menuDescription: "",
      itemName: "",
      price: 0,
      description: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values,"==va");
      
      handleSubmit(values);
    },
  });



  return (
    <div>
      <div
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        className="fixed  inset-0 bg-opac flex justify-center items-center z-50"
      >
        <div className="bg-[#121618] text-white p-8 rounded-lg md:w-1/3 w-[90%] ">
          <RxCross1
            onClick={() => setOpenModal(false)}
            className="text-2xl cursor-pointer"
          />
          <h2 className="text-xl text-st font-semibold mb-6">
            Create Menu Item
          </h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-6">
              <label className="block text-start text-sm font-medium mb-2">
                Menu Name
              </label>

              <input
                type="text"
                name="menuName"
                className="w-full p-2 border border-gray-600 rounded"
                placeholder="Menu Name"
                onChange={formik.handleChange}
                value={formik.values.menuName}
              />
              {formik.errors.menuName && formik.touched.menuName && (
                <div className="text-red-500 text-sm absolute ">
                  {formik.errors.menuName}
                </div>
              )}
            </div>
            <div className="mb-6">
              <label className="block text-start text-sm font-medium mb-2">
                Menu Description
              </label>
              <textarea
                name="menuDescription"
                className="w-full p-2 border border-gray-600 rounded"
                placeholder="Menu Description"
                rows={2}
                onChange={formik.handleChange}
                value={formik.values.menuDescription}
              />
              {formik.errors.menuDescription&& formik.touched.menuDescription && (
                <div className="text-red-500 text-sm absolute ">
                  {formik.errors.menuDescription}
                </div>
              )}
            </div>
            <div className="mb-6">
              <label className="block text-start text-sm font-medium mb-2">
                Item Name
              </label>
              <input
                type="text"
                name="itemName"
                className="w-full p-2 border border-gray-600 rounded"
                placeholder="Item Name"
                onChange={formik.handleChange}
                value={formik.values.itemName}
              />
              {formik.errors.itemName && formik.touched.itemName && (
                <div className="text-red-500 text-sm absolute ">
                  {formik.errors.itemName}
                </div>
              )}
            </div>
            <div className="mb-6">
              <label className="block text-start text-sm font-medium mb-2">
                Price
              </label>
              <input
                type="text"
                name="price"
                className="w-full p-2 border border-gray-600 rounded"
                placeholder="Item Price"
                onChange={formik.handleChange}
                value={formik.values.price}
              />
              {formik.errors.price && formik.touched.price && (
                <div className="text-red-500 text-sm absolute ">
                  {formik.errors.price}
                </div>
              )}
            </div>
            <div className="mb-6">
              <label className="block text-start text-sm font-medium mb-2">
                Item Description
              </label>
              <textarea
                name="description"
                className="w-full p-2 border border-gray-600 rounded"
                placeholder="Item Description"
                rows={3}
                onChange={formik.handleChange}
                value={formik.values.description}
              />
              {formik.errors.description && formik.touched.description && (
                <div className="text-red-500 text-sm absolute ">
                  {formik.errors.description}
                </div>
              )}
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateMenuModal;
