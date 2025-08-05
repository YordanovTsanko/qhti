import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex-1 flex items-center justify-center px-4">
      <div className="bg-white text-center p-8 rounded-lg shadow max-w-md w-full">
        <h2 className="text-3xl font-bold text-primary mb-2">
          404 - Страницата не е намерена
        </h2>
        <p className="text-secondary mb-6">
          Съжаляваме, страницата, която търсите, не съществува или е преместена.
        </p>
        <Link
          to="/"
          className="bg-primary text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-primary/90 transition"
        >
          ⬅ Обратно към началната страница
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
