import { Button, Grid, TextField } from "@material-ui/core";
import { Formik } from "formik";
import { Field } from "../Field";

export function RegisterInfoUser() {
  return (
    <Formik
      initialValues={{
        email: "",
        nome: "",
        endereco: "",
        cpf: "",
        descricao: "",
      }}
      validate={(values) => {
        const errors = {
          email: "",
          nome: "",
          endereco: "",
          cpf: "",
          descricao: "",
        };
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit} style={{ marginTop: "50px" }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Endereço"
                type="text"
                placeholder="Insira o seu endereço"
                name="nome"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.endereco}
              />
              {errors.nome && touched.nome && errors.nome}
            </Grid>

            <Grid item xs={6}>
              <TextField
                label="Nome Completo"
                type="text"
                placeholder="Insira o seu nome"
                name="nome"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.nome}
              />
              {errors.nome && touched.nome && errors.nome}
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="E-mail"
                type="email"
                placeholder="Insira o seu e-mail"
                name="email"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="CPF"
                type="text"
                placeholder="Insira o seu CPF"
                name="cpf"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.cpf}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Descriçao"
                type="text"
                placeholder="Insira a descrição"
                name="descricao"
                variant="outlined"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.descricao}
                multiline
                maxRows={4}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                disabled={isSubmitting}
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
}
