import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  AlertTitle,
  Box,
  Divider,
  Link as MuiLink,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import Rehype2react from 'rehype-react';
import useThemeSettings from '../hooks/useThemeSettings';

const renderAst = new Rehype2react({
  createElement: React.createElement,
  Fragment: React.Fragment,
  components: {
    h1: (props) => <Typography variant='h3' component='h1' gutterBottom {...props} />,
    h2: (props) => (
      <Typography variant='h4' component='h2' sx={{ mt: 3 }} gutterBottom {...props} />
    ),
    h3: (props) => (
      <Typography variant='h5' component='h3' sx={{ mt: 3 }} gutterBottom {...props} />
    ),
    h4: (props) => (
      <Typography variant='h6' component='h4' sx={{ mt: 3 }} gutterBottom {...props} />
    ),
    h5: (props) => (
      <Typography variant='subtitle1' component='h5' sx={{ mt: 3 }} gutterBottom {...props} />
    ),
    h6: (props) => (
      <Typography variant='subtitle2' component='h6' sx={{ mt: 3 }} gutterBottom {...props} />
    ),
    p: (props) => (
      <Typography
        variant='body1'
        align='justify'
        sx={{ lineHeight: '1.7' }}
        gutterBottom
        {...props}
      />
    ),
    li: (props) => (
      <Typography
        variant='body1'
        component='li'
        sx={{ lineHeight: '1.7' }}
        gutterBottom
        {...props}
      />
    ),
    a: (props) => <Link {...props} />,
    table: (props) => <Table {...props} />,
    thead: (props) => <TableHead {...props} />,
    tbody: (props) => <TableBody {...props} />,
    tr: (props) => <TableRow {...props} />,
    td: (props) => <TableCell {...props} />,
    th: (props) => <TableCell component='th' {...props} />,
    info: (props) => <Alert variant='outlined' severity='info' {...props} />,
    tip: (props) => (
      <Alert
        icon={<TipsAndUpdatesIcon fontSize='inherit' />}
        variant='outlined'
        severity='success'
        {...props}
      />
    ),
    warning: (props) => <Alert variant='outlined' severity='warning' {...props} />,
    error: (props) => <Alert variant='outlined' severity='error' {...props} />,
    'alert-title': (props) => <AlertTitle sx={{ textTransform: 'uppercase' }} {...props} />,
    details: (props) => {
      console.log(props);
      return props.withoutWrapper ? (
        <Accordion {...props} />
      ) : (
        <Box sx={{ my: 2 }}>
          <Accordion {...props} />
        </Box>
      );
    },
    'details-summary': (props) => (
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant='h6' component='p' {...props} />
      </AccordionSummary>
    ),
    'details-content': AccordionDetails,
    'details-group': (props) => <Box sx={{ my: 1 }} {...props} />,
    hr: (props) => <Divider sx={{ my: 1 }} {...props} />,
  },
}).Compiler;

const Link = React.forwardRef((props, ref) => (
  <MuiLink component={GatsbyLink} innerRef={ref} {...props} />
));

const MarkdownContent = ({ htmlAst }) => {
  const { contentWidth } = useThemeSettings();

  const width = contentWidth === 'fullwidth' ? 'auto' : '740px';

  return <Box sx={{ maxWidth: width, margin: 'auto' }}>{renderAst(htmlAst)}</Box>;
};

export default MarkdownContent;
