import { Grid, Message } from "semantic-ui-react";
import { ComparisonTable, InputForm } from "../../components";
import { useCallback, useState } from "react";
import { useOpenAQ } from "../../queries";

export const AirQuality = () => {
  const [cities, setCities] = useState([]);

  const {
    data: cityOne,
    isLoading: cityOneLoading,
    isError: cityOneIsError,
    error: cityOneError,
  } = useOpenAQ(cities?.[0]);

  const {
    data: cityTwo,
    isLoading: cityTwoLaoding,
    isError: cityTwoIsError,
    error: cityTwoError,
  } = useOpenAQ(cities?.[1]);

  const handleCityChange = useCallback((data) => {
    setCities(data);
  },[]);

  return (
    <>
      <Grid centered padded>
        <Grid.Column width={12}>
          <InputForm onFormSubmit={handleCityChange} />
            <ComparisonTable 
                citiesData={{cityOne, cityTwo}} 
                isLoading={{cityOneLoading, cityTwoLaoding}} 
                isError={{cityOneIsError, cityTwoIsError}}
                error={{cityOneError, cityTwoError}} />
        </Grid.Column>
      </Grid>
    </>
  );
};
