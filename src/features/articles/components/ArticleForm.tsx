import React from 'react';
import cuid from 'cuid';
import { createArticleAsync, updateArticleAsync } from '../actions';

import { Form, FormikProps, Field, withFormik, ErrorMessage } from 'formik';
import { Article } from 'MyModels';
import { compose } from 'redux';
import { connect } from 'react-redux';

type FormValues = Pick<Article, 'title' | 'content'> & {};

const dispatchProps = {
  createArticle: (values: FormValues) =>
    createArticleAsync.request({
      id: cuid(),
      ...values,
    }),
  updateArticle: (values: Article) =>
    updateArticleAsync.request({
      ...values,
    }),
};

type Props = typeof dispatchProps & {
  article?: Article;
};

const InnerForm: React.FC<Props & FormikProps<FormValues>> = props => {
  const { isSubmitting, dirty } = props;
  return (
    <Form>
      <Field
        name="title"
        placeholder="Title"
        component="input"
        type="text"
        required
        autoFocus
      />
      <ErrorMessage name="title" />

      <Field
        name="content"
        placeholder="Article content"
        component="textarea"
        type="text"
        required
        autoFocus
      />
      <ErrorMessage name="content" />

      <button type="submit" disabled={!dirty || isSubmitting}>
        Submit
      </button>
    </Form>
  );
};

export default compose(
  connect(
    null,
    dispatchProps
  ),
  withFormik<Props, FormValues>({
    enableReinitialize: true,
    // initialize values
    mapPropsToValues: ({ article: data }) => ({
      title: (data && data.title) || '',
      content: (data && data.content) || '',
    }),
    handleSubmit: (values, form) => {
      if (form.props.article != null) {
        form.props.updateArticle({ ...form.props.article, ...values });
      } else {
        form.props.createArticle(values);
      }

      form.setSubmitting(false);
    },
  })
)(InnerForm);
