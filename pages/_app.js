import AppLayout from "../components/AppLayout";

const App = ({ Component, ...PageProps }) => {
  return (
    <AppLayout>
      <Component {...PageProps} />
    </AppLayout>
  );
};

export default App;
