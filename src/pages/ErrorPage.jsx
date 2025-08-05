import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-screen text-center px-4">
      <h2 className="text-3xl font-bold text-primary mb-2">
        404 - Страницата не е намерена
      </h2>
      <p className="text-secondary mb-6 max-w-md">
        Съжаляваме, страницата, която търсите, не съществува или е преместена.
      </p>
      <Link
        to="/"
        className="bg-primary text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-primary/90 transition"
      >
        ⬅ Обратно към началната страница
      </Link>
    </div>
  );
};

export default ErrorPage;
