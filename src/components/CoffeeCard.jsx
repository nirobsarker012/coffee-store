import { IoMdEye } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";
// import { toast } from "sonner";

const CoffeeCard = ({ singleCoff }) => {
  // console.log(singleCoff);

  const handleDelete = (_id) => {
    console.log(_id);
    // toast.warning("This is a success toast");
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result.isConfirmed);
      if (result.isConfirmed) {
        // Start deleting the api
        fetch(`http://localhost:3000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="flex flex-col gap-1">
      <div className="bg-[#F5F4F1] flex justify-between items-center p-[30px] rounded-[10px]">
        <img src={singleCoff.photo} alt="" />
        <div className="flex raleway gap-3 flex-col">
          <p className="text-[rgba(27,26,26,0.7)]">
            <span className="font-semibold">Name: </span>
            {singleCoff.name}
          </p>
          <p className="text-[rgba(27,26,26,0.7)]">
            <span className="font-semibold">Chef: </span>
            {singleCoff.chef}
          </p>
          <p className="text-[rgba(27,26,26,0.7)]">
            <span className="font-semibold">Price: </span>
            {singleCoff.price} tk
          </p>
        </div>
        <div className=" flex flex-col gap-1.5">
          <Link
            to={`/coffees/${singleCoff._id}`}
            className="text-white bg-[#D2B48C] p-[10px] rounded-[5px] cursor-pointer"
          >
            <IoMdEye />
          </Link>
          <Link to={`/updateCoffee/${singleCoff._id}`}>
            <button className="text-white bg-[#3C393B] p-[10px] rounded-[5px] cursor-pointer">
              <MdEdit />
            </button>
          </Link>
          <button
            onClick={() => {
              handleDelete(singleCoff._id);
            }}
            className="text-white bg-[#EA4744] p-[10px] rounded-[5px] cursor-pointer"
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
