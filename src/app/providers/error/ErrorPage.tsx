type ErrorPageProps = {
  error?: Error | null;
};

const ErrorPage = ({ error }: ErrorPageProps) => {
  return <div>Error looool: {error?.message}</div>;
};

export { ErrorPage };
