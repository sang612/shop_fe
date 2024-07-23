import Breadcrumb from "../../../../components/Breadcrumbs/Breadcrumb";
import { Input } from "../../../../components/Admin/Input";
import { Textarea } from "../../../../components/Admin/Textarea";
import SelectGroupOne from "../../../../components/Admin/SelectGroup/SelectGroupOne";

export default function EditProdcutPage({ params }) {
  const id = params?.id;
  return (
    <div>
      <Breadcrumb pageName="View Category" />
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-1">
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Category Form
              </h3>
            </div>
            <form action="#">
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <Input
                    label="Category Name"
                    placeholder="Enter Category Name"
                    value="cc"
                  />
                </div>

                <SelectGroupOne />

                <div className="mb-6">
                  <Textarea
                    label="Description"
                    placeholder="Enter Category Description"
                  />
                </div>

                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                  Create Category
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
