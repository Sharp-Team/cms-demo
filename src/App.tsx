import { Button, Grid, Switch, TextField } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import "./App.css";
import Group from "./components/Group";
import HTMLEditor from "./components/HTMLEditor";
import productDetailExample from "./example/product-detail";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    height: "auto",
  },
  container: {
    padding: theme.spacing(5),
    // height: "100%",
  },
  actions: {
    display: "flex",
    flexDirection: "column",
  },
  actionRow: {
    marginTop: 10,
  },
}));

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
  container: {
    padding: theme.spacing(5),
    width: "100%",
    // height: "100%",
  },
  productTitle: {
    // fontWeight: "bold",
    // fontSize: 40,
    margin: "20px 0px 15px",
  },
  sectionTitle: {
    // fontWeight: "bold",
    // fontSize: 30,
    margin: "20px 0px 15px",
  },
  actionButton: {
    backgroundColor: "#d1006c",
    borderRadius: 4,
    width: 200,
    height: 40,
    color: "white",
    textTransform: "none",
    margin: "5px 5px",
  },
}));

function App() {
  const classes = useStyles();
  const clientClasses = clientStyles();

  const [productDetail, setProductDetail] = React.useState<{
    name: string;
    description: {
      title?: string;
      content?: string;
    };
    services: Array<{ key: string; value: string }>;
    price: number;
    actions: Array<{ name: string; enable: boolean; link: string }>;
  }>(productDetailExample);

  const handleProductNameChange = (evt: {
    target: {
      value: string;
    };
  }) => {
    const { value } = evt.target;
    setProductDetail((prev) => ({
      ...prev,
      name: value,
    }));
  };

  const handleDescriptionTitleChange = (evt: {
    target: {
      value: string;
    };
  }) => {
    const { value } = evt.target;
    setProductDetail((prev) => {
      const desc = prev.description;
      const newDesc = {
        ...desc,
        title: value,
      };
      return {
        ...prev,
        description: newDesc,
      };
    });
  };

  const onDescriptionContentChange = (value: string) => {
    setProductDetail((prev) => {
      const desc = prev.description;
      const newDesc = {
        ...desc,
        content: value,
      };
      return {
        ...prev,
        description: newDesc,
      };
    });
  };

  const onActionEnableChange =
    (actionIndex: number) => (event: { target: { checked: boolean } }) => {
      const { checked } = event.target;
      setProductDetail((prev) => {
        const actions = [...prev.actions];
        actions[actionIndex].enable = checked;
        return {
          ...prev,
          actions,
        };
      });
    };

  const onActionNameChange =
    (actionIndex: number) => (event: { target: { value: string } }) => {
      const { value } = event.target;
      setProductDetail((prev) => {
        const actions = [...prev.actions];
        actions[actionIndex].name = value;
        return {
          ...prev,
          actions,
        };
      });
    };

  const onActionLinkChange =
    (actionIndex: number) => (event: { target: { value: string } }) => {
      const { value } = event.target;
      setProductDetail((prev) => {
        const actions = [...prev.actions];
        actions[actionIndex].link = value;
        return {
          ...prev,
          actions,
        };
      });
    };

  React.useEffect(() => {
    const product = JSON.stringify(productDetail);
    console.log("product: ", product);
  }, [productDetail]);

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} md={6}>
        <div className={classes.container}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Group title="Product name">
                <TextField
                  variant="outlined"
                  margin="dense"
                  placeholder="Product name"
                  onChange={handleProductNameChange}
                  defaultValue={productDetail.name}
                />
              </Group>
            </Grid>
            <Grid item>
              <Group title="Section 1">
                <TextField
                  variant="outlined"
                  margin="dense"
                  placeholder="Section title"
                  onChange={handleDescriptionTitleChange}
                  defaultValue={productDetail.description.title}
                />
                <HTMLEditor
                  onChange={onDescriptionContentChange}
                  data={productDetail.description.content}
                />
              </Group>
            </Grid>
            <Grid item>
              <Group title="Actions">
                <div className={classes.actions}>
                  {productDetail.actions.map((action, index) => (
                    <Grid
                      container
                      key={action.name}
                      className={classes.actionRow}
                      alignItems="center"
                    >
                      <TextField
                        defaultValue={action.name}
                        variant="outlined"
                        margin="dense"
                        placeholder="Action name"
                        // onChange={onActionNameChange(index)}
                        disabled
                      />
                      <TextField
                        defaultValue={action.link}
                        variant="outlined"
                        margin="dense"
                        placeholder="Link"
                        // onChange={onActionLinkChange(index)}
                        disabled
                      />
                      <Switch
                        checked={action.enable}
                        onChange={onActionEnableChange(index)}
                      />
                    </Grid>
                  ))}
                </div>
              </Group>
            </Grid>
          </Grid>
        </div>
      </Grid>

      <Grid item xs={12} md={6}>
        <div className={classes.container}>
          <div className={clientClasses.root}>
            <h1 className={clientClasses.productTitle}>{productDetail.name}</h1>
            {productDetail.description.title && (
              <h3 className={clientClasses.sectionTitle}>
                {productDetail.description.title}
              </h3>
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
                {productDetail.actions.map((action) =>
                  action.enable ? (
                    <Grid item key={action.name}>
                      <Button
                        href={action.link}
                        className={clientClasses.actionButton}
                      >
                        {action.name}
                      </Button>
                    </Grid>
                  ) : null
                )}
              </Grid>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default App;
