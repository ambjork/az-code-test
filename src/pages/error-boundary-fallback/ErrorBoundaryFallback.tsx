import Layout from "../search/layout.tsx";

const ErrorBoundaryFallback = () => {
  return (
    <Layout>
      <div>Uh oh! The app has crashed!</div>
    </Layout>
  );
};
export default ErrorBoundaryFallback;
