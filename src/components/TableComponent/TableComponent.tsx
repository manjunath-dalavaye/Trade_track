import { useGetDataQuery } from "../../Services/Api"


export default function TableComponent() {
   const {data,isError,isLoading,isSuccess} = useGetDataQuery();
   console.log("data from Api",data);
   console.log("error from Api",isError);
   console.log("laoding from Api",isLoading);
   console.log("issuccess from Api",isSuccess);
  return (
    <div>
      <h1>Api</h1>
    </div>
  )
}
