import React from "react";
import { TableData } from "../TableData";
export const ComparisonTable = React.memo(({ citiesData, isLoading, isError, error }) => {

  
  return (
    <>
      <TableData 
        data={citiesData?.cityOne} 
        loading={isLoading.cityOneLoading}
        isError={isError.cityOneIsError}
        error={error.cityOneError} />
      <TableData 
        data={citiesData?.cityTwo} 
        loading={isLoading.cityTwoLoading}
        isError={isError.cityTwoIsError}
        error={error.cityTwoError} />
    </>
  );
});
