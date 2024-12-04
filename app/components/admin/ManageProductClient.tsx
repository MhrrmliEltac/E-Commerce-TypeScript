"use client";
import { Product } from "@prisma/client";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { MdDelete } from "react-icons/md";
import { useCallback } from "react";
import { supabase } from "@/libs/supabaseClient";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

interface ManageProductClientProps {
  product: Product[];
}

const ManageProductClient: React.FC<ManageProductClientProps> = ({
  product,
}) => {
  const router = useRouter();
  let rows: any = [];
  if (product) {
    rows = product.map((product) => {
      return {
        id: product.id,
        image: product.image,
        name: product.name,
        price: product.price,
        brand: product.brand,
        category: product.category,
        inStock: product.inStock,
      };
    });
  }

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "price", headerName: "Price", width: 100 },
    { field: "brand", headerName: "Brand", width: 100 },
    { field: "category", headerName: "Category", width: 100 },
    { field: "brand", headerName: "Brand", width: 100 },
    {
      field: "inStock",
      headerName: "InStock",
      width: 130,
      renderCell: (params) => {
        return (
          <div>
            {params.row.inStock == true
              ? "Məhsul stokda var"
              : "Məhsul stokda yoxdur"}
          </div>
        );
      },
    },
    {
      field: "actions",
      headerName: "Action",
      width: 100,
      renderCell: (params) => {
        return (
          <button
            onClick={() => handleDelete(params.row.id, params.row.image)}
            className="cursor-pointer flex items-center justify-center text-center w-full h-full text-red-500 "
          >
            <MdDelete />
          </button>
        );
      },
    },
  ];

  const handleDelete = useCallback(async (id: string, image: any) => {
    try {
      const { error } = await supabase.storage
        .from("product-images")
        .remove(image);
      if (error) {
        console.log(error, "error message");
      }
      axios
        .delete(`/api/product/${id}`)
        .then(() => {
          toast.success("Məhsul silindi");
          router.refresh();
        })
        .catch((error) => {
          toast.error("Məhsul silinmədi");
          console.log(error, "error message");
        });
    } catch (error) {
      toast.error("Məhsul silinərkən xəta baş verdi");
      return console.log(error);
    }
  }, []);

  return (
    <div className="flex justify-center w-full mt-3 md:mt-10">
      <Paper>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: { paginationModel: { page: 0, pageSize: 5 } },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
    </div>
  );
};

export default ManageProductClient;
