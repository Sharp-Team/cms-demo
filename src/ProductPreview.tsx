import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import "./App.css";
import productDetailExample from "./example/product-detail";
import { productDetailTheme } from "./example/theme";

const clientStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    padding: 10,
    border: "1px solid gray",
    borderRadius: 5,
  },
}));

interface Props {
  productDetail: typeof productDetailExample;
}

export const ProductPreview = React.memo((props: Props) => {
  const clientClasses = clientStyles();
  const { productDetail } = props;

  return (
    <div className={clientClasses.root}>
      {/* @ts-ignore */}
      <Typography style={productDetailTheme.name}>
        {productDetail.name}
      </Typography>
      {productDetail.description.title && (
        // @ts-ignore
        <Typography style={productDetailTheme.description.title}>
          {productDetail.description.title}
        </Typography>
      )}
      {productDetail.description.content && (
        <div
          dangerouslySetInnerHTML={{
            __html: productDetail.description.content,
          }}
        ></div>
      )}
      <div style={{ marginTop: 20 }}>
        <Grid container alignItems="center" justify="center">
          {productDetail.actions.map(
            (action: { name: string; enable: boolean; link: string }) =>
              action.enable ? (
                <Grid item key={action.name}>
                  {/* @ts-ignore */}
                  <Button href={action.link} style={productDetailTheme.action}>
                    {action.name}
                  </Button>
                </Grid>
              ) : null
          )}
        </Grid>
      </div>
    </div>
  );
});
