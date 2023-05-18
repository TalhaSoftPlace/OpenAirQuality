import React from "react";
import { Table, Dimmer, Loader, Card, Message } from "semantic-ui-react";
import { CustomTable } from './TableData.style';

export const TableData = React.memo(({ data, loading, isError, error }) => {
  return (
    <>
      {!loading && isError && (
        <Message negative>
          <Message.Header>Error</Message.Header>
          <p>{error.message}</p>
        </Message>
      )}
      {loading ? (
        <Dimmer active inverted>
          <Loader>Loading...</Loader>
        </Dimmer>
      ) : !!data && data?.length > 0 ? (
        data?.map((cityData) => (
          <Card fluid key={cityData?.city}>
            <Card.Content>
              <Card.Header>{cityData?.city}</Card.Header>
              <Card.Description>
                <CustomTable color="white" inverted>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Parameter</Table.HeaderCell>
                      <Table.HeaderCell>Value</Table.HeaderCell>
                      <Table.HeaderCell>Unit</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {cityData?.measurements?.map((measurement) => (
                      <Table.Row key={measurement?.parameter}>
                        <Table.Cell>{measurement?.parameter}</Table.Cell>
                        <Table.Cell>{measurement?.value}</Table.Cell>
                        <Table.Cell>{measurement?.unit}</Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </CustomTable>
              </Card.Description>
            </Card.Content>
          </Card>
        ))
      ) : (
        data === "" && <Message content="City not found!" />
      )}
    </>
  );
});
