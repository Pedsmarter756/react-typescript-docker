import axios from "axios";
import { useState } from "react";

const useRequest = ({ url, method, body, onSuccess }) => {
  const [errors, setErrors] = useState("");

  const doRequest = async (props = {}) => {
    try
    {
      setErrors("");
      const response = await axios[method](url, { ...body, ...props });

      if (onSuccess)
      {
        onSuccess(response.data);
      }

      return response.data;
    } catch (err)
    {
      // setErrors(
      //   <div>
      //     <ul className="my-0">
      //       {/* {err.response.data.errors.map((err) => (
      //         <li key={err.message}>{err.message}</li>
      //       ))} */}
      //       {`something bad happens ${err}`}
      //     </ul>
      //   </div>
      // );
      console.log(`error :------${err}`)
      setErrors(`${err}`);
    }
  };

  return { doRequest, errors };
};

export default useRequest;
