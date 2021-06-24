import { makeStyles, Theme } from "@material-ui/core/styles";
import JoditEditor from "jodit-react";
import React from "react";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
}));

interface Props {
  data?: string;
  placeholder?: string;
  onChange?: (html: string) => void;
}

function HTMLEditor(props: Props) {
  const classes = useStyles();
  const { data, placeholder = "", onChange } = props;
  const [value, setValue] = React.useState(data || "");

  const config = React.useMemo(
    () => ({
      readonly: false,
      minHeight: 300,
      placeholder,
    }),
    [placeholder]
  );

  const onEditorChange = (html: string) => {
    if (onChange) {
      const ret = html.replace(/<\/?jodit[^>]*?>/g, "");
      onChange(ret);
    }
  };

  // React.useEffect(() => {
  //   // workaround for continuous updating data
  //   if (!value || value.length === 0) {
  //     setValue(data || "");
  //   } else if (!data) {
  //     setValue("");
  //   }
  // }, [data]);

  return (
    // @ts-ignore: Unconfigurable code
    <JoditEditor value={value} onChange={onEditorChange} config={config} />
  );
}

export default React.memo(HTMLEditor);
