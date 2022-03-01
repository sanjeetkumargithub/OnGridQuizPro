import * as React from "react";
import { Grid } from "@mui/material";
import CustomCard from "./CustomCard";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const HomeComponent = ({ quizs, handleClick,page ,pageanationQuiz,noOfPages}) => {

  return (
    <>
      <Grid
        container
        justifyContent="center"
        marginTop={4}
        paddingTop={4}
        fontSize={35}
      >Quiz-Time</Grid>
      <Grid
        container
        item
        xs={12}

        marginBottom={5}
        paddingBottom={5}
      >

        {quizs.length > 0 ? (
          quizs.map((item) => (
            <CustomCard
              title={item.title}
              handleClick={() => handleClick(item)}
            />
          ))
        ) : (
          <Grid container justifyContent="center" marginTop={5} paddingTop={5} fontSize={40}> No Quiz</Grid>
        )}
        <Grid container justifyContent="center" marginTop={5} paddingTop={5}>
          <Stack spacing={2}>
            <Pagination page={page} onChange={pageanationQuiz}  count={noOfPages} variant="outlined" color="primary" />
          </Stack></Grid>
      </Grid>
    </>
  );
};

export default HomeComponent;
