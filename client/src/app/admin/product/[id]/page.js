import Breadcrumb from "../../../../components/Breadcrumbs/Breadcrumb";
import { Input } from "../../../../components/Admin/Input";
import { Textarea } from "../../../../components/Admin/Textarea";
import SelectGroupOne from "../../../../components/Admin/SelectGroup/SelectGroupOne";

export default function EditProdcutPage({ params }) {
  const id = params?.id;
  return (
    <div>
      <Breadcrumb pageName="View Product" />
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-1">
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Product Form
              </h3>
            </div>
            <form action="#">
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <Input
                    label="Product Name"
                    placeholder="Enter Product Name"
                    value="cc"
                  />
                  <Input
                    label="Product Price"
                    placeholder="Enter Product Price"
                    type="number"
                  />
                </div>

                <SelectGroupOne />

                <div className="mb-6">
                  <Textarea
                    label="Description"
                    placeholder="Enter Product Description"
                  />
                </div>

                <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                  <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                    <h3 className="font-medium text-black dark:text-white">
                      Product Image
                    </h3>
                  </div>
                  <div className="flex flex-col gap-5.5 p-6.5">
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                  Create Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
