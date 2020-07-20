import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import LinearProgress, {
  LinearProgressProps,
} from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useForm } from '../../hooks/FormContext';

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number },
) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginTop: '24px;',
  },
});

export default function LinearWithValueLabel() {
  const { form, formUpdate } = useForm();

  const classes = useStyles();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    console.log(form);
    let progress = (form.step / form.maxSteps) * 100;
    setProgress(progress >= 100 ? 100 : progress);
    if (form.step >= 7) {
      formUpdate({
        ...form,
        step: 0,
      });
    }
  }, [formUpdate, form]);

  return (
    <div className={classes.root}>
      <LinearProgressWithLabel value={progress} />
    </div>
  );
}
